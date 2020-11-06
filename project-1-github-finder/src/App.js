import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Users from "./components/users/Users/Users";
import axios from "axios";
import Search from "./components/users/Search/Search";
import Alert from "./components/layout/Alert/Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About/About";
import User from "./components/users/User/User";
class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: [],
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const BASE_URL = `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
  //   const res = await axios.get(BASE_URL);
  //   console.log(res.data);
  //   console.log(`${BASE_URL}`);
  //   this.setState({ users: res.data, loading: false });
  // }

  // Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const SEARCH_URL = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await axios.get(SEARCH_URL);
    this.setState({ users: res.data.items, loading: false });
    console.log(res.data.items);
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const USER_URL = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await axios.get(USER_URL);
    this.setState({ user: res.data, loading: false });
    console.log(res.data);
  };

  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const REPO_URL = `https://api.github.com/users/${username}/repos?per_page=30&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await axios.get(REPO_URL);
    this.setState({ repos: res.data, loading: false });
    console.log(res.data);
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  render() {
    const { loading, users, user, alert, repos } = this.state;
    return (
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
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route path="/about" exact component={About} />
              <Route
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
