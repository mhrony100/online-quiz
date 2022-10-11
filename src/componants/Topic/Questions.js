import React from "react";

const Questions = ({ question }) => {
    // const { questionddd } = question;
    console.log(question.question);
    return (
        <div>
            <h1>{question.question}</h1>
        </div>
    );
};

export default Questions;
