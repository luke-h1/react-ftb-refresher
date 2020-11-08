import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('http://localhost:5000/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.data,
    });
  }

  // return async (dispatch) => {
  //   setLoading();
  //   const res = await fetch('http://localhost:5000/logs');
  //   const data = await res.json();
  //   dispatch({
  //     type: GET_LOGS,
  //     payload: data,
  //   });
  // };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
