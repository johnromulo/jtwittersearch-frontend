import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ThemeRDProvider, useThemeRD } from '@hooks/theme';

import './config/ReactotronConfig';

import GlobalStyle from '@styles/global';

// import history from '@services/history';

import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => {
  const { theme } = useThemeRD();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppProvider>
          <GlobalStyle />
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const DefaultApp: React.FC = () => (
  <ThemeRDProvider>
    <App />
  </ThemeRDProvider>
);

export default DefaultApp;
