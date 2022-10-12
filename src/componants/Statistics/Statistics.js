import React from "react";
import { useLoaderData } from "react-router-dom";

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const data = useLoaderData();
    console.log(data.data);
    return (
        <div>
            <h1 className="text-2xl"> This is Statistics</h1>
            <BarChart className="mx-auto mt-5" width={730} height={250} data={data.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;
