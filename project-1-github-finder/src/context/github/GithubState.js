import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search users
  const searchUsers = async (text) => {
    setLoading();
    const SEARCH_URL = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await axios.get(SEARCH_URL);
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
    // setUsers(res.data.items);
  };

  // Get user
  const getUser = async (username) => {
    setLoading();
    const USER_URL = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await axios.get(USER_URL);
    dispatch({ type: "GET_USER", payload: res.data });
  };

  // Get repos
  const getUserRepos = async (username) => {
    setLoading();
    const REPO_URL = `https://api.github.com/users/${username}/repos?per_page=100&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await axios.get(REPO_URL);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        // pass in methods here
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
