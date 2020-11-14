import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  SET_ALERT,
} from '../types';
import setAuthToken from '../../../utils/setAuthToken';
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  /* ACTIONS */

  // LOAD USER
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/auth');
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (e) {
      console.log(e);
      dispatch({ type: AUTH_ERROR });
    }
  };

  // REGISTER USER
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/users', formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (e) {
      console.log(e);
      dispatch({ type: REGISTER_FAIL, payload: e.response.data.msg });
    }
  };

  // LOGIN USER
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/auth', formData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (e) {
      console.log(e);
      dispatch({ type: LOGIN_FAIL, payload: e.response.data.msg });
    }
  };

  // LOGOUT USER (DESTROY TOKEN)
  const logout = () => {};

  // CLEAR ERRORS
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
        // actions
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
