import { SET_ERROR } from "./error.types";

export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};
