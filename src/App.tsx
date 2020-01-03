import React from "react";
import { Router } from "@reach/router";
import { HomePage } from "./pages/home/HomePage";
import { BattleRoyalePage } from "./pages/games/battle-royale/BattleRoyalePage";
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
      <Router>
        <HomePage path="/" />
        <BattleRoyalePage path="/games/battle-royale" />
      </Router>
    </>
  );
};

export default App;
