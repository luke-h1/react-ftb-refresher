import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Users from "./components/users/Users/Users";
import axios from 'axios';
class App extends React.Component {
   async componentDidMount (){
    const BASE_URL = `https://api.github.com/users`
    const res = await axios.get(BASE_URL); 
    console.log(res.data)
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}
export default App;
