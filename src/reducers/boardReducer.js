import { PLAY_TURN, NEW_GAME } from "../actions/constants";

const initBoard = Array(6).fill(Array(7).fill(0));

const deepDup = input => JSON.parse(JSON.stringify(input));

const boardReducer = (prevState = initBoard, action) => {
  if (action.type === PLAY_TURN) {
    const newState = deepDup(prevState);
    const { player, column } = action.payload;
    const selectedColumn = newState.map(row => row[column]);
    for (let i = selectedColumn.length - 1; i >= 0; i--) {
      if (selectedColumn[i] === 0) {
        newState[i][column] = player;
        break;
      }
    }
    return newState;
  }
  if (action.type === NEW_GAME) {
    return initBoard;
  }
  return prevState;
};

export default boardReducer;
