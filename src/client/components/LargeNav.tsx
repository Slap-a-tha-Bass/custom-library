import React from "react";
import { Nav, LargeNav } from "../../styleslibrary";
import useTheme from "../hooks/useTheme";

const LargeScreenNav = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <Nav>
      <LargeNav>
        <button>Yo</button>
        <button>Click</button>
        <button>Me</button>
        <button>Please</button>
        <button onClick = {toggleTheme}>Theme</button>
      </LargeNav>
    </Nav>
  );
};

export default LargeScreenNav;
