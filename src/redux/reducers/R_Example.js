import { types } from "../actions/A_Example";

const INITIAL_STATE = {
  xxxxx: "",
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    //////////////////////
    case types.YYYYYYY:
      return { ...state, loading: true };

    default:
      return state;
  }
};
