import React from "react";
import Options from "./Options";

const Questions = ({ question }) => {
    const { options } = question;
    // console.log(options);
    return (
        <div>
            <h1 className="text-center font-bold">Question:{question.question}</h1>

            {/* <h1>Questions: {question}</h1> */}
            {/* {options.map((question) => (
                <Options key={question.id} options={options}></Options>
            ))} */}
            <h1>Options: {options}</h1>
        </div>
    );
};

export default Questions;
