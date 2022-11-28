import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./info.module.css";

class Info extends Component {
  state = {
    showInfoText: false,
  };
  toggleClass = () => (e) => {
    const currState = this.state.showInfoText;
    this.setState({ showInfoText: !currState });
  };
  render() {
    const { showInfoText } = this.state;
    const { player, turns } = this.props;
    return (
      <div className="jumbotron bg-dark text-white rounded-0">
        <h1 className="display-4">Connect 4</h1>
        <button
          type="button"
          className={`btn btn-secondary`}
          onClick={this.toggleClass()}>
          Info
        </button>
        <div
          className={
            showInfoText
              ? `${s.showInfoText} card bg-light text-dark p-3`
              : `${s.hideInfoText} card bg-light text-dark p-3`
          }>
          Connect 4 is a two-player game where the objective is to connect four
          tokens of the same color vertically, horizontally, or diagonally
          before your opponent. Player 1 uses red tokens while Player 2 uses
          yellow tokens. By default, Player 1 will always go first. After
          determining who will be Player 1, the players take turns dropping
          their tokens into a seven-column, six-row grid. The pieces fall from
          top to bottom, occupying the next available space within the column.
        </div>
        <div className="mt-3">Player {player}'s Turn</div>
        <div>Turns: {turns}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
  turns: state.turns,
});

export default connect(mapStateToProps)(Info);
