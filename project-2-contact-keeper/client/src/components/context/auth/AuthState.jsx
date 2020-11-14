import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './AuthReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

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

  // REGISTER USER

  // LOGIN USER

  // LOGOUT USER (DESTROY TOKEN)

  // CLEAR ERRORS

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        // actions
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
