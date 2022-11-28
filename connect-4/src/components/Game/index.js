import React, { Component } from "react";
import { connect } from "react-redux";
import {
  playTurn,
  endTurn,
  newGame,
  incrementTurns,
  resetTurns,
} from "../../actions";
import { isWinner, isTie, isColumnAvailable } from "../../utils";
import s from "./game.module.css";

class Game extends Component {
  handleCircleClick = (idx) => async (e) => {
    e.preventDefault();
    const { player, board, playTurn, endTurn, turns, incrementTurns } =
        this.props,
      currentPlayer = player;
    if (!isColumnAvailable(board, idx)) return;
    await playTurn(currentPlayer, idx);
    this.checkBoardForWinner(this.props.board, this.props.player);
    incrementTurns(turns);
    this.checkBoardForTie(this.props.turns);
    endTurn(currentPlayer);
  };

  handleNewGameClick = () => (e) => {
    const { newGame, resetTurns } = this.props;
    newGame();
    resetTurns();
  };

  checkBoardForWinner = (board, player) => {
    if (isWinner(board, player)) {
      alert(`Player ${this.props.player} wins!!!`);
      this.props.newGame(board, player);
    }
  };

  checkBoardForTie = (turns, board, player) => {
    if (isTie(turns)) {
      alert("Game is tied!!!");
      this.props.newGame(board, player);
    }
  };

  render() {
    const { board } = this.props;
    return (
      <>
        <div className={`${s.board}`}>
          <div className={`${s.boardGrid}`}>
            {board.map((row, rowIdx) => (
              <div key={rowIdx} className={`${s.boardRow}`}>
                {row.map((spot, spotIdx) => (
                  <span
                    key={spotIdx}
                    className={
                      spot === 0
                        ? `${s.free} ${s.circle}`
                        : spot === 1
                        ? `${s.staff} ${s.circle}`
                        : spot === 2
                        ? `${s.contestant} ${s.circle}`
                        : ""
                    }
                    onClick={this.handleCircleClick(spotIdx)}></span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={this.handleNewGameClick()}
          className={`${s.newGameButton} btn btn-dark`}>
          New Game
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board,
  player: state.player,
  turns: state.turns,
});

const mapDispatchToProps = (dispatch) => ({
  playTurn: (player, column) => {
    dispatch(playTurn(player, column));
  },
  endTurn: (player) => {
    dispatch(endTurn(player));
  },
  newGame: (board, player) => {
    dispatch(newGame(board, player));
  },
  incrementTurns: (turns) => {
    dispatch(incrementTurns(turns));
  },
  resetTurns: (turns) => {
    dispatch(resetTurns(turns));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
