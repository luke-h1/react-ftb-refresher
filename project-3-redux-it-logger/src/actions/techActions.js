import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

// get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('http://localhost:5000/techs');
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: TECHS_ERROR,
      payload: e.response.statusText,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};