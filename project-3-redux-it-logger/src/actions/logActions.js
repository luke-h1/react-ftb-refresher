import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from './types';

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
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('http://localhost:5000/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.data,
    });
  }
};
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`https://localhost:5000/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

export const updateLog = (log, id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`https://localhost:5000/logs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err,
    });
  }
};

// set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};
// clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
