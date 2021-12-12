import React, { SetStateAction, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useTheme = () => {
  const initialTheme = {
    key: "theme",
    initialValue: "dark",
  };

  const [theme, setTheme] = useLocalStorage(initialTheme);

  const toggleTheme = (e: any) =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;
