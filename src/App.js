import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Authnav from './Screen/Auth/Authnav';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Authnav/>
      <Footer/>
    </div>

  );
}

export default App;
