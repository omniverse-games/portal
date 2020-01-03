export const CARDS = [
  { name: "Half-Orc", count: 12 },
  { name: "Halfling", count: 12 },
  { name: "Giant", count: 12 },
  { name: "Human", count: 12 },
  { name: "Elf", count: 12 },
  { name: "Dwarf", count: 12 },
  { name: "Tiefling", count: 12 },
  { name: "Chafe Protection", count: 3 },
  { name: "Bum Cover", count: 3 },
  { name: "Mouthguard", count: 3 },
  { name: "Knee Pads", count: 3 },
  { name: "Chestplate", count: 3 },
  { name: "Meteor", count: 1 }
];

const HAND_SIZE = 7;

export interface GameState {
  deck: Array<number>;
  discard: Array<number>;
  hands: Array<Array<number>>;
}

export interface GameContext {
  currentPlayer: number;
}

export const BattleRoyaleGame = {
  setup: (state: any): GameState => {
    const deck = BuildDeck();
    const hands = Array(state.numPlayers)
      .fill(null)
      .map(() => {
        const splice = deck.splice(HAND_SIZE * -1, HAND_SIZE);
        console.log("splice", splice);
        return splice;
      });

    return { deck, hands, discard: [] };
  },

  moves: {
    clickCell: (G: any, ctx: any, id: any) => {
      G.cells[id] = ctx.currentPlayer;
    }
  },
  endIf: (G: GameState, ctx: any) => {
    if (IsVictory(G)) {
      return { winner: ctx.currentPlayer };
    }
  }
};

function BuildDeck(): Array<number> {
  const deck: Array<number> = [];
  let pos = 0;
  CARDS.forEach((card, idx) => {
    deck.splice(pos, card.count, ...Array(card.count).fill(idx));
    pos += card.count;
  });
  return ShuffleDeck(deck);
}

function ShuffleDeck(deck: Array<number>): Array<number> {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }

  return deck;
}

function DrawCard(G: GameState, ctx: GameContext) {
  const nextCard = G.deck.pop();
  G.hands[ctx.currentPlayer].push(nextCard!);
}

function PlayCard(G: GameState, ctx: GameContext) {
  // G.deck++;
  // G.hand[ctx.currentPlayer]--;
}

function IsVictory(G: GameState) {
  return false;
}
