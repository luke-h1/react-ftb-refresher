import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Users from "./components/users/Users/Users";
import axios from "axios";
import Search from "./components/users/Search/Search";
import Alert from "./components/layout/Alert/Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About/About";
import User from "./components/users/User/User";
import GithubState from "./context/github/GithubState";
const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const getUser = async (username) => {
    setLoading(true);

    const USER_URL = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await axios.get(USER_URL);
    setUser(res.data);
    setLoading(false);
    console.log(res.data);
  };

  const getUserRepos = async (username) => {
    setLoading(true);
    const REPO_URL = `https://api.github.com/users/${username}/repos?per_page=100&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await axios.get(REPO_URL);
    setRepos(res.data);
    setLoading(false);
    console.log(res.data);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <GithubState>
      <BrowserRouter>
        <div className="App">
          <Navbar title="Github Finder" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </>
                )}
              />
              <Route path="/about" exact component={About} />
              <Route
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
};
export default App;
