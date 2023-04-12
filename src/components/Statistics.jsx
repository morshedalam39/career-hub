import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const Statistics = () => {
// const[Mark , setMarks]=useState();
// useEffect(() => {
//     fetch("../../public/AssigmentMarks.json")
//       .then((res) => res.json())
//       .then((data) => setMarks(data));
//   }, []);
//   console.log(Mark);
const data=useLoaderData();
console.log(data)
    
    return (
        <div>
          <h1 className="text-center text-4xl font-bold mb-10 mt-3">Assignment Marks Chart</h1>
               <ResponsiveContainer width="90%" height={500}>
        <AreaChart
          width={500}
          height={400}
          data={data.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignment_name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey= "marks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;