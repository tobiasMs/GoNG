import React, { useEffect, useState } from "react";
import xlsx from "json-as-xlsx";
import { targetWords } from "../utils/words-data";
import type { Data } from "./Interface";

enum ActionType {
    SPACE,
    NOSPACE,
}

type UserData = {
    name: String;
    age: String;
    gender: String;
};

type Props = {
    setState: (value: number | 0) => void;
    setGameState: (value: number | 0) => void;
    setData: (value: Data[]) => void;
    data: Data[];
    userData: UserData;
};

const Finish: React.FC<Props> = ({ setState, setGameState, setData, userData, data }) => {
    const [notDownloaded, setNotDownloaded] = useState<boolean>(true);
    const [splittedData, setSplittedData] = useState<Data[][]>([]);

    useEffect(() => {
        const updatedData: Data[][] = [];
        targetWords.forEach((val, i) => {
            const filteredData: Data[] = data.filter((val) => val.number === i);
            updatedData.push(filteredData);
        });
        setSplittedData(updatedData);
    }, []);

    let testResult = [
        {
            sheet: "Data Diri",
            columns: [
                { label: "Nama", value: "name" },
                { label: "Umur", value: "age" },
                { label: "Jenis Kelamin", value: "gender" },
            ],
            content: [{ name: userData.name, age: userData.age, gender: userData.gender }],
        },
        {
            sheet: "Hasil 1a",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[0],
        },
        {
            sheet: "Hasil 1b",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[1],
        },
        {
            sheet: "Hasil 2a",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[2],
        },
        {
            sheet: "Hasil 2b",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[3],
        },
        {
            sheet: "Hasil 3a",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[4],
        },
        {
            sheet: "Hasil 3b",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[5],
        },
        {
            sheet: "Hasil 4",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[6],
        },
        {
            sheet: "Hasil Main Task 1",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[7],
        },
        {
            sheet: "Hasil 5",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[8],
        },
        {
            sheet: "Hasil Main Task 2",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[9],
        },
        {
            sheet: "Hasil 6",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[10],
        },
        {
            sheet: "Hasil Main Task 3",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[11],
        },
        {
            sheet: "Hasil 7",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[12],
        },
        {
            sheet: "Hasil Main Task 4",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[13],
        },
        {
            sheet: "Hasil 8",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[14],
        },
        {
            sheet: "Hasil Main Task 5",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[15],
        },
        {
            sheet: "Hasil 9",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[16],
        },
        {
            sheet: "Hasil Main Task 6",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[17],
        },
        {
            sheet: "Hasil 10",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[18],
        },
        {
            sheet: "Hasil Main Task 7",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[19],
        },
        {
            sheet: "Hasil 11",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[20],
        },
        {
            sheet: "Hasil Main Task 8",
            columns: [
                { label: "Kata", value: "word" },
                {
                    label: "Jawaban User",
                    value: (row: Data) => (row.user_answer ? "PASS" : "SPACE"),
                },
                {
                    label: "Jawaban Benar",
                    value: (row: Data) => (row.correct_answer ? "PASS" : "SPACE"),
                },
                { label: "Waktu", value: "time" },
            ],
            content: splittedData[21],
        },
    ];

    let settings = {
        fileName: "Result",
        extraLength: 3,
        writeMode: "writeFile",
        writeOptions: {},
    };
    return (
        <div>
            <h2 className="mb-6 text-center text-xl font-extrabold text-white">Finished Test!</h2>
            <div className="grid gap-2 grid-cols-2">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setState(0);
                        setGameState(0);
                        setData([]);
                    }}
                    className="w-full flex justify-center py-2 px-4 border border-white rounded-md shadow-sm shadow-white text-lg font-medium text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                    Get another test
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        // @ts-ignore
                        xlsx(testResult, settings, () => setNotDownloaded(true));
                    }}
                    disabled={!notDownloaded}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm shadow-white text-lg font-medium text-black bg-white hover:bg-gray-300 disabled:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                    {notDownloaded ? "Download Data" : "Data is Downloaded"}
                </button>
            </div>
            {/* <br></br> */}
            {/* {
                JSON.stringify(data)
            } */}
        </div>
    );
};

export default Finish;
