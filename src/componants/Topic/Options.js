import React from "react";

const Options = ({ option }) => {
    // console.log(option);
    return (
        <div className="border-2 rounded-lg border-black p-5 m-3 bg-green-300 ">
            <button>{option}</button>
        </div>
    );
};

export default Options;
