import { SET_SEARCH_TERM } from "./searchTerm.types";

export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    searchTerm,
  };
};
