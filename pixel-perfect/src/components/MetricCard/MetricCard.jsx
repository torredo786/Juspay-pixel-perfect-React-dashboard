import React from 'react';
import { Card, Typography, Space } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useTheme } from '../../App';
import './MetricCard.css';

const { Title, Text } = Typography;

const MetricCard = ({ title, value, change, isPositive, bgColor }) => {
  const { isDarkMode } = useTheme();

  return (
    <Card 
      className={`metric-card hover-scale ${isDarkMode ? 'dark-metric-card' : 'light-metric-card'}`}
      style={{
        background: isDarkMode 
          ? 'rgba(255, 255, 255, 0.02)' 
          : bgColor || '#ffffff'
      }}
      bodyStyle={{ padding: '20px' }}
    >
      <div className="metric-content">
        <Text className="metric-title">{title}</Text>
        <Title level={3} className="metric-value">
          {value}
        </Title>
        <Space align="center" className="metric-change">
          {isPositive ? (
            <ArrowUpOutlined className="change-icon positive" />
          ) : (
            <ArrowDownOutlined className="change-icon negative" />
          )}
          <Text className={`change-text ${isPositive ? 'positive' : 'negative'}`}>
            {change}
          </Text>
          <div className="trend-sparkline">
            {isPositive ? (
              <svg width="24" height="12" viewBox="0 0 24 12">
                <path
                  d="M2 10 L8 6 L14 8 L22 2"
                  stroke={isPositive ? '#52c41a' : '#ff4d4f'}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="12" viewBox="0 0 24 12">
                <path
                  d="M2 2 L8 6 L14 4 L22 10"
                  stroke={isPositive ? '#52c41a' : '#ff4d4f'}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </Space>
      </div>
    </Card>
  );
};

export default MetricCard;