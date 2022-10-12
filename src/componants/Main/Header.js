import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, CodeBracketIcon, XMarkIcon } from "@heroicons/react/24/solid";
const Header = () => {
    const [toggle, setToggle] = useState(false);
    // console.log(toggle);
    return (
        <nav className="flex justify-between items-center space-x-10 bg-gradient-to-r from-slate-400 via-slate-700 to-blue-400 h-20 ">
            <div className="w-40 flex flex-nowrap  font-bold text-2xl ml-10 text-red-500">
                <span>Learn</span>
                <span>
                    <CodeBracketIcon className="h-6 w-6"></CodeBracketIcon>
                </span>
                <span>Code</span>
            </div>
            <div
                className={`md:flex md:static justify-center text-center py-5 absolute w-full duration-500 ease-in-out font-bold text-xl ${
                    toggle ? "top-8" : "top-[-260px]"
                }`}
            >
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
            <div onClick={() => setToggle(!toggle)} className="h-8 w-8 text-slate-900 md:hidden cursor-pointer">
                {toggle ? <XMarkIcon /> : <Bars3Icon />}
            </div>
        </nav>
    );
};

export default Header;
