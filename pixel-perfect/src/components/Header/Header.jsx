import React from 'react';
import { Layout, Input, Button, Badge, Avatar, Switch, Space } from 'antd';
import { 
  SearchOutlined, 
  BellOutlined, 
  MenuOutlined,
  BulbOutlined,
  UndoOutlined,
  FullscreenOutlined
} from '@ant-design/icons';
import { useTheme } from '../../App';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header = ({ onToggleSidebar, onToggleNotifications }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <AntHeader className={`dashboard-header ${isDarkMode ? 'dark-header' : 'light-header'}`}>
      <div className="header-left">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={onToggleSidebar}
          className="sidebar-toggle"
        />
        
        <div className="search-section">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="search-input"
            suffix={
              <div className="search-shortcut">
                <span>⌘K</span>
              </div>
            }
          />
        </div>
      </div>

      <div className="header-right">
        <Space size="middle">
          <Button
            type="text"
            icon={<BulbOutlined />}
            className="header-action-btn"
          />
          
          <Button
            type="text"
            icon={<UndoOutlined />}
            className="header-action-btn"
          />
          
          <Badge dot>
            <Button
              type="text"
              icon={<BellOutlined />}
              onClick={onToggleNotifications}
              className="header-action-btn"
            />
          </Badge>
          
          <Button
            type="text"
            icon={<FullscreenOutlined />}
            className="header-action-btn"
          />
          
          <div className="theme-switch-wrapper">
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              className="theme-switch"
            />
          </div>
        </Space>
      </div>
    </AntHeader>
  );
};

export default Header;