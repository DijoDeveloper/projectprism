import React, { useContext, useEffect, useState } from 'react';
import THEMES, { layoutStyles } from './theme';
const STORAGE_KEY = 'THEME_ID';
const LAYOUT_STORAGE_KEY = 'LAYOUT_ID';
const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const [themeID, setThemeID] = useState('');
  const [layoutID, setLayoutID] = useState('');

  useEffect(() => {
    (async () => {
      const storedThemeID = localStorage.getItem(STORAGE_KEY);
      const storedLayoutID = localStorage.getItem(LAYOUT_STORAGE_KEY);
      if (storedThemeID) setThemeID(storedThemeID);
      else setThemeID(THEMES[1].theme_key);
      if (storedLayoutID) setLayoutID(storedLayoutID);
      else setLayoutID(layoutStyles[1].key);

    })();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeID, setThemeID, layoutID, setLayoutID }}>
      {(!!themeID && !!layoutID) ? children : null}
    </ThemeContext.Provider>
  );
};

export function withTheme(Component) {
  return (props) => {
    const { themeID, setThemeID, layoutID, setLayoutID } = useContext(ThemeContext);
    const getTheme = (themeID) => THEMES.find((theme) => theme.theme_key === themeID);
    const setTheme = (themeID) => {
      console.log(themeID,"asdasd");
      localStorage.setItem(STORAGE_KEY, themeID);
      setThemeID(themeID);
    };
    const getLayout = (layoutID) => layoutStyles.find(layout => layout.key === layoutID);
    const setLayout = (layoutID) => {
      localStorage.setItem(LAYOUT_STORAGE_KEY, layoutID);
      setLayoutID(layoutID);
    };

    const getAppTheme = (layoutID, themeID) => {
      var theme = getTheme(themeID);
      var layout = getLayout(layoutID);
      return { ...theme, ...layout }
    }

    return (
      <Component
        {...props}
        themes={THEMES}
        theme={getAppTheme(layoutID, themeID)}
        setTheme={setTheme}
        themeID={themeID}
        setLayout={setLayout}
        layoutID={layoutID}
      />
    );
  };
}