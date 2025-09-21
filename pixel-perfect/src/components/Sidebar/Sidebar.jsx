import React, { useState } from 'react';
import { Layout, Menu, Typography, Avatar } from 'antd';
import {
  DashboardOutlined,
  ProjectOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  UserOutlined,
  SettingOutlined,
  // BuildingOutlined,
  EditOutlined,
  ShareAltOutlined,
  StarOutlined,
  ClockCircleOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { useTheme } from '../../App';
import './Sidebar.css';
import profileIcon from "../../assets/profileIcon.svg";
import ArrowDropDwon from "../../assets/arrow-dropDown.svg";
import arrowDarkMode from "../../assets/arrow-darkmode.svg";
import DashboardIcon from '../../assets/DashboardIcon';
import EcommerceIcon from "../../assets/ecommerce-icon"
import ProjectIcon from '../../assets/ProjectIcon';
import CoursesIcon from '../../assets/CoursesIcon';
import UserProfileIcon from '../../assets/UserProfileIcon';
import AccountIcon from '../../assets/AccountIcon';
import CorporateIcon from '../../assets/CorporateIcon';
import BlogIcon from '../../assets/BlogIcon';
import SocialIcon from '../../assets/SocialIcon';

const { Sider } = Layout;
const { Text } = Typography;


const Sidebar = ({ collapsed, selectedKey, setSelectedKey }) => {
  const { isDarkMode } = useTheme();

  const [expandedItems, setExpandedItems] = useState(['dashboards', 'user-profile']);
  const [activeTab, setActiveTab] = useState('favorites');

  const toggleExpand = (key) => {
    setExpandedItems(prev =>
      prev.includes(key)
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  const menuItems = [
    {
      key: 'favorites',
      label: 'Favorites',
      type: 'group',
      children: [
        {
          key: 'overview',
          icon: <DashboardIcon />,
          label: 'Overview',
        },
        {
          key: 'projects',
          icon: <ProjectIcon />,
          label: 'Projects',
        },
      ],
    },
    {
      key: 'recently',
      label: 'Recently',
      type: 'group',
      children: [],
    },
    {
      key: 'dashboards',
      label: 'Dashboards',
      type: 'group',
      children: [
        {
          key: 'default',
          icon: <DashboardIcon />,
          label: 'Default',
        },
        {
          key: 'Order-List',
          icon: <UnorderedListOutlined />,
          label: 'Order-List',
        },
        {
          key: 'ecommerce',
          icon: <EcommerceIcon />,
          label: 'eCommerce',
        },
        {
          key: 'projects-dash',
          icon: <ProjectIcon />,
          label: 'Projects',
        },
        {
          key: 'online-courses',
          icon: <CoursesIcon />,
          label: 'Online Courses',
        },
      ],
    },
    {
      key: 'pages',
      label: 'Pages',
      type: 'group',
      children: [
        {
          key: 'user-profile',
          icon: <UserProfileIcon />,
          label: 'User Profile',
          hasChildren: true,
          children: [
            { key: 'overview-sub', label: 'Overview' },
            { key: 'projects-sub', label: 'Projects' },
            { key: 'campaigns', label: 'Campaigns' },
            { key: 'documents', label: 'Documents' },
            { key: 'followers', label: 'Followers' },
          ],
        },
        {
          key: 'account',
          icon: <AccountIcon />,
          label: 'Account',
        },
        {
          key: 'corporate',
          icon: <CorporateIcon />,
          label: 'Corporate',
        },
        {
          key: 'blog',
          icon: <BlogIcon />,
          label: 'Blog',
        },
        {
          key: 'social',
          icon: <SocialIcon />,
          label: 'Social',
        },
      ],
    },
  ];

  const renderMenuItem = (item, isChild = false) => {
    const isExpanded = expandedItems.includes(item.key);
    const hasChildren = item.children && item.children.length > 0;
    const isSelected = item.selected || false;

    return (
      <div key={item.key} className={`menu-item ${isChild ? 'child-item' : ''}`}>
        <div
          className={`menu-item-content ${selectedKey === item.key
            ? `selected ${isDarkMode ? 'darkmode-background' : 'lightmode-background'}`
            : 'not-selected'
            }`}
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.key);
            } else {
              setSelectedKey(item.key);
            }
          }}
          style={{ cursor: 'pointer' }}
        >

          {!isChild && <img src={isDarkMode ? arrowDarkMode : ArrowDropDwon} className={`${isSelected || ["Order-List", "default"].includes(item.key) ? 'arrow-dropdown' : ""} ${isExpanded ? "arrow-down-dropdown" : ""}`}></img>
          }
          {item.icon && (
            <span className="menu-icon">{item.icon}</span>
          )}
          <span className="menu-label">{item.label}</span>

        </div>
        {hasChildren && isExpanded && (
          <div className="submenu">
            {item.children.map(child => renderMenuItem(child, true))}
          </div>
        )}
      </div>
    );
  };

  const renderGroup = (group) => {
    return (
      <div key={group.key} className="menu-group">
        <div className="group-title title">{group.label}</div>
        <div className="group-items">
          {group.children.map(item => renderMenuItem(item))}
        </div>
      </div>
    );
  };


  return (
    <Sider
      className={`sidebar ${isDarkMode ? 'dark-sidebar' : 'light-sidebar'}`}
      collapsed={collapsed}
      width={213}
      collapsedWidth={80}
    >
      <div className="sidebar-items">
        <div className="logo-section">
          <span><img src={profileIcon} alt="" /></span>
          {!collapsed && (
            <span className="brand-name" strong>
              ByeWind
            </span>
          )}
        </div>

      </div>

      <div className="horizontal-buttons">
        <span
          className={`tab-button ${activeTab === 'favorites' ? 'active' : ''} ${isDarkMode ? 'tab-text-dark' : 'light-sidebar'}`}
          onClick={() => setActiveTab('favorites')}
        >
          Favorites
        </span>
        <span
          className={`tab-button ${activeTab === 'recently' ? 'active' : ''} ${isDarkMode ? 'tab-text-dark' : 'light-sidebar'}`}
          onClick={() => setActiveTab('recently')}
        >
          Recently
        </span>
      </div>

      {/* Show favorites content when Favorites tab is active */}


      {activeTab === 'favorites' && (
        <ul className="custom-list">
          <li>Overview</li>
          <li>Projects</li>
        </ul>
      )}

      {/* Show recently content when Recently tab is active */}
      {activeTab === 'recently' && (
        <div className="recently-content">
          <div style={{ padding: '16px', color: '#bfbfbf', fontSize: '13px', fontStyle: 'italic' }}>
            No recent items
          </div>
        </div>
      )}
      {menuItems && menuItems.filter(group => !['favorites', 'recently'].includes(group.key)).map(group => renderGroup(group))}

    </Sider>
  );
};

export default Sidebar;