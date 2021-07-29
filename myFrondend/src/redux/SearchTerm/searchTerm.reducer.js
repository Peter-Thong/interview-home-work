import { SET_SEARCH_TERM } from "./searchTerm.types";
const INITIAL_STATE = {
  searchTerm: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      const { searchTerm } = action;
      return { ...state, searchTerm };

    default:
      return state;
  }
};

export default reducer;
