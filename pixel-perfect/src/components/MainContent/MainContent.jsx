import React from 'react';
import { Row, Col, Typography } from 'antd';
import MetricCard from '../MetricCard/MetricCard';
import ProjectionsChart from '../Charts/ProjectionsChart';
import RevenueChart from '../Charts/RevenueChart';
import WorldMapChart from '../Charts/WorldMapChart';
import './MainContent.css';
import { useTheme } from '../../App';


const { Title } = Typography;

const MainContent = () => {
  const { isDarkMode } = useTheme();

  const metricsData = [
    {
      title: 'Customers',
      value: '3,781',
      change: '+11.01%',
      isPositive: true,
      bgColor: isDarkMode ? "#E3F5FF" : '#E3F5FF',
      txtcolor: isDarkMode ? "" : '#1C1C1C',
    },
    {
      title: 'Orders',
      value: '1,219',
      change: '-0.03%',
      isPositive: false,
      bgColor: isDarkMode ? "#FFFFFF0D" : '#F7F9FB',
      txtcolor: isDarkMode ? "#FFFFFF" : '#1C1C1C',

    },
    {
      title: 'Revenue',
      value: '$695',
      change: '+15.03%',
      isPositive: true,
      bgColor: isDarkMode ? "#FFFFFF0D" : '#F7F9FB',
      txtcolor: isDarkMode ? "#FFFFFF" : '#1C1C1C',

    },
    {
      title: 'Growth',
      value: '30.1%',
      change: '+6.08%',
      isPositive: true,
      bgColor: isDarkMode ? "#E5ECF6" : '#E5ECF6',
      txtcolor: isDarkMode ? "" : '#1C1C1C',

    },
  ];



  return (
    <div className="main-content">
      <div className="content-header fade-in-up">
        <span className="page-title">eCommerce</span>
      </div>

      <div className="metrics-grid">
        <Row gutter={[16, 16]} align="top">
          {/* Left: Metric cards grid */}
          <Col flex="1">
            <Row gutter={[8, 8]}>
              {metricsData.map((metric, index) => (
                <Col xs={12} key={index}>
                  <MetricCard {...metric} />
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right: Projection chart */}
          <Col flex="1">
            <ProjectionsChart />
          </Col>
        </Row>
      </div>


      <div className="charts-section">

        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          <Col xs={24}>
            <div className="chart-container fade-in-up">
              <RevenueChart />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainContent;