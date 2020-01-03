import * as React from "react";
import styled from "styled-components";
import { BoardProps } from "./Board";
import { Card } from "./Card";
import { CARDS, DefenseCard } from "./Game";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > div {
    min-height: 200px;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: row;
`;

export interface PlayerSectionProps {
  board: BoardProps;
}

export const PlayerSection: React.FunctionComponent<PlayerSectionProps> = ({
  board
}) => {
  const playerID = board.playerID!;
  const player = board.G.players[playerID];
  const activeStage =
    board.ctx.activePlayers && board.ctx.activePlayers[playerID];

  let stage = <div></div>;
  if (activeStage === "draw") {
    stage = <button onClick={() => board.moves.DrawCard()}>draw card</button>;
  } else if (activeStage === "defend") {
    stage = <button onClick={() => board.moves.Defend()}>Accept Damage</button>;
  } else if (activeStage === "resolve") {
    stage = (
      <button onClick={() => board.moves.Resolve()}>Complete Turn</button>
    );
  } else if (activeStage === "play") {
    stage = <div>attack</div>;
  }

  function playCard(idx: number) {
    const card = CARDS[player.hand[idx]];
    if (activeStage === "play" && card.type === "attack") {
      board.moves.PlayCard(idx, 1);
    } else if (
      activeStage === "defend" &&
      card.type === "defense" &&
      (card as DefenseCard).protects === board.G.pendingAttack?.location
    ) {
      board.moves.Defend(idx);
    }
  }

  function isPlayable(cardID: number) {
    const card = CARDS[cardID];
    if (activeStage === "play" && card.type === "attack") {
      return true;
    } else if (activeStage === "defend" && card.type === "defense") {
      return card.protects === board.G.pendingAttack?.location;
    }
    return false;
  }

  return (
    <Container>
      <div>
        <div>{stage}</div>
        <CardList>
          {player.hand.map((cardID, idx) => (
            <Card
              key={idx}
              card={CARDS[cardID]}
              onClick={() => playCard(idx)}
              isPlayable={isPlayable(cardID)}
            />
          ))}
        </CardList>
      </div>
    </Container>
  );
};
