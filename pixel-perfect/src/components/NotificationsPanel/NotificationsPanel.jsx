import React from 'react';
import { Card, Typography, List, Avatar, Badge, Space, Button, Divider } from 'antd';
import { 
  BugOutlined, 
  UserOutlined, 
  PlusOutlined, 
  EditOutlined,
  DeleteOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import { useTheme } from '../../App';
import './NotificationsPanel.css';

const { Title, Text } = Typography;

const NotificationsPanel = ({ visible }) => {
  const { isDarkMode } = useTheme();

  const notifications = [
    {
      id: 1,
      type: 'bug',
      icon: <BugOutlined style={{ color: '#ff4d4f' }} />,
      title: 'You have a bug that needs...',
      time: 'Just now',
    },
    {
      id: 2,
      type: 'user',
      icon: <UserOutlined style={{ color: '#52c41a' }} />,
      title: 'New user registered',
      time: '59 minutes ago',
    },
    {
      id: 3,
      type: 'bug',
      icon: <BugOutlined style={{ color: '#ff4d4f' }} />,
      title: 'You have a bug that needs...',
      time: '12 hours ago',
    },
    {
      id: 4,
      type: 'subscription',
      icon: <PhoneOutlined style={{ color: '#1890ff' }} />,
      title: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
    },
  ];

  const activities = [
    {
      id: 1,
      avatar: '/api/placeholder/32/32',
      title: 'You have a bug that needs...',
      time: 'Just now',
      color: '#ff4d4f',
    },
    {
      id: 2,
      avatar: '/api/placeholder/32/32',
      title: 'Released a new version',
      time: '59 minutes ago',
      color: '#52c41a',
    },
    {
      id: 3,
      avatar: '/api/placeholder/32/32',
      title: 'Submitted a bug',
      time: '12 hours ago',
      color: '#1890ff',
    },
    {
      id: 4,
      avatar: '/api/placeholder/32/32',
      title: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      color: '#faad14',
    },
    {
      id: 5,
      avatar: '/api/placeholder/32/32',
      title: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
      color: '#ff4d4f',
    },
  ];

  const contacts = [
    { id: 1, name: 'Natali Craig', avatar: '/api/placeholder/32/32' },
    { id: 2, name: 'Drew Cano', avatar: '/api/placeholder/32/32' },
    { id: 3, name: 'Orlando Diggs', avatar: '/api/placeholder/32/32' },
  ];

  if (!visible) return null;

  return (
    <div className={`notifications-panel ${isDarkMode ? 'dark-panel' : 'light-panel'}`}>
      {/* Notifications Section */}
      <Card 
        className="panel-card"
        style={{
          background: isDarkMode ? '#1f1f1f' : '#ffffff',
          border: isDarkMode ? '1px solid #434343' : '1px solid #f0f0f0'
        }}
      >
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
      </Card>

      {/* Activities Section */}
      <Card 
        className="panel-card"
        style={{
          background: isDarkMode ? '#1f1f1f' : '#ffffff',
          border: isDarkMode ? '1px solid #434343' : '1px solid #f0f0f0',
          marginTop: '16px'
        }}
      >
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
                  <Badge dot color={item.color}>
                    <Avatar size={32} src={item.avatar}>
                      {item.title.charAt(0)}
                    </Avatar>
                  </Badge>
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
      </Card>

      {/* Contacts Section */}
      <Card 
        className="panel-card"
        style={{
          background: isDarkMode ? '#1f1f1f' : '#ffffff',
          border: isDarkMode ? '1px solid #434343' : '1px solid #f0f0f0',
          marginTop: '16px'
        }}
      >
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
      </Card>
    </div>
  );
};

export default NotificationsPanel;