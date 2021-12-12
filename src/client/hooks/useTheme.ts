import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useTheme = () => {
  const initialDarkTheme = {
    key: "theme",
    initialValue: "dark",
  };
  const [theme, setTheme] = useLocalStorage(initialDarkTheme);

  const toggleDarkTheme = (e: any) =>
    setTheme((prevTheme: string) => (prevTheme === "dark" ? "light" : "dark"));
  const toggleRedTheme = (e: any) =>
    setTheme((prevTheme: string) => (prevTheme === "dark" || "light" ? "red" : "dark"));
    const togglePurpleTheme = (e: any) =>
    setTheme((prevTheme: string) => (prevTheme === "dark" || "light" ? "purple" : "dark"));    
    const toggleBlueTheme = (e: any) =>
    setTheme((prevTheme: string) => (prevTheme === "dark" || "light" ? "blue" : "dark"));
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, toggleDarkTheme, toggleRedTheme, togglePurpleTheme, toggleBlueTheme];
};

export default useTheme;
