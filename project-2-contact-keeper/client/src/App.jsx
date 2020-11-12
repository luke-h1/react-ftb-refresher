import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
