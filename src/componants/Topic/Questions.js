import React from "react";
import Options from "./Options";

const Questions = ({ questions }) => {
    const { options, question, id, correctAnswer } = questions;
    const newQuestion = question.replace("<p>", "").replace("</p>", "");
    // console.log(options);
    // for (const option of options) {
    // console.log(options.index);
    // }
    return (
        <div className=" w-2/3 mx-auto p-5">
            <h1 className="text-center font-bold bg-slate-300 pt-5 rounded-t-lg">{newQuestion}</h1>
            <div className="grid grid-cols-2 bg-slate-300 p-3 pb-5 rounded-b-lg">
                {options.map((option, index) => (
                    <Options key={index} option={option}></Options>
                ))}
            </div>
        </div>
    );
};

export default Questions;
