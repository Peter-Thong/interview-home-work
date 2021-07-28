import { INCREMENT } from "./page.types";

const INITIAL_STATE = {
  page: 5,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, page: state.page + 5 };
    default:
      return state;
  }
};

export default reducer;
