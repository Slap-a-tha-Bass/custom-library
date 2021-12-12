import React, { useEffect, useState } from "react";
import { Nav, LargeNav } from "../../styleslibrary";
import useTheme from "../hooks/useTheme";
import { NavButton } from "../../styleslibrary";
const LargeScreenNav = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [theme, toggleDarkTheme, toggleRedTheme, togglePurpleTheme, toggleBlueTheme] = useTheme();

    useEffect(() => {
        setHasLoaded(true);
    }, [])
  return (
    <Nav>
      {hasLoaded && <LargeNav>
        <NavButton onClick={toggleDarkTheme}>Dark/Light</NavButton>
        <NavButton bgHover="red" onClick={toggleRedTheme}>Red</NavButton>
        <NavButton bgHover="#5000c1" onClick={togglePurpleTheme}>Purple</NavButton>
        <NavButton bgHover="#0214de" onClick={toggleBlueTheme}>Blue</NavButton>
      </LargeNav>}
    </Nav>
  );
};

export default LargeScreenNav;
