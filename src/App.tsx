import React from "react";
import { HomePage } from "./pages/home/HomePage";
import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background-color: darkgrey;
  height: 100%;
  min-height: 100vh;
  width: 100%;
}
h1 {
  margin: 0;
}
#root {
  height: 100%;
  min-height: 100vh;
  width: 100%;  
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
