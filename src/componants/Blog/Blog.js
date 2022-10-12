import React from "react";

const Blog = () => {
    return (
        <div className="bg-slate-800 p-10 text-slate-200">
            <div>
                <p className="font-bold text-center text-2xl py-2">What Is React & How Does It Actually Work?</p>
                <p>
                    ReactJS is one of the most popular JavaScript libraries for mobile and web application development.
                    Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user
                    interface (UI) building called components.
                </p>
                <p>
                    A React app usually has a single root DOM node. Rendering an element into the DOM will change the
                    user interface of the page.Whenever a React component returns an element, the Virtual DOM will
                    update the real DOM to match.
                </p>

                <p className="font-bold text-center text-2xl py-4">Difference between props and state.</p>
                <p className="py-2">PROPS</p>
                <p>The Data is passed from one component to another.</p>
                <p>It is Immutable (cannot be modified).</p>
                <p>Props can be used with state and functional components.</p>
                <p>Props are read-only.</p>
                <p className="py-2">STATE</p>
                <p>The Data is passed within the component only.</p>
                <p>It is Mutable ( can be modified).</p>
                <p>State can be used only with the state components/class component (Before 16.0).</p>
                <p>State is both read and write.</p>
                <p className="font-bold text-center text-2xl py-4">Usages of useEffect</p>
                <p>
                    By using this Hook, you tell React that your component needs to do something after render. React
                    will remember the function you passed (we’ll refer to it as our “effect”), and call it later after
                    performing the DOM updates.
                </p>
            </div>
            <div className=" flex justify-center items-center h-44">
                <p>
                    <span className="text-green-500 font-bold text-2xl">Health</span>
                    <span className="text-rose-600 font-bold text-2xl">Master</span>
                    <span className="text-green-500 font-bold text-2xl">Club</span>
                </p>
            </div>
        </div>
    );
};

export default Blog;
