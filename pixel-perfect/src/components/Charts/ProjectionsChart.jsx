import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./ProjectionsChart.css";

const data = [
  { month: "Jan", actual: 18, projection: 24 },
  { month: "Feb", actual: 22, projection: 27 },
  { month: "Mar", actual: 20, projection: 25 },
  { month: "Apr", actual: 25, projection: 30 },
  { month: "May", actual: 15, projection: 21 },
  { month: "Jun", actual: 22, projection: 26 },
];

const ProjectionsChart = () => {
  return (
    <div className="chart-card">
      <h4 className="chart-title">Projections vs Actuals</h4>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} barGap={0} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(value) => `${value}M`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="actual" stackId="a" fill="#90caf9" />
          <Bar dataKey="projection" stackId="a" fill="#e3f2fd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsChart;
