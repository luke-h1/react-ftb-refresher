import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    default:
      return state;

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_USERS:
      return {
        ...state,
        user: action.payload,
      };
  }
};
