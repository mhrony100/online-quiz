import React from "react";

const Options = ({ options }) => {
    // console.log(options.length);
    return (
        <div>
            {options.map((option) => (
                <h1>{option}</h1>
            ))}
        </div>
    );
};

export default Options;
