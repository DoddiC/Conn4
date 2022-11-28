# Connect 4

## Info

Connect 4 is a two-player game where the objective is to connect four
tokens of the same color vertically, horizontally, or diagonally
before your opponent. Player 1 uses red tokens while Player 2 uses
yellow tokens. By default, Player 1 will always go first. After
determining who will be Player 1, the players take turns dropping
their tokens into a seven-column, six-row grid. The pieces fall from
top to bottom, occupying the next available space within the column.

## Demo

https://connect-four-react.netlify.com/

![Connect 4 Demo](demo/connect-four-demo.gif)

## Installation

- Node.js is required
  - https://nodejs.org/en/download/

```
$ git clone https://github.com/Andrew-Kil/connect-four.git
```

```
$ cd connect-four
```

```
$ npm install
```

```
$ npm start
```

## Technical Details

Frontend Framework

- React

State management

- Redux

Styling

- CSS modules
- Bootstrap

Testing

- Jest

## To-Do

- [x] Diagonal win conditions
  - 24 in total, 12 up-right diagonals and 12 down-right diagonals
- [x] Horizontal win conditions
- [x] Vertical win conditions
- [x] Tie
- [x] Adjust CSS sizing of app so the height/width is consistent across browsers & different resolutions
- [x] Update title & favicon
- [ ] Implement an option to play against AI
  - [ ] Easy: AI will randomly drop their token in an unoccupied spot
