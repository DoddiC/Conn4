import {
  checkVerticals,
  checkHorizontals,
  checkDownDiagonals,
  checkUpDiagonals,
  isTie
} from "../utils";

describe("checkVerticals tests", () => {
  it("should return true for vertical four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 2, 2, 0, 0, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkVerticals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return false for vertical three in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 2, 1, 2, 0, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkVerticals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(false);
  });

  it("should return false for horizontal four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0],
      [0, 0, 2, 1, 1, 1, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkVerticals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(false);
  });
});

describe("checkHorizontals tests", () => {
  it("should return true for horizontal four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0],
      [1, 1, 1, 1, 2, 2, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkHorizontals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return false for horizontal three in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 1, 1, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkHorizontals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(false);
  });

  it("should return false for vertical four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 2, 0, 1],
      [0, 0, 0, 0, 2, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkHorizontals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(false);
  });
});

describe("checkDownDiagonals tests", () => {
  // testing for the 12 winning downwards diagonals and 12 winning upwards diagonals

  // downwards diagonals
  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 2, 0, 0],
      [2, 1, 1, 0, 2, 0, 0],
      [1, 2, 2, 1, 2, 0, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [1, 2, 1, 0, 2, 0, 0],
      [2, 1, 1, 1, 2, 0, 0],
      [1, 2, 2, 1, 2, 0, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [1, 2, 1, 0, 2, 0, 0],
      [2, 1, 1, 1, 2, 0, 0],
      [1, 2, 2, 1, 1, 0, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [2, 1, 1, 0, 0, 0, 0],
      [1, 2, 2, 1, 0, 0, 0],
      [2, 1, 1, 2, 2, 0, 0],
      [1, 2, 2, 1, 1, 0, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [2, 1, 1, 0, 0, 0, 0],
      [1, 2, 2, 1, 0, 0, 0],
      [2, 1, 1, 2, 1, 0, 0],
      [1, 2, 2, 1, 1, 0, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [2, 1, 1, 0, 0, 0, 0],
      [1, 2, 2, 1, 0, 0, 0],
      [2, 1, 1, 2, 1, 0, 0],
      [1, 2, 2, 1, 1, 1, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 1, 0, 0, 0, 0, 0],
      [1, 2, 1, 0, 0, 0, 0],
      [2, 1, 1, 1, 0, 0, 0],
      [1, 2, 2, 2, 1, 0, 0],
      [2, 1, 1, 2, 1, 0, 0],
      [1, 2, 2, 1, 1, 1, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 2, 1, 0, 0, 0, 0],
      [2, 1, 1, 1, 0, 0, 0],
      [1, 2, 2, 2, 1, 0, 0],
      [2, 1, 1, 2, 1, 1, 0],
      [1, 2, 2, 1, 1, 1, 0]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0, 0],
      [2, 1, 1, 1, 0, 0, 0],
      [1, 2, 2, 2, 1, 0, 0],
      [2, 1, 1, 2, 1, 1, 0],
      [1, 2, 2, 1, 1, 1, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 2, 0, 0, 0, 0],
      [1, 2, 2, 2, 0, 0, 0],
      [2, 1, 1, 1, 2, 0, 0],
      [1, 2, 2, 2, 1, 2, 0],
      [2, 1, 1, 2, 1, 1, 0],
      [1, 2, 2, 1, 1, 1, 1]
    ];
    const samplePlayer = 2;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 2, 2, 2, 0, 0, 0],
      [2, 1, 1, 1, 2, 0, 0],
      [1, 2, 2, 2, 1, 2, 0],
      [2, 1, 1, 2, 1, 1, 2],
      [1, 2, 2, 1, 1, 1, 1]
    ];
    const samplePlayer = 2;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (down from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 2, 0, 0, 0],
      [1, 0, 0, 2, 2, 0, 0],
      [2, 1, 0, 1, 2, 2, 0],
      [1, 2, 2, 1, 1, 2, 2],
      [2, 1, 1, 2, 2, 1, 1],
      [1, 2, 2, 1, 1, 2, 2]
    ];
    const samplePlayer = 2;
    const sampleOutput = checkDownDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  // upwards diagonals

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [2, 1, 1, 0, 0, 0, 1],
      [1, 2, 2, 0, 0, 1, 1],
      [2, 1, 1, 2, 1, 2, 2],
      [1, 2, 2, 1, 1, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 2],
      [2, 1, 1, 0, 0, 2, 1],
      [1, 2, 2, 0, 2, 1, 1],
      [2, 1, 1, 2, 1, 2, 2],
      [1, 2, 1, 2, 1, 2, 1]
    ];
    const samplePlayer = 2;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [1, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [2, 1, 1, 0, 0, 2, 1],
      [1, 2, 2, 0, 2, 1, 1],
      [2, 1, 1, 2, 1, 2, 2],
      [1, 2, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 2;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 1, 2],
      [2, 1, 1, 0, 1, 2, 1],
      [1, 2, 2, 1, 2, 1, 1],
      [2, 1, 2, 1, 2, 2, 2],
      [1, 2, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 1, 0],
      [2, 1, 1, 0, 1, 2, 1],
      [1, 2, 2, 1, 2, 1, 1],
      [2, 1, 1, 1, 2, 2, 2],
      [1, 2, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [2, 1, 1, 0, 1, 2, 1],
      [1, 2, 2, 1, 2, 1, 1],
      [2, 1, 1, 1, 2, 2, 2],
      [1, 1, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 1, 2, 0],
      [2, 1, 2, 1, 1, 2, 1],
      [1, 2, 1, 1, 2, 1, 1],
      [2, 2, 1, 1, 2, 2, 2],
      [1, 1, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 1, 0, 0],
      [2, 1, 2, 1, 1, 2, 1],
      [1, 2, 1, 1, 2, 1, 1],
      [2, 1, 1, 1, 2, 2, 2],
      [2, 1, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [2, 1, 2, 1, 1, 2, 1],
      [1, 2, 1, 1, 2, 1, 1],
      [2, 1, 1, 1, 2, 2, 2],
      [1, 1, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 1;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 2, 0, 0],
      [1, 1, 0, 2, 1, 0, 0],
      [2, 1, 2, 0, 1, 2, 1],
      [1, 2, 1, 1, 2, 1, 1],
      [1, 1, 2, 1, 2, 2, 2],
      [1, 1, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 2;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 2, 0, 0, 0],
      [2, 1, 2, 0, 1, 2, 1],
      [1, 2, 1, 1, 2, 1, 1],
      [2, 1, 2, 1, 2, 2, 2],
      [1, 1, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 2;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("should return true for diagonal (up from left to right) four in a row", () => {
    const sampleBoard = [
      [0, 0, 0, 2, 0, 0, 0],
      [1, 1, 2, 2, 0, 0, 0],
      [2, 2, 1, 1, 1, 2, 1],
      [2, 2, 1, 1, 2, 1, 1],
      [1, 1, 2, 1, 2, 2, 2],
      [1, 1, 2, 2, 1, 2, 1]
    ];
    const samplePlayer = 2;
    const sampleOutput = checkUpDiagonals(sampleBoard, samplePlayer);
    expect(sampleOutput).toEqual(true);
  });

  it("isTie should return true if the number of turns reaches 42 (total number of spots on the board)", () => {
    const sampleTurnsCount = 42;
    expect(isTie(sampleTurnsCount)).toEqual(true);
  });

  it("isTie should return false if the number of turns is not 42 (total number of spots on the board)", () => {
    const sampleTurnsCount = 41;
    expect(isTie(sampleTurnsCount)).toEqual(false);
  });
});
