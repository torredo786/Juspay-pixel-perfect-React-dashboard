import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import NotificationsPanel from '../NotificationsPanel/NotificationsPanel';
import './Dashboard.css';
import OrderList from '../Charts/OrderList';
import NoData from '../Charts/NoData';

const { Content } = Layout;

const Dashboard = () => {
  const [selectedKey, setSelectedKey] = useState('default');

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
      <Sidebar collapsed={sidebarCollapsed} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Layout className="main-layout" >
        <Header
          onToggleSidebar={toggleSidebar}
          onToggleNotifications={toggleNotifications}
          selectedKey={selectedKey}
        />
        <Content className="dashboard-content">
          {selectedKey === "default" ? <div className="content-wrapper">
            <MainContent />
          </div> :
            selectedKey === "Order-List" ? <OrderList /> : <NoData/>}
        </Content>

      </Layout>
      <NotificationsPanel visible={notificationsPanelVisible} />

    </Layout>
  );
};

export default Dashboard;