import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar/SearchBar';
import Logs from './components/logs/Logs/Logs';
import AddBtn from './components/layout/AddBtn/AddBtn';
import AddLogModal from './components/logs/AddLogModal/AddLogModal';
import EditLogModal from './components/logs/EditLogModal/EditLogModal';
import AddTechModal from './components/techs/AddTechModal/AddTechModal';
import TechListModal from './components/techs/TechListModal/TechListModal';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
};
export default App;
