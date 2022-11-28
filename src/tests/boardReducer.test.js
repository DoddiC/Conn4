import boardReducer from "../reducers/boardReducer";
import { PLAY_TURN, NEW_GAME } from "../actions/constants";

describe("boardReducer tests", () => {
  it("should place token in correct location when user plays turn and selected column is not full", () => {
    const sampleAction = {
      type: PLAY_TURN,
      payload: {
        player: 1,
        column: 0
      }
    };
    const sampleInputBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    const expectedOutputBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];
    const sampleOutput = boardReducer(sampleInputBoard, sampleAction);
    expect(sampleOutput).toEqual(expectedOutputBoard);
  });

  it("should return prevState when selected column is full", () => {
    const sampleAction = {
      type: PLAY_TURN,
      payload: {
        player: 1,
        column: 0
      }
    };
    const sampleInputBoard = [
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];
    const expectedOutputBoard = [
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];
    const sampleOutput = boardReducer(sampleInputBoard, sampleAction);
    expect(sampleOutput).toEqual(expectedOutputBoard);
  });

  it("should replace current board state with the default clear board state when new game action is dispatched", () => {
    const sampleInputBoard = [
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0],
      [2, 2, 2, 1, 0, 0, 0],
      [1, 1, 1, 2, 0, 0, 0]
    ];
    const expectedOutputBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    const sampleAction = {
      type: NEW_GAME,
      payload: {
        board: sampleInputBoard,
        player: 1
      }
    };
    const sampleOutput = boardReducer(sampleInputBoard, sampleAction);
    expect(sampleOutput).toEqual(expectedOutputBoard);
  });
});
