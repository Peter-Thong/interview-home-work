import { SET_ERROR } from "./error.types";

const INITIAL_STATE = {
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default reducer;
