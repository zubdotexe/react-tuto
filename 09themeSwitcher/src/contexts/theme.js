import { createContext, useContext } from "react";

export const themeContext = createContext({
  defaultTheme: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
  return useContext(themeContext);
}
