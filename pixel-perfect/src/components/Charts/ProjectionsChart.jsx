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
import { useTheme } from '../../App';

const data = [
  { month: "Jan", actual: 18, projection: 24 },
  { month: "Feb", actual: 22, projection: 27 },
  { month: "Mar", actual: 20, projection: 25 },
  { month: "Apr", actual: 25, projection: 30 },
  { month: "May", actual: 15, projection: 21 },
  { month: "Jun", actual: 22, projection: 26 },
];

const ProjectionsChart = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`chart-card ${isDarkMode ? "darkmode" : "lightmode"}`}>
      <h4 className="chart-title" style={{ color: isDarkMode ? "#FFFFFF" : "" }}>Projections vs Actuals</h4>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} barGap={0} barSize={20}>
          <CartesianGrid vertical={false} stroke="#f0f0f0" />

          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            ticks={[0, 10, 20, 30, 40]}
            tickFormatter={(value) => `${value}M`}
            axisLine={false}
            tickLine={false}
            tickCount={4}
          />
          <Tooltip />
          <Bar dataKey="actual" stackId="a" fill="#90caf9" />
          <Bar dataKey="projection" stackId="a" fill="#e3f2fd" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default ProjectionsChart;
