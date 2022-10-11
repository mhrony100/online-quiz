// import logo from './logo.svg';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./componants/Blog/Blog";
import Main from "./componants/Main/Main";
import Statistics from "./componants/Statistics/Statistics";
import Quiz from "./componants/Topic/Quiz";
import Topic from "./componants/Topic/Topic";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Topic />,
                },
                {
                    path: "/statistics",
                    element: <Statistics />,
                },
                {
                    path: "/blog",
                    element: <Blog />,
                },
                {
                    path: "/quiz/:id",
                    loader: async ({ params }) => {
                        // console.log(params);
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
                    },
                    element: <Quiz />,
                },
            ],
        },
        {
            path: "*",
            element: <div>Page not found</div>,
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
