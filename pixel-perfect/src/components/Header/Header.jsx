import React, { useState } from 'react';
import { Layout, Space } from 'antd';

import { useTheme } from '../../App';
import './Header.css';
import PanelIcon from "../../assets/PanelIcon.jsx"
import StarIcon from "../../assets/StarIcon"
import ThemeIcon from '../../assets/ThemeIcon.jsx';
import PageRefresh from '../../assets/PageRefresh.jsx';
import Bellicon from "../../assets/Bellicon.jsx"

const { Header: AntHeader } = Layout;

const Header = ({ onToggleSidebar, onToggleNotifications, selectedKey }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Search for:', searchValue);
    }
  };

  return (
    <AntHeader className={`dashboard-header ${isDarkMode ? 'dark-header' : 'light-header'}`}>
      <div className="header-left">
        <span><PanelIcon /></span>
        <span><StarIcon /></span>
        <div className='breadcrumb'>
          <span className="title">Dashboards </span>  <span className="title">/ {" "}</span>
          <span>{selectedKey}</span>
        </div>
      </div>

      <div className="header-right">
        <Space size="middle">
          <div className="search-container">
            <input
              type="text"
              className={`search-input ${isDarkMode ? "darkmode" : "lightmode"}`}
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            <svg
              className="search-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="keyboard-shortcut">⌘/</span>
          </div>

          <span onClick={toggleTheme} style={{ cursor: 'pointer' }}><ThemeIcon /></span>

          <span style={{ cursor: 'pointer' }} onClick={() => window.location.reload()}><PageRefresh /></span>

          <span style={{ cursor: 'pointer' }} onClick={onToggleNotifications}><Bellicon /></span>
          <span><PanelIcon /></span>


        </Space>
      </div>
    </AntHeader>
  );
};

export default Header;