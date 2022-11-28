import { END_TURN } from "../actions/constants";

const initialState = 1;

const playerReducer = (prevState = initialState, action) => {
  if (action.type === END_TURN) {
    return prevState === 1 ? 2 : 1;
  }
  return prevState;
};

export default playerReducer;
