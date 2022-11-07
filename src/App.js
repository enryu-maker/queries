import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Screen/Auth/Login';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Login/>
    </div>

  );
}

export default App;
