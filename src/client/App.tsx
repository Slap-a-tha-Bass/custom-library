import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Test from "./views/Test";
// import LargeScreenNav from './components/NavBar/LargeScreenNav.jsx';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg);
    color: var(--text);
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }
`;
const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <LargeScreenNav /> */}
      <Routes>
        <Route element={<Test />} path="/" />
        <Route index element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;


