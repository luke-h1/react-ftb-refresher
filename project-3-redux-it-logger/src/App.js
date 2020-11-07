import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar/SearchBar';
import Logs from './components/logs/Logs/Logs';
import './App.css';
const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  }, []);
  return (
    <>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </>
  );
};

export default App;
