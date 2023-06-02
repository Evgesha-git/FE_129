import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {Routes, Route} from "react-router";
import { routes } from './utils/routes';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.mai} element={<MainPage/>} />
        <Route path={routes.taskList} element={<UserPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
