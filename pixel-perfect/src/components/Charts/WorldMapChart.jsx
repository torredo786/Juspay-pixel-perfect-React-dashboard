import React from 'react';
import { Card, Typography, List, Space } from 'antd';
import { useTheme } from '../../App';
import worldMap from "../../assets/WorldMap.svg"
import "./WorldMap.css"
import ProgressItem from './ProgressItem';

const { Title, Text } = Typography;

const WorldMapChart = () => {
  const { isDarkMode } = useTheme();

  const locationData = [
    { city: 'New York', value: '72K' },
    { city: 'San Francisco', value: '39K' },
    { city: 'Sydney', value: '25K' },
    { city: 'Singapore', value: '61K' },
  ];

  return (
    <div
      className="chart-card"
      style={{
        background: isDarkMode ? '#1f1f1f' : '#F7F9FB',
        border: isDarkMode ? '1px solid #434343' : '1px solid #f0f0f0',
        height: '100%',
        width: "202px"
      }}
    >
      <div className="chart-header">
        <span className="r">Revenue</span>

      </div>

      <span className='world-map'>
        <img src={worldMap} alt="" />
      </span>

      <ProgressItem label="New York" value="72K" percent={72} />
      <ProgressItem label="San Francisco" value="39K" percent={39} />
      <ProgressItem label="San Francisco" value="25K" percent={25} />
      <ProgressItem label="Singapore" value="61K" percent={61} />


    </div>
  );
};

export default WorldMapChart;