import * as React from "react";
import { GameState, CARDS } from "./Game";

export interface BoardProps {
  G: GameState;
  ctx: any;
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

export const Board: React.FunctionComponent<BoardProps> = props => {
  console.log("render board", props);
  return (
    <div>
      <h1>Battle Royale with cheese</h1>
      <div>
        <h2>players</h2>
        <div>
          {props.G.hands.map((hand, idx) => {
            return (
              <div key={idx}>
                player {idx}: {renderHand(hand)}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>deck</h2>
        <div>{renderHand(props.G.deck)}</div>
      </div>
    </div>
  );
};

function renderHand(hand: number[]) {
  return hand.map(cardId => CARDS[cardId].name + " => ");
}
