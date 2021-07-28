import { LOADING_TRUE, LOADING_FALSE } from "./loading.types";

export const loadingTrue = () => {
  return {
    type: LOADING_TRUE,
  };
};
export const loadingFalse = () => {
  return {
    type: LOADING_FALSE,
  };
};
