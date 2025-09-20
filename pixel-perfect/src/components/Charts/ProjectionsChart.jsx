import React from 'react';
import { Card, Typography } from 'antd';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useTheme } from '../../App';

const { Title } = Typography;

const ProjectionsChart = () => {
  const { isDarkMode } = useTheme();

  const data = [
    { month: 'Jan', projections: 15, actuals: 20 },
    { month: 'Feb', projections: 25, actuals: 22 },
    { month: 'Mar', projections: 20, actuals: 25 },
    { month: 'Apr', projections: 30, actuals: 28 },
    { month: 'May', projections: 18, actuals: 20 },
    { month: 'Jun', projections: 25, actuals: 30 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`custom-tooltip ${isDarkMode ? 'dark' : 'light'}`}>
          <p className="tooltip-label">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}M`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card 
      className="chart-card"
      style={{
        background: isDarkMode ? '#1f1f1f' : '#ffffff',
        border: isDarkMode ? '1px solid #434343' : '1px solid #f0f0f0'
      }}
    >
      <div className="chart-header">
        <Title level={4} style={{ margin: 0, color: isDarkMode ? '#ffffff' : '#000000' }}>
          Projections vs Actuals
        </Title>
      </div>
      
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: isDarkMode ? '#8c8c8c' : '#666666' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: isDarkMode ? '#8c8c8c' : '#666666' }}
              tickFormatter={(value) => `${value}M`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="projections" 
              fill="#91d5ff" 
              radius={[4, 4, 0, 0]}
              name="Projections"
            />
            <Bar 
              dataKey="actuals" 
              fill="#1890ff" 
              radius={[4, 4, 0, 0]}
              name="Actuals"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ProjectionsChart;