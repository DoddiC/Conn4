import playerReducer from "../reducers/playerReducer";
import { END_TURN } from "../actions/constants";

describe("playerReducer tests", () => {
  it("should alternate player turns when END_TURN action is dispatched", () => {
    const sampleAction = {
      type: END_TURN,
      payload: {
        player: 1
      }
    };
    const sampleInput = 1;
    const sampleOutput = playerReducer(sampleInput, sampleAction);
    const expectedOutput = 2;
    expect(sampleOutput).toEqual(expectedOutput);
  });
});
