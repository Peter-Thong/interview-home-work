import { LOADING_TRUE, LOADING_FALSE } from "./loading.types";

const INITIAL_STATE = {
  loading: true,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return { ...state, loading: true };
    case LOADING_FALSE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
