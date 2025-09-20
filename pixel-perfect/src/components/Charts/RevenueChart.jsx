import React from 'react';
import { Card, Typography, Space, Tag } from 'antd';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useTheme } from '../../App';

const { Title, Text } = Typography;

const RevenueChart = () => {
  const { isDarkMode } = useTheme();

  const data = [
    { month: 'Jan', current: 10, previous: 15 },
    { month: 'Feb', current: 12, previous: 18 },
    { month: 'Mar', current: 15, previous: 12 },
    { month: 'Apr', current: 18, previous: 14 },
    { month: 'May', current: 16, previous: 16 },
    { month: 'Jun', current: 20, previous: 22 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`custom-tooltip ${isDarkMode ? 'dark' : 'light'}`}>
          <p className="tooltip-label">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: $${entry.value}M`}
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
        <div>
          <Title level={4} style={{ margin: 0, color: isDarkMode ? '#ffffff' : '#000000' }}>
            Revenue
          </Title>
        </div>
        <Space>
          <Tag color="processing">Current Week $58,211</Tag>
          <Tag>Previous Week $68,768</Tag>
        </Space>
      </div>
      
      <div style={{ width: '100%', height: 300, marginTop: 20 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
            <Line 
              type="monotone" 
              dataKey="current" 
              stroke="#1890ff" 
              strokeWidth={3}
              dot={{ fill: '#1890ff', strokeWidth: 2, r: 4 }}
              name="Current Week"
            />
            <Line 
              type="monotone" 
              dataKey="previous" 
              stroke="#8c8c8c" 
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: '#8c8c8c', strokeWidth: 2, r: 4 }}
              name="Previous Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RevenueChart;