import {
  CHANGE_LOADING,
} from "./constants";

export const changeLoading = loading => ({
  type: CHANGE_LOADING,
  loading
});
