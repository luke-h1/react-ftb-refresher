import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import ContactState from './components/context/Contact/ContactState';
import AuthState from './components/context/auth/AuthState';
function App() {
  return (
    <AuthState>
      <ContactState>
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
      </ContactState>
    </AuthState>
  );
}

export default App;
