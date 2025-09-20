import React, { useState, createContext, useContext } from 'react';
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Ant Design theme
  const antTheme = {
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#1890ff',
      colorBgContainer: isDarkMode ? '#1f1f1f' : '#ffffff',
      colorBgElevated: isDarkMode ? '#262626' : '#ffffff',
      colorBorder: isDarkMode ? '#434343' : '#d9d9d9',
    },
  };

  // Material-UI theme
  const muiTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#1890ff',
      },
      background: {
        default: isDarkMode ? '#141414' : '#f5f5f5',
        paper: isDarkMode ? '#1f1f1f' : '#ffffff',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isDarkMode ? '#141414' : '#f5f5f5'
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ConfigProvider theme={antTheme}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <Dashboard />
          </div>
        </ThemeProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default App;