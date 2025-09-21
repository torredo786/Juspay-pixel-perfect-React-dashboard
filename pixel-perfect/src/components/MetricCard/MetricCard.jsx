import React from 'react';
import { Card, Typography, Space } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useTheme } from '../../App';
import './MetricCard.css';
import GrowthIcon from '../../assets/GrowthIcon';
import DeclineIcon from '../../assets/DeclineIcon';


const { Title, Text } = Typography;

const MetricCard = ({ title, value, change, isPositive, bgColor, txtcolor }) => {
  const { isDarkMode } = useTheme();

  return (
    <Card
      className="metric-card light-metric-card"
      style={{ backgroundColor: bgColor }}
    >
      <div className="metric-content" >
        <p className="metric-title">{title}</p>
        <div className='growth-container'>
          <span className="metric-value" style={{color: txtcolor}}>{value}</span>
          <div className="metric-change" style={{color: txtcolor}}>
            <span className={`change-text`} style={{color: txtcolor}}>
              {change}
            </span>
            {isPositive ? (
              <GrowthIcon />
            ) : (
              <DeclineIcon />
            )}

          </div>
        </div>

      </div>
    </Card>
  );
};

export default MetricCard;