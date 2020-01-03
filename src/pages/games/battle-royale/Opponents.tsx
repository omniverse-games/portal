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
  }
`;

interface ContainerProps {
  isCurrentPlayer: boolean;
  isProne: boolean;
}
const OpponentContainer = styled.div<ContainerProps>`
  width: 125px;
  border: ${props => (props.isCurrentPlayer ? "2px" : "1px")} solid black;
  box-shadow: ${props => (props.isCurrentPlayer ? "2px 5px 9px #aaa;" : "none")}
  padding: 10px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export interface OpponentsProps {
  board: BoardProps;
}

export const Opponents: React.FunctionComponent<OpponentsProps> = ({
  board
}) => {
  const playerID = board.playerID;
  const opponents = board.ctx.playOrder.map(id => ({
    id,
    state: board.G.players[id]
  }));
  return (
    <Container>
      {opponents.map(o => (
        <Opponent player={o} board={board} />
      ))}
    </Container>
  );
};

export const Opponent: React.FunctionComponent<{
  player: { id: string; state: PlayerState };
  board: BoardProps;
}> = ({ player, board }) => {
  const isCurrentPlayer = player.id === board.ctx.currentPlayer;

  return (
    <OpponentContainer
      isCurrentPlayer={isCurrentPlayer}
      isProne={player.state.isProne}
    >
      <div>Player {player.id}</div>
      <div>{player.state.health}</div>
    </OpponentContainer>
  );
};
