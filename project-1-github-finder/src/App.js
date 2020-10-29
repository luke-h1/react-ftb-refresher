import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Users from "./components/users/Users/Users";
import axios from "axios";
import Search from "./components/users/Search/Search";
class App extends React.Component {
  state = {
    users: [],
    loading: false,
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

  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
export default App;
