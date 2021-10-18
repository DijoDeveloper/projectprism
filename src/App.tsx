import './App.css';

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

import Navigator from './navigations';
import { Provider } from 'react-redux';
import React from 'react';
// import { ThemeProvider } from './theme/themeProvider';
import reducer from './redux/store'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const App = () => {

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <Provider store={reducer}>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </Provider>
  );
}

export default App;