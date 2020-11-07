import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Users from "./components/users/Users/Users";
import Search from "./components/users/Search/Search";
import Alert from "./components/layout/Alert/Alert";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/pages/About/About";
import Home from './components/pages/Home/Home';
import User from "./components/users/User/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import fourOhFour from "./components/pages/fourOhFour/fourOhFour";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className="App">
            <Navbar title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={Home} 
                />
                <Route path="/about" exact component={About} />
                <Route path="/user/:login" component={User} />
                <Route default component={fourOhFour} /> 
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};
export default App;
