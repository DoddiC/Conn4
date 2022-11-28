import React, { Component } from "react";

import s from "./game.module.css";

class Game extends Component {
  state = {
    currentPlayer: 1,
    board: Array(7).fill(Array(6).fill(0))
  };
  dropChecker = column => {
    const { board } = this.state;
    console.log(board[board.length - 1][column - 1]);
  };
  render() {
    const { board } = this.state;
    const buttonColumns = [1, 2, 3, 4, 5, 6, 7];
    return (
      <>
        <div>
          <div>
            {buttonColumns.map((column, idx) => {
              return (
                <button
                  key={idx}
                  className={`${s.boardColumn}`}
                  onClick={() => this.dropChecker(idx)}>
                  Column {idx}
                </button>
              );
            })}
          </div>
          {board.map((row, idx) => (
            <div key={idx} className={`${s.boardRow}`}>
              {row.map((spot, idx) => (
                <span key={idx} className={`${s.boardSpot}`}>
                  {spot}
                </span>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Game;
