import React from "react";
import { Link } from "react-router-dom";

const Subject = ({ data }) => {
    // console.log(data);
    const { name, logo, id } = data;
    return (
        <div className="shadow-lg  h-full w-auto">
            <div className="bg-slate-400 rounded-lg">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="flex justify-between font-bold p-5 text-teal-300 bg-slate-700 rounded-b-lg">
                <h1 className="text-2xl">{name}</h1>
                <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
                    <Link to={`/quiz/${id}`}>Try Yourself</Link>
                </button>
            </div>
        </div>
    );
};

export default Subject;
