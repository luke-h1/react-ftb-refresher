import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Users from "./components/users/Users/Users";
import axios from "axios";
class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const BASE_URL = `https://api.github.com/users`;
    const res = await axios.get(BASE_URL);
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
// on lesson spinner component and refactoring
export default App;
