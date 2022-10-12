import React from "react";
import { Link } from "react-router-dom";

const Subject = ({ data }) => {
    // console.log(data);
    const { name, logo, id, total } = data;
    return (
        <div className="shadow-lg  h-full w-auto">
            <div className="bg-slate-400 rounded-lg">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="flex justify-between font-bold p-5 text-teal-300 bg-slate-700 rounded-b-lg">
                <div>
                    <h1 className="text-2xl">{name}</h1>
                    <h1 className="text-md">Total {total} Questions</h1>
                </div>
                <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
                    <Link to={`/quiz/${id}`}>Practice</Link>
                </button>
            </div>
        </div>
    );
};

export default Subject;
