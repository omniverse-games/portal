import * as React from "react";
import styled from "styled-components";
import { CardInfo } from "./Game";

const TypeColors: { [type: string]: string } = {
  attack: "red",
  defense: "blue",
  buff: "purple",
  event: "green"
};

const Container = styled.div<{ isPlayable: boolean; type: string }>`
  border: 2px solid black;
  margin: 5px;
  padding: 5px;
  width: 170px;
  cursor: ${props => (props.isPlayable ? "pointer" : "cancel")};
  border: ${props =>
    props.isPlayable
      ? `2px solid ${TypeColors[props.type]}`
      : `1px solid ${TypeColors[props.type]}`};
`;

export interface CardProps {
  card: CardInfo;
  isPlayable: boolean;
  onClick(): void;
}
export const Card: React.FunctionComponent<CardProps> = ({
  card,
  isPlayable,
  onClick
}) => {
  return (
    <Container onClick={onClick} isPlayable={isPlayable} type={card.type}>
      <h3>{card.name}</h3>
    </Container>
  );
};
