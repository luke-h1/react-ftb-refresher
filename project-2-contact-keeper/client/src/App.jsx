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
import AlertState from './components/context/alert/AlertState';
import Alerts from './components/layout/Alerts/Alerts';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/Login" exact component={Login} />
                </Switch>
              </div>
            </>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}
export default App;
