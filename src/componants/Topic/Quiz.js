import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions;
    console.log(questions);
    return (
        <div>
            <h1>Quiz:</h1>
            {questions.map((question) => (
                <Questions key={questions.id} question={question}></Questions>
            ))}
        </div>
    );
};

export default Quiz;
