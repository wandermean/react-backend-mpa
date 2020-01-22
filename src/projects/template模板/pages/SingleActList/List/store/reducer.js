import { CHANGE_LOADING } from "./constants";

export default (state, action) => {
  switch (action.type) {
    case CHANGE_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};
