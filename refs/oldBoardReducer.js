import { NEW_GAME } from "../actions/constants";
import { DROP_CHECKER } from "../actions/constants";

const initBoard = Array(6).fill(Array(7).fill(0));

const isColumnFull = column => column.every(el => el !== 0);

const selectedColumnValues = (prevState, action) => {
  let values = [],
    row = 0;
  while (row <= 5) {
    values.push(prevState[row][action.column]);
    row++;
  }
  return values;
};

const boardReducer = (prevState = initBoard, action) => {
  if (action.type === NEW_GAME) return prevState;
  if (action.type === DROP_CHECKER) {
    if (prevState[0][action.column] !== 0) return prevState;

    let currentColumn = selectedColumnValues(prevState, action);

    if (isColumnFull(currentColumn)) return true;

    // currentColumn is an array of values for the specific column that is selected
    // we need to find the first instance of the number 0, starting from the end of the array to the beginning (connect 4 board drops the checker on the first unoccupied space from bottom to top)
    // i.e. [0, 0, 0, 0, 0, 1, 2]
    // we need to target the 0 at index of 4 and replace that 0 with a 1 or 2, depending on the current player

    let findTargetIndex = null;

    findTargetIndex = currentColumn.reverse().findIndex(val => val === 0);
    // since we want to iterate through the array from end to start, reversing the array and finding the first instance of 0 will allow us to find the target (however, the index will not be correct since it is in reverse order)
    // to get the correct index, we can use the length of the array - 1 and subtract findTargetIndex to get the correct index

    if (findTargetIndex === null) {
      return prevState;
    }
    const targetIndex = currentColumn.length - 1 - findTargetIndex;
    // use this targetIndex to swap the 0 in the matrix with a 1 or 2
  }
  return prevState;
};

export default boardReducer;
