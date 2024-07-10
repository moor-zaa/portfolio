/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [appTheme, setAppTheme] = useState("dark");

  const toggleTheme = () => {
    setAppTheme(appTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ appTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
