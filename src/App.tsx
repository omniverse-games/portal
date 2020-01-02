import React from "react";
import { HomePage } from "./pages/home/HomePage";
import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
}
h1 {
  margin: 0;
}

`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};

export default App;
