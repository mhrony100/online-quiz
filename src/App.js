import { FaceFrownIcon } from "@heroicons/react/24/solid";
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
                    loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Statistics />,
                },
                {
                    path: "/blog",
                    element: <Blog />,
                },
                {
                    path: "/quiz/:id",
                    loader: async ({ params }) => {
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
                    },
                    element: <Quiz />,
                },
            ],
        },
        {
            path: "*",
            element: (
                <div className="text-center text-3xl bg-slate-500 m-20 rounded-lg">
                    Page not found <FaceFrownIcon className="h-6 w-6 mx-auto"></FaceFrownIcon>{" "}
                </div>
            ),
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
