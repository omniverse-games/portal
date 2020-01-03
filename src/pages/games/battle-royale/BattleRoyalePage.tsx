import * as React from "react";
import { RouteComponentProps } from "@reach/router";

import { Client } from "boardgame.io/react";
import { Local } from "boardgame.io/multiplayer";

import { BattleRoyaleGame } from "./Game";
import { Board } from "./Board";

const Game = Client({
  numPlayers: 5,
  game: BattleRoyaleGame,
  board: Board,
  debug: false,
  multiplayer: Local()
});

export const BattleRoyalePage: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>
      <Game playerID="0" />
      <Game playerID="1" />
      <Game playerID="2" />
      <Game playerID="3" />
      <Game playerID="4" />
      <Game />
    </div>
  );
};
