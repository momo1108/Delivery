import React from 'react';
import logo from './logo.svg';
import Nav from './nav/Nav';
import Signin from './body/Signin';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Signin />
    </div>
  );
}

export default App;
