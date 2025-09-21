import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from '../../App';
import './RevenueChart.css'


const data = [
  { month: "Jan", current: 12, previous: 8 },
  { month: "Feb", current: 8, previous: 18 },
  { month: "Mar", current: 10, previous: 14 },
  { month: "Apr", current: 15, previous: 11 },
  { month: "May", current: 20, previous: 15 },
  { month: "Jun", current: 20, previous: 23 },
];

const RevenueChart = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`container p-6 bg-white rounded-2xl shadow ${isDarkMode ? "darkmode" : "lightmode"}`}>
      <div className="revenue-title">
        <span className="revenue">Revenue</span>
        <span className="title">|</span>
        <div style={{ display: "flex" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: isDarkMode ? "#A8C5DA" : "#1C1C1C",
              display: "inline-block",
              marginRight: "6px",
              marginTop: "0.5rem"
            }}
          />
          <span>
            Current Week <strong>$58,211</strong>
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#A8C5DA",
              display: "inline-block",
              marginRight: "6px",
              marginTop: "0.5rem"

            }}
          />
          <span>Previous Week <strong>$68.768</strong></span>
        </div>

      </div>
      <ResponsiveContainer  height={318}>
        <LineChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" />
          <YAxis
            domain={[0, 30]}
            tickFormatter={(v) => `${v}M`}
            axisLine={false}  
            tickLine={false} 
          />
          <Tooltip formatter={(value) => [`$${value}M`, "Revenue"]} />

          <Line
            type="monotone"
            dataKey="current"
            stroke="#000"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#60a5fa"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
