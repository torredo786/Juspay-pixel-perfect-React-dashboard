import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import NotificationsPanel from '../NotificationsPanel/NotificationsPanel';
import './Dashboard.css';

const { Content } = Layout;

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notificationsPanelVisible, setNotificationsPanelVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleNotifications = () => {
    setNotificationsPanelVisible(!notificationsPanelVisible);
  };

  return (
    <Layout className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} />
      <Layout className="main-layout" >
        <Header
          onToggleSidebar={toggleSidebar}
          onToggleNotifications={toggleNotifications}
        />
        <Content className="dashboard-content">
          <div className="content-wrapper">
            <MainContent />
          </div>
        </Content>

      </Layout>
      <NotificationsPanel visible={notificationsPanelVisible} />

    </Layout>
  );
};

export default Dashboard;