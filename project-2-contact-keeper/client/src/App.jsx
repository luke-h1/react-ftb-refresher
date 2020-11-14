import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import ContactState from './components/context/Contact/ContactState';
import AuthState from './components/context/auth/AuthState';
import Register from './components/auth/Register/Register';
import Login from './components/auth/Login/Login';
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
                <Route path="/register" exact component={Register} />
                <Route path="/Login" exact component={Login} />
              </Switch>
            </div>
          </>
        </BrowserRouter>
      </ContactState>
    </AuthState>
  );
}

export default App;
