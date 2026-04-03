import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  { name: 'Historical Slavery', count: 2400 },
  { name: 'Modern Slavery', count: 2200 },
];

const SlaveryComparison = () => {
  return (
    <div>
      <h1>Comparison of Modern Slavery and Historical Slavery</h1>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default SlaveryComparison;
