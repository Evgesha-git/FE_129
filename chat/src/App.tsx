import React from 'react';
import './App.css';
import Navbar from './components/Navbar/inde';
import Approuter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Approuter/>
    </div>
  );
}

export default App;
