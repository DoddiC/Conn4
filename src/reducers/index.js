import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import playerReducer from "./playerReducer";
import turnsReducer from "./turnsReducer";

const rootReducer = combineReducers({
  board: boardReducer,
  player: playerReducer,
  turns: turnsReducer
});

export default rootReducer;
