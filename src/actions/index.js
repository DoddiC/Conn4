import {
  PLAY_TURN,
  NEW_GAME,
  END_TURN,
  INCREMENT_TURNS,
  RESET_TURNS
} from "./constants";

export const playTurn = (player, column) => {
  return {
    type: PLAY_TURN,
    payload: {
      player,
      column
    }
  };
};

export const endTurn = player => {
  return {
    type: END_TURN,
    payload: {
      player
    }
  };
};

export const newGame = () => {
  return {
    type: NEW_GAME
  };
};

export const incrementTurns = turns => {
  return {
    type: INCREMENT_TURNS,
    payload: {
      turns
    }
  };
};

export const resetTurns = turns => {
  return {
    type: RESET_TURNS,
    payload: {
      turns
    }
  };
};
