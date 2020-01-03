import { Stage } from "boardgame.io/core";

export interface BaseCard {
  name: string;
  count: number;
}
export interface AttackCard extends BaseCard {
  type: "attack";
  hit: number;
  crush: number;
  dmg: number;
  modifier: number;
}

export interface BuffCard extends BaseCard {
  type: "buff";
  buffs: Array<{ field: string; mul?: number; add?: number; sub?: number }>;
}
export interface DefenseCard extends BaseCard {
  type: "defense";
  protects: number;
}
export interface EventCard extends BaseCard {
  type: "event";
  event: string;
}

export type CardInfo = AttackCard | BuffCard | DefenseCard | EventCard;

export const CARDS: CardInfo[] = [
  {
    type: "attack",
    name: "Giant",
    count: 14,
    hit: 16,
    crush: 19,
    dmg: 20,
    modifier: 12
  },
  {
    type: "attack",
    name: "Half-Orc",
    count: 14,
    hit: 14,
    crush: 16,
    dmg: 12,
    modifier: 10
  },
  {
    type: "attack",
    name: "Human",
    count: 14,
    hit: 11,
    crush: 13,
    dmg: 10,
    modifier: 8
  },
  {
    type: "attack",
    name: "Dwarf",
    count: 14,
    hit: 10,
    crush: 12,
    dmg: 8,
    modifier: 6
  },
  {
    type: "attack",
    name: "Elf",
    count: 14,
    hit: 8,
    crush: 10,
    dmg: 6,
    modifier: 4
  },
  {
    type: "attack",
    name: "Halfling",
    count: 14,
    hit: 6,
    crush: 8,
    dmg: 4,
    modifier: 2
  },
  { type: "defense", name: "Mouthguard", count: 3, protects: 1 },
  { type: "defense", name: "Chestplate", count: 3, protects: 2 },
  { type: "defense", name: "Bum Cover", count: 3, protects: 3 },
  { type: "defense", name: "Knee Pads", count: 3, protects: 4 },
  {
    type: "buff",
    name: "Chafe Protection",
    count: 3,
    buffs: [{ field: "chafe", mul: 0 }]
  },
  { type: "event", name: "Meteor", count: 1, event: "Meteor" }
];

const STARTING_HEALTH = 100;
const HAND_SIZE = 7;

export interface PlayerState {
  health: number;
  isProne: boolean;
  hand: Array<number>;
}
export interface GameState {
  deck: Array<number>;
  discard: Array<number>;
  players: {
    [playerID: string]: PlayerState;
  };
  pendingAttack?: {
    defenderPlayerID: string;
    cards: number[];
    roll: number;
    location: number;
    dmg: number;
  };
}

export interface GameContext {
  currentPlayer: string;
  numPlayers: number;
  activePlayers: { [playerID: string]: string };
  playOrder: string[];
  events: {
    setStage(name: string): void;
    endStage(): void;
    endTurn(): void;
    setActivePlayers(data: {
      currentPlayer?: string;
      value?: { [playerID: string]: string };
    }): void;
  };
  random: {
    Die(d: number): number;
  };
}

export const BattleRoyaleGame = {
  setup: (state: any): GameState => {
    const deck = BuildDeck();
    const players: { [playerID: string]: PlayerState } = {};

    Array(state.numPlayers)
      .fill(null)
      .forEach((_, i) => {
        const playerID = i.toString();
        const hand = deck.splice(HAND_SIZE * -1, HAND_SIZE);
        players[playerID] = { hand, health: STARTING_HEALTH, isProne: false };
      });

    return { deck, players, discard: [] };
  },
  turn: {
    activePlayers: { currentPlayer: "draw", others: Stage.NULL },
    onBegin: (G: GameState, ctx: GameContext) => {
      const nextPlayers = {
        ...G.players,
        [ctx.currentPlayer]: { ...G.players[ctx.currentPlayer], isProne: false }
      };
      return { ...G, pendingAttack: undefined, players: nextPlayers };
    },
    stages: {
      draw: {
        next: "play",
        moves: { DrawCard }
      },

      play: {
        moves: { PlayCard }
      },
      defend: {
        next: "resolve",
        moves: { Defend }
      },
      resolve: {
        moves: { Resolve }
      }
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
  G.players[ctx.currentPlayer].hand.push(nextCard!);
  ctx.events.endStage();
}

function PlayCard(
  G: GameState,
  ctx: GameContext,
  cardPlayed: number,
  defenderPlayerID: string
) {
  const attacker = G.players[ctx.currentPlayer];
  const playerHand = attacker.hand;
  const cardIdx = playerHand[cardPlayed];
  playerHand.splice(cardPlayed, 1);
  const card = CARDS[cardIdx];
  const attackCard = card as AttackCard;
  G.discard.push(cardIdx);

  console.log("played", { playerHand, cardIdx, card });
  // G.deck++;
  // G.hand[ctx.currentPlayer]--;

  const roll = ctx.random.Die(20);
  if (roll >= attackCard.hit) {
    // hit
    let dmg =
      ctx.random.Die(attackCard.dmg) + ctx.random.Die(attackCard.modifier);
    if (roll >= attackCard.hit) {
      dmg = Math.ceil(dmg / 2);
    } else if (roll === 20) {
      dmg = dmg * 2;
    }

    const location = ctx.random.Die(4);

    G.pendingAttack = {
      defenderPlayerID,
      cards: [cardIdx],
      roll,
      location,
      dmg
    };
    ctx.events.setActivePlayers({ value: { [defenderPlayerID]: "defend" } });
    // ctx.events.endStage();
    return;
  }

  if (roll === 1) {
    // dropped your weapon
    attacker.isProne = true;
  }
  G.pendingAttack = {
    defenderPlayerID,
    cards: [cardIdx],
    roll,
    location: 0,
    dmg: 0
  };
  ctx.events.setActivePlayers({ value: { [ctx.currentPlayer]: "resolve" } });
}

function Defend(G: GameState, ctx: GameContext): void {
  console.log("defend!");
  const attacker = G.players[ctx.currentPlayer];
  const defender = G.players[G.pendingAttack!.defenderPlayerID];
  defender.health -= G.pendingAttack!.dmg;
  ctx.events.setActivePlayers({ value: { [ctx.currentPlayer]: "resolve" } });
}

function Resolve(G: GameState, ctx: GameContext): void {
  ctx.events.endTurn();
}

function IsVictory(G: GameState) {
  return false;
}
