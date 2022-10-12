import React from "react";

const Options = ({ option }) => {
    // console.log(option);
    return (
        <div className="border-2 rounded-lg border-black p-5 m-3">
            {/* <h1>{option}</h1> */}
            <input type="radio" /> {option}
        </div>
    );
};

export default Options;
