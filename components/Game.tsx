import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { blueWords, targetWords } from "../utils/words-data";
import type { Data } from "./Interface";

enum ActionType {
    SPACE,
    NOSPACE,
}

type Props = {
    setState: (value: number | 0) => void;
    state: number;
    gameState: number;
    setData: React.Dispatch<React.SetStateAction<Data[]>>;
    data: Data[];
    words: string[];
    setWords: (value: string[]) => void;
    incrementGameState: () => void;
};

const Game: React.FC<Props> = ({
    setState,
    state,
    gameState,
    setData,
    data,
    words,
    setWords,
    incrementGameState,
}) => {
    const [currentWord, setCurrentWord] = useState<string>("start");
    const [score, setScore] = useState<number>(0);
    const [time, setTime] = useState<Date | null>(null);
    const [counter, setCounter] = useState<number>(0);
    const [interval, setIntervalCounter] = useState<string | number | NodeJS.Timeout | undefined>();

    const popWord = () => {
        const newArr = words.slice();
        const usedWord = newArr.shift()!;
        setTimeout(() => {
            setCurrentWord(usedWord);
        }, 50);
        setCurrentWord(" ");
        setWords(newArr);

        if (words.length === 0) {
            setState(state + 1);
            incrementGameState();
        }
    };

    // useEffect(() => {
    //     const concatenatedArray = targetWords[gameState].concat(distractorWords[gameState]);
    //     const shuffledArray = [...concatenatedArray].sort(() => Math.random() - 0.5);

    //     console.log(shuffledArray);

    //     setUsedWords(shuffledArray);
    // }, [gameState]);

    const nextWord = useCallback(
        (addScore: boolean = false) => {
            if (currentWord === words[1] && addScore) setScore(score + 1);

            if (currentWord !== "start") {
                var newData: Data = {
                    word: currentWord,
                    user_answer: addScore ? ActionType.NOSPACE : ActionType.SPACE,
                    correct_answer: targetWords[gameState].includes(currentWord)
                        ? ActionType.SPACE
                        : ActionType.NOSPACE,
                    time: counter,
                    number: gameState,
                };

                setData((prevData: Data[]) => prevData.concat(newData));
            }

            setCounter(0);
            setTime(new Date());

            popWord();
        },
        [currentWord, counter]
    );

    useEffect(() => {
        if (time === null) return;

        clearInterval(interval);

        // if (word1 > 0 || word2 > 0)
        if (words.length >= 0)
            setIntervalCounter(
                setInterval(() => {
                    const current: Date = new Date();
                    const seconds: number = parseFloat(
                        ((current.getTime() - time.getTime()) / 1000).toFixed(2)
                    );
                    setCounter(seconds);
                    // console.log(seconds)
                }, 10)
            );
    }, [time]);

    useEffect(() => (counter >= 1 ? nextWord(true) : undefined), [counter, nextWord]);

    // useEffect(() => {
    //     if (words.length === 0) {
    //         setState(state + 1);
    //         incrementGameState();

    //         console.log(data);
    //     }
    // }, [words]);

    useEffect(() => {
        function handleKeyDown(event: any) {
            const space = event.code === "Space";

            if (!space) return;
            if (currentWord === words[0] && counter <= 1) setScore(score + 1);

            nextWord();
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [nextWord]);

    return (
        <div className="mt-[180px]">
            <h2
                className={clsx(
                    "mt-6 text-center text-[136px] font-extrabold text-white",
                    currentWord !== "start" && "uppercase",
                    blueWords.includes(currentWord) && "text-blue-500"
                )}
            >
                {currentWord}
            </h2>
        </div>
    );
};

export default Game;
