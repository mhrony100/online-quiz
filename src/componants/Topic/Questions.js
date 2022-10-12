import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = ({ questions }) => {
    const { options, question, correctAnswer } = questions;
    const newQuestion = question.replace("<p>", "").replace("</p>", "");
    // console.log(questions);
    // console.log(correctAnswer);
    // for (const option of options) {
    // console.log(options.index);
    // }

    const showAnswer = () => {
        toast.success(correctAnswer);
    };
    const checkAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success("Correct answer");
        } else {
            toast.error("wrong answer");
        }
    };
    return (
        <div className=" w-2/3 mx-auto p-5">
            <ToastContainer position="top-right" reverseOrder={true}></ToastContainer>
            <div className="flex justify-between rounded-t-lg bg-slate-300 pt-5 px-8">
                <h1 className="text-center font-bold ">{newQuestion}</h1>
                <FontAwesomeIcon onClick={showAnswer} icon={faEye} className="cursor-pointer"></FontAwesomeIcon>
            </div>
            <div className="grid grid-cols-2 bg-slate-300 p-3 pb-5 rounded-b-lg gap-7 ">
                {options.map((option, index) => (
                    <button
                        onClick={() => checkAnswer(option)}
                        key={index}
                        className="border-2 border-red-500 p-5 rounded-lg bg-green-500"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Questions;
