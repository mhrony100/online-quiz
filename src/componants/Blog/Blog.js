import React from "react";

const Blog = () => {
    return (
        <div className="bg-slate-800 p-10 text-slate-800">
            <div className="bg-slate-400 p-5 rounded-lg">
                <p className="font-bold text-center text-3xl py-4">What Is the purpose of react router?</p>
                <p className="font-medium text-start text-xl py-2">
                    React Router is a standard library for routing in React. It enables the navigation among views of
                    various components in a React Application, allows changing the browser URL, and keeps the UI in sync
                    with the URL.
                </p>
                <p className="font-medium text-start text-xl py-2">
                    React Router, and dynamic, client-side routing, allows us to build a single-page web application
                    with navigation without the page refreshing as the user navigates. React Router uses component
                    structure to call components, which display the appropriate information.
                </p>
            </div>

            <div className="bg-slate-400 p-5 rounded-lg mt-5">
                <p className="font-bold text-center text-3xl py-4">How does Context API works</p>

                <p className="font-medium text-start text-xl py-2">
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component
                    that as it's names suggests provides the state to its children. It will hold the "store" and be the
                    parent of all the components that might need that store. Consumer as it so happens is a component
                    that consumes and uses the state
                </p>
            </div>
            <div className="bg-slate-400 p-5 rounded-lg mt-5">
                <p className="font-bold text-center text-3xl py-4">React JS useRef Hook</p>

                <p className="font-medium text-start text-xl py-2">
                    The useRef returns a mutable ref object. This object has a property called .current. The value is
                    persisted in the refContainer.current property. These values are accessed from the current property
                    of the returned object. The .current property could be initialized to the passed argument
                    initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the
                    component
                </p>
            </div>
        </div>
    );
};

export default Blog;
