import React from 'react';
import { Card, Typography, List, Avatar, Badge, Space, Button, Divider } from 'antd';
import {
  UserOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { useTheme } from '../../App';
import './NotificationsPanel.css';
import BugOutlined from "../../assets/BugOutlined"
import PhoneOutlined from '../../assets/PhoneOutlined';
import Avatar1 from "../../assets/Avatar1.svg"
import Avatar2 from "../../assets/Avatar2.svg"
import Avatar3 from "../../assets/Avatar3.svg"
import Avatar4 from "../../assets/Avatar4.svg"
import Avatar5 from "../../assets/Avatar5.svg"
import Avatar6 from "../../assets/Avatar6.svg"
import Avatar7 from "../../assets/Avatar7.svg"
import Avatar8 from "../../assets/Avatar8.svg"
import Avatar9 from "../../assets/Avatar9.svg"
import Avatar10 from "../../assets/Avatar10.svg"
import Avatar11 from "../../assets/Avatar11.svg"


const { Title, Text } = Typography;

const NotificationsPanel = ({ visible }) => {
  const { isDarkMode } = useTheme();

  const notifications = [
    {
      id: 1,
      type: 'bug',
      icon: <BugOutlined />,
      title: 'You have a bug that needs...',
      time: 'Just now',
    },
    {
      id: 2,
      type: 'user',
      icon: <UserOutlined />,
      title: 'New user registered',
      time: '59 minutes ago',
    },
    {
      id: 3,
      type: 'bug',
      icon: <BugOutlined />,
      title: 'You have a bug that needs...',
      time: '12 hours ago',
    },
    {
      id: 4,
      type: 'subscription',
      icon: <PhoneOutlined />,
      title: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
    },
  ];

  const activities = [
    {
      id: 1,
      avatar: Avatar1,
      title: 'You have a bug that needs...',
      time: 'Just now',
      color: '#ff4d4f',
    },
    {
      id: 2,
      avatar: Avatar2,
      title: 'Released a new version',
      time: '59 minutes ago',
      color: '#52c41a',
    },
    {
      id: 3,
      avatar: Avatar3,
      title: 'Submitted a bug',
      time: '12 hours ago',
      color: '#1890ff',
    },
    {
      id: 4,
      avatar: Avatar4,
      title: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      color: '#faad14',
    },
    {
      id: 5,
      avatar: Avatar5,
      title: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
      color: '#ff4d4f',
    },
  ];

  const contacts = [
    { id: 1, name: 'Natali Craig', avatar: Avatar6 },
    { id: 2, name: 'Drew Cano', avatar: Avatar7 },
    { id: 3, name: 'Orlando Diggs', avatar: Avatar8 },
    { id: 4, name: 'Andi Lane', avatar: Avatar9 },
    { id: 5, name: 'Kate Morrison', avatar: Avatar10 },
    { id: 6, name: 'Koray Okumus', avatar: Avatar11 },
  ];

  if (!visible) return null;

  return (
    <div className={`notifications-panel ${isDarkMode ? 'dark-panel' : 'light-panel'}`}>
      <div className="panel-header">
        <Title level={5} style={{ margin: 0, color: isDarkMode ? '#ffffff' : '#000000' }}>
          Notifications
        </Title>
      </div>

      <List
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item style={{ padding: '12px 0', border: 'none' }}>
            <List.Item.Meta
              avatar={
                <div className="notification-icon">
                  {item.icon}
                </div>
              }
              title={
                <Text
                  style={{
                    color: isDarkMode ? '#ffffff' : '#000000',
                    fontSize: '14px'
                  }}
                >
                  {item.title}
                </Text>
              }
              description={
                <Text
                  style={{
                    color: '#8c8c8c',
                    fontSize: '12px'
                  }}
                >
                  {item.time}
                </Text>
              }
            />
          </List.Item>
        )}
      />
      <div className="panel-header">
        <Title level={5} style={{ margin: 0, color: isDarkMode ? '#ffffff' : '#000000' }}>
          Activities
        </Title>
      </div>

      <List
        dataSource={activities}
        renderItem={(item) => (
          <List.Item style={{ padding: '12px 0', border: 'none' }}>
            <List.Item.Meta
              avatar={
                <img
                  src={item.avatar}
                  alt="avatar"
                />
              }
              title={
                <Text
                  style={{
                    color: isDarkMode ? '#ffffff' : '#000000',
                    fontSize: '14px'
                  }}
                >
                  {item.title}
                </Text>
              }
              description={
                <Text
                  style={{
                    color: '#8c8c8c',
                    fontSize: '12px'
                  }}
                >
                  {item.time}
                </Text>
              }
            />
          </List.Item>
        )}
      />
      <div className="panel-header">
        <Title level={5} style={{ margin: 0, color: isDarkMode ? '#ffffff' : '#000000' }}>
          Contacts
        </Title>
      </div>

      <List
        dataSource={contacts}
        renderItem={(item) => (
          <List.Item style={{ padding: '12px 0', border: 'none' }}>
            <List.Item.Meta
              avatar={<Avatar size={32} src={item.avatar}>{item.name.charAt(0)}</Avatar>}
              title={
                <Text
                  style={{
                    color: isDarkMode ? '#ffffff' : '#000000',
                    fontSize: '14px'
                  }}
                >
                  {item.name}
                </Text>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default NotificationsPanel;