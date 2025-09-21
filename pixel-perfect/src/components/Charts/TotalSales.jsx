// TotalSalesCard.jsx
import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./TotalSalesCard.css"; // import the CSS
import { useTheme } from '../../App';


export default function TotalSalesCard() {
    const { isDarkMode } = useTheme();

    const DATA = [
        { key: "direct", name: "Direct", value: 300.56, color: isDarkMode ? "#CFF2FF" : "#111111" },
        { key: "affiliate", name: "Affiliate", value: 135.18, color: "#BBF0C8" },
        { key: "sponsored", name: "Sponsored", value: 154.02, color: "#BDB8FF" },
        { key: "email", name: "E-mail", value: 48.96, color: "#CFF2FF" },
    ];

    const TOTAL = DATA.reduce((s, d) => s + d.value, 0);

    const [activeIndex, setActiveIndex] = useState(0);

    const activePct =
        activeIndex != null
            ? ((DATA[activeIndex].value / TOTAL) * 100).toFixed(1) + "%"
            : "";

    return (
        <div className={`sales-wrapper ${isDarkMode ? "darkmode" : "lightmode"}`}>
            <h3 className="sales-title">Total Sales</h3>

            <div className="sales-chartRow">
                <PieChart width={140} height={140}>
                    <Pie
                        data={DATA}
                        dataKey="value"
                        cx={70}
                        cy={70}
                        innerRadius={42}
                        outerRadius={58}
                        paddingAngle={7}
                        cornerRadius={20}
                        startAngle={90}
                        endAngle={-270}
                        onMouseEnter={(_, index) => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(0)}
                    >
                        {DATA.map((entry) => (
                            <Cell
                                key={`cell-${entry.key}`}
                                fill={entry.color}
                                stroke={entry.color}
                                strokeWidth={1}
                            />
                        ))}
                    </Pie>
                </PieChart>

                <div className={`sales-percentPill ${!isDarkMode ? "lightmode-text" : ""}`}>{activePct}</div>
            </div>

            <div className="sales-legend">
                {DATA.map((d) => (
                    <div key={d.key} className="sales-legendRow">
                        <div className="sales-legendLeft">
                            <span className="sales-dot" style={{ background: d.color }} />
                            <span className="sales-name">{d.name}</span>
                        </div>
                        <div className="sales-price">${d.value.toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
