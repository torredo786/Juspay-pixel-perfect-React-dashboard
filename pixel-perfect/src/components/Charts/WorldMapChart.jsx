import React from 'react';
import { Card, Typography, List, Space } from 'antd';
import { useTheme } from '../../App';

const { Title, Text } = Typography;

const WorldMapChart = () => {
  const { isDarkMode } = useTheme();

  const locationData = [
    { city: 'New York', value: '72K' },
    { city: 'San Francisco', value: '39K' },
    { city: 'Sydney', value: '25K' },
    { city: 'Singapore', value: '61K' },
  ];

  // Simple world map SVG representation
  const WorldMapSvg = () => (
    <div style={{ width: '100%', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        width="280"
        height="150"
        viewBox="0 0 280 150"
        style={{ opacity: 0.6 }}
      >
        {/* Simplified world map shapes */}
        <path
          d="M50,80 Q80,60 120,80 Q160,100 200,80 Q220,70 240,80 L240,120 L50,120 Z"
          fill={isDarkMode ? '#434343' : '#d9d9d9'}
          stroke={isDarkMode ? '#595959' : '#bfbfbf'}
          strokeWidth="1"
        />
        <path
          d="M60,40 Q90,30 130,40 Q170,50 210,40 L210,70 Q170,60 130,70 Q90,50 60,70 Z"
          fill={isDarkMode ? '#434343' : '#d9d9d9'}
          stroke={isDarkMode ? '#595959' : '#bfbfbf'}
          strokeWidth="1"
        />
        
        {/* Location dots */}
        <circle cx="80" cy="60" r="3" fill="#1890ff" />
        <circle cx="60" cy="80" r="3" fill="#1890ff" />
        <circle cx="200" cy="90" r="3" fill="#1890ff" />
        <circle cx="180" cy="70" r="3" fill="#1890ff" />
      </svg>
    </div>
  );

  return (
    <Card 
      className="chart-card"
      style={{
        background: isDarkMode ? '#1f1f1f' : '#ffffff',
        border: isDarkMode ? '1px solid #434343' : '1px solid #f0f0f0',
        height: '100%'
      }}
    >
      <div className="chart-header">
        <Title level={4} style={{ margin: 0, color: isDarkMode ? '#ffffff' : '#000000' }}>
          Revenue by Location
        </Title>
      </div>
      
      <WorldMapSvg />
      
      <List
        dataSource={locationData}
        renderItem={(item) => (
          <List.Item style={{ padding: '8px 0', borderBottom: 'none' }}>
            <Space style={{ width: '100%', justifyContent: 'space-between' }}>
              <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
                {item.city}
              </Text>
              <Text strong style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
                {item.value}
              </Text>
            </Space>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default WorldMapChart;