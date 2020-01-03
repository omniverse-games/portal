import * as React from "react";
import styled from "styled-components";
import { BoardProps } from "./Board";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > div {
    max-width: 400px;
    border: 1px solid #ddd;
    min-height: 200px;
    padding: 30px;
  }
`;

export interface BattlefieldProps {
  board: BoardProps;
}

export const Battlefield: React.FunctionComponent<BattlefieldProps> = ({
  board
}) => {
  const attack = board.G.pendingAttack;

  if (!attack) {
    return (
      <Container>
        <div>battlefield</div>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <div>battlefield</div>
        <div>attacker: {board.ctx.currentPlayer}</div>
        <div>defender: {attack.defenderPlayerID}</div>
        <div>roll: {attack.roll}</div>
        <div>dmg: {attack.dmg}</div>
        <div>location: {attack.location}</div>
      </div>
    </Container>
  );
};
