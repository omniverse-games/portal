import * as React from "react";
import styled from "styled-components";
import { BoardProps } from "./Board";
import { PlayerState } from "./Game";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  > div {
    width: 125px;
    border: 1px solid black;
    padding: 10px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export interface OpponentsProps {
  board: BoardProps;
}

export const Opponents: React.FunctionComponent<OpponentsProps> = ({
  board
}) => {
  const playerID = board.playerID;
  const opponents = board.ctx.playOrder
    .filter(id => id !== playerID)
    .map(id => ({ id, state: board.G.players[id] }));
  return (
    <Container>
      {opponents.map(o => (
        <Opponent player={o} />
      ))}
    </Container>
  );
};

export const Opponent: React.FunctionComponent<{
  player: { id: string; state: PlayerState };
}> = ({ player }) => {
  return (
    <div>
      <div>Player {player.id}</div>
      <div>{player.state.health}</div>
    </div>
  );
};
