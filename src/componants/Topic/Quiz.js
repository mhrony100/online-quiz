import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const Quiz = () => {
    const quiz = useLoaderData();
    const { name, questions, total } = quiz.data;
    return (
        <div className="bg-slate-500">
            <h1 className="text-center text-2xl font-bold pt-4">{name}</h1>
            <h1 className="text-center font-bold">Total questions: {total}</h1>
            {questions.map((question) => (
                <Questions key={question.id} questions={question}></Questions>
            ))}
        </div>
    );
};

export default Quiz;
