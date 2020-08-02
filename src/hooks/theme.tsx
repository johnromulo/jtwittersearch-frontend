import React, { createContext, useState, useContext, useCallback } from 'react';
import { DefaultTheme } from 'styled-components';

import dark from '@styles/themes/dark';
import light from '@styles/themes/light';

interface ThemeContextData {
  theme: DefaultTheme;
  selectTheme(): void;
}

const ThemeRDContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeRDProvider: React.FC = ({ children }: React.Props<{}>) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const selectTheme = useCallback(() => {
    setTheme(t => (t.title === 'dark' ? light : dark));
  }, []);

  return (
    <ThemeRDContext.Provider
      value={{
        theme,
        selectTheme,
      }}
    >
      {children}
    </ThemeRDContext.Provider>
  );
};

export function useThemeRD() {
  const context = useContext(ThemeRDContext);

  return context;
}
