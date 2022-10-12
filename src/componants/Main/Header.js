import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between space-x-10 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 h-20 p-5">
                <div>
                    <h1 className="text-xl font-bold">
                        <small className="">Learn</small>
                        <small className=" text-2xl text-red-400">#</small>Code
                    </h1>
                </div>
                <div className="font-bold text-xl ">
                    <Link to="/" className="px-2 hover:text-slate-300">
                        Topic
                    </Link>

                    <Link to="/statistics" className="px-2 hover:text-slate-300">
                        Statistics
                    </Link>
                    <Link to="/blog" className="px-2 hover:text-slate-300">
                        Blog
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
