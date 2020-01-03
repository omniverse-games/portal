import * as React from "react";
import { RouteComponentProps } from "@reach/router";

import { Client } from "boardgame.io/react";

import { BattleRoyaleGame } from "./Game";
import { Board } from "./Board";

const Game = Client({
  numPlayers: 5,
  game: BattleRoyaleGame,
  board: Board,
  debug: false
});

export const BattleRoyalePage: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>
      <Game />
    </div>
  );
};
