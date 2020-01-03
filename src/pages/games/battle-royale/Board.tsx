import * as React from "react";
import styled from "styled-components";
import { GameState, GameContext } from "./Game";
import { PlayerSection } from "./PlayerSection";
import { Opponents } from "./Opponents";
import { Battlefield } from "./BattleField";

export interface BoardProps {
  G: GameState;
  ctx: GameContext;
  isActive: boolean;
  log: any[];
  isConnected: boolean;
  gameID: string;
  playerID?: string;
  credentials?: string;
  debug: boolean;
  isMultiplayer: boolean;
  moves: any;
  events: any;
}

const Player: React.FunctionComponent<{
  board: BoardProps;
  playerID: string;
}> = ({ board, playerID }) => {
  const player = board.G.players[playerID];
  const activeStage =
    board.ctx.activePlayers && board.ctx.activePlayers[playerID];

  return (
    <div>
      <div>
        player {playerID}: Health: {player.health} {activeStage}
      </div>

      {activeStage === "defend" || activeStage === "resolve" ? (
        <div>
          <div>DEFEND!</div>
          <div>roll: {board.G.pendingAttack?.roll}</div>
          <div>dmg: {board.G.pendingAttack?.dmg}</div>
          <div>location: {board.G.pendingAttack?.location}</div>
        </div>
      ) : (
        undefined
      )}
    </div>
  );
};

const BoardContainer = styled.div`
  border: 3px dotted black;
  margin-bottom: 20px;
  padding: 20px;
`;

export const Board: React.FunctionComponent<BoardProps> = props => {
  console.log("render board", props);
  return (
    <BoardContainer>
      <h1>Board for: {props.playerID}</h1>
      <div>
        <Opponents board={props} />
        <Battlefield board={props} />
        <PlayerSection board={props} />
      </div>
    </BoardContainer>
  );
};
