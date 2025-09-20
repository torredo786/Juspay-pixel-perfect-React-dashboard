import React from 'react';
import { Row, Col, Typography } from 'antd';
import MetricCard from '../MetricCard/MetricCard';
import ProjectionsChart from '../Charts/ProjectionsChart';
import RevenueChart from '../Charts/RevenueChart';
import WorldMapChart from '../Charts/WorldMapChart';
import './MainContent.css';

const { Title } = Typography;

const MainContent = () => {
  const metricsData = [
    {
      title: 'Customers',
      value: '3,781',
      change: '+11.01%',
      isPositive: true,
      bgColor: '#e6f7ff',
    },
    {
      title: 'Orders',
      value: '1,219',
      change: '-0.03%',
      isPositive: false,
      bgColor: '#f6ffed',
    },
    {
      title: 'Revenue',
      value: '$695',
      change: '+15.03%',
      isPositive: true,
      bgColor: '#fff1f0',
    },
    {
      title: 'Growth',
      value: '30.1%',
      change: '+6.08%',
      isPositive: true,
      bgColor: '#f9f0ff',
    },
  ];

  return (
    <div className="main-content">
      <div className="content-header fade-in-up">
        <Title level={2} className="page-title">eCommerce</Title>
      </div>
      
      <div className="metrics-grid">
        <Row gutter={[24, 24]}>
          {metricsData.map((metric, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <MetricCard {...metric} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="charts-section">
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <div className="chart-container fade-in-up">
              <ProjectionsChart />
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="chart-container fade-in-up">
              <WorldMapChart />
            </div>
          </Col>
        </Row>

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