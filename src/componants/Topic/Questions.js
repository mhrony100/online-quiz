import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
// import Options from "./Options";
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
        // console.log(correctAnswer);
        toast.success(`${correctAnswer}`, {
            style: {
                padding: "16px",
                color: "#22C55E",
            },
            iconTheme: {
                primary: "#22C55E",
                secondary: "#FFFAEE",
            },
        });
    };
    const checkAnswer = (option) => {
        // console.log(option);
        // console.log(correctAnswer);
        if (option === correctAnswer) {
            toast.success("Correct answer");
        } else {
            toast.error(`${correctAnswer}`, {
                style: {
                    padding: "16px",
                    color: "#c52d22",
                },
                iconTheme: {
                    primary: "#22C55E",
                    secondary: "#FFFAEE",
                },
            });
        }
    };

    // checkAnswer(correctAnswer);
    return (
        <div className=" w-2/3 mx-auto p-5">
            <ToastContainer position="top-right" reverseOrder={true}></ToastContainer>
            <div className="flex justify-between rounded-t-lg bg-slate-300 pt-5 px-8">
                <h1 className="text-center font-bold ">{newQuestion}</h1>
                <FontAwesomeIcon onClick={showAnswer} icon={faEye} className="cursor-pointer"></FontAwesomeIcon>
            </div>
            <div className="grid grid-cols-2 bg-slate-300 p-3 pb-5 rounded-b-lg">
                {options.map((option, index) => (
                    <button onClick={() => checkAnswer(option)} key={index} className=" p-5">
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Questions;
