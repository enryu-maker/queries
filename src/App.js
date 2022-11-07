import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authnav from './Screen/Auth/Authnav';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Authnav/>
    </div>

  );
}

export default App;
