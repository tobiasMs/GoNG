import React, { useEffect, useState } from "react";
import Image from "next/image";
import UserInfo from "./UserInfo";
import Game from "./Game";
import Finish from "./Finish";
import Guide from "./Guide";
import FirstGuide from "./FirstGuide";
import FirstGuidePart2 from "./FirstGuidePart2";
import { distractorWords, targetWords } from "../utils/words-data";

enum ActionType {
    SPACE,
    NOSPACE,
}

export type Data = {
    word: String;
    user_answer: ActionType;
    correct_answer: ActionType;
    time: number;
    number: number;
};

type UserData = {
    name: String;
    age: String;
    gender: String;
};

const Interface: React.FC = () => {
    const [data, setData] = React.useState<Data[]>([]);
    const [userData, setUserData] = React.useState<UserData>({
        name: "",
        age: "",
        gender: "Laki-laki",
    });
    const [state, setState] = React.useState<number>(0);
    const [gameState, setGameState] = React.useState<number>(0);
    // console.log(state, gameState);

    const [usedWords, setUsedWords] = useState<string[]>(
        targetWords[gameState]?.concat(distractorWords[gameState])
    );

    useEffect(() => {
        if (targetWords[gameState]) {
            const concatenatedArray = targetWords[gameState]?.concat(distractorWords[gameState]);
            const shuffledArray = [...concatenatedArray].sort(() => Math.random() - 0.5);

            setUsedWords(shuffledArray);
        }
    }, [gameState]);

    const incrementGameState = () => {
        setGameState(gameState + 1);
    };

    return (
        <>
            {/* <div className="sm:mx-auto sm:w-full sm:max-w-md"> */}
            {/* <div className="flex items-center p-3">
          <Image
            width={128}
            height={128}
            className="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
            alt="Workflow"
          />
          <div className="mx-2">
            <h2 className="text-xl font-extrabold text-white">Go - No Go Project</h2>
            <p className="mt-1 text-xs text-gray-300">
                ada pertanyaan?{' '}
                <a href="#" className="font-medium text-white hover:text-gray-300">
                hubungi kami
                </a>
            </p>

          </div>
        </div> */}
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto w-full">
                    <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6 mb-5" action="#" method="POST">
                            {
                                // User Information Form
                                state === 0 && (
                                    <UserInfo
                                        setState={setState}
                                        userData={userData}
                                        setUserData={setUserData}
                                    />
                                )
                            }
                            {
                                // First Guide
                                state === 1 && <FirstGuide setState={setState} state={state} />
                            }
                            {
                                // First Guide Part2
                                state === 2 && <FirstGuidePart2 setState={setState} state={state} />
                            }
                            {state > 2 && gameState < targetWords.length && state % 2 !== 0 && (
                                <Guide setState={setState} state={state} gameState={gameState} />
                            )}
                            {state > 2 && gameState < targetWords.length && state % 2 === 0 && (
                                <Game
                                    setState={setState}
                                    state={state}
                                    gameState={gameState}
                                    setData={setData}
                                    data={data}
                                    incrementGameState={incrementGameState}
                                    words={usedWords}
                                    setWords={setUsedWords}
                                />
                            )}
                            {gameState === targetWords.length && (
                                <Finish
                                    setState={setState}
                                    setGameState={setGameState}
                                    data={data}
                                    userData={userData}
                                    setData={setData}
                                />
                            )}
                            {/* {
                            // Guide 1st Session
                            state === 1?
                            <Guide words={["NARKOBA", "NAPZA"]} setState={setState} state={state}/>:<></>
                        }
                        {
                            // 1st Session
                            state === 2?
                            <Game words={["NARKOBA", "NAPZA"]} setState={setState} state={state} setData={setData} data={data} />:<></>
                        }
                        {
                            // Guide 2nd Session
                            state === 3?
                            <Guide words={["NAPZA", "NARKOBA"]} setState={setState} state={state}/>:<></>
                        }
                        {
                            // 2nd Session
                            state === 4?
                            <Game words={["NAPZA", "NARKOBA"]} setState={setState} state={state} setData={setData} data={data} />:<></>
                        }
                        {
                            // Guide 3rd Session
                            state === 5?
                            <Guide words={["PECANDU", "PENYALAHGUNA"]} setState={setState} state={state}/>:<></>
                        }
                        {
                            // Guide 3rd Session
                            state === 6?
                            <Game words={["PECANDU", "PENYALAHGUNA"]} setState={setState} state={state} setData={setData} data={data} />:<></>
                        }
                        {
                            // Guide 4th Session
                            state === 7?
                            <Guide words={["PENYALAHGUNA", "PECANDU"]} setState={setState} state={state}/>:<></>
                        }
                        {
                            // Guide 4th Session
                            state === 8?
                            <Game words={["PENYALAHGUNA", "PECANDU"]} setState={setState} state={state} setData={setData} data={data} />:<></>
                        }
                        {
                            // Guide 3rd Session
                            state === 5?
                            <Guide words={["NARKOBA POSITIF", "NARKOBA NEGATIF"]} setState={setState} state={state}/>:<></>
                        }
                        {
                            // 3rd Session
                            state === 6?
                            <Game words={["NARKOBA POSITIF", "NARKOBA NEGATIF"]} setState={setState} state={state} setData={setData} data={data} />:<></>
                        }
                        {
                            // Guide 4th Session
                            state === 7?
                            <Guide words={["NAPZA POSITIF", "NAPZA NEGATIF"]} setState={setState} state={state}/>:<></>
                        }
                        {
                            // 4th Session
                            state === 8?
                            <Game words={["NAPZA POSITIF", "NAPZA NEGATIF"]} setState={setState} state={state} setData={setData} data={data} />:<></>
                        }
                        {
                            // Guide 5th Session
                            state === 9?
                            <Guide words={["PENYALAHGUNA POSITIF", "PENYALAHGUNA NEGATIF"]} setState={setState} state={state}/>:<></>
                        }
                        {
                            // 5th Session
                            state === 10?
                            <Game words={["PENYALAHGUNA POSITIF", "PENYALAHGUNA NEGATIF"]} setState={setState} state={state} setData={setData} data={data} />:<></>
                        }
                        {
                            // Guide 6th Session
                            state === 11?
                            <Guide words={["PECANDU POSITIF", "PECANDU NEGATIF"]} setState={setState} state={state}/>:<></>
                        }
                        {
                            // 6th Session
                            state === 12?
                            <Game words={["PECANDU POSITIF", "PECANDU NEGATIF"]} setState={setState} state={state} setData={setData} data={data} />:<></>
                        } */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Interface;
