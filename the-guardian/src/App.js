import React from 'react';
import Header from './component/Header';
import TinyHeaderBox from './component/TinyHeaderBox';
import axios from 'axios';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TinyHeaderBox />
    </div>
  );
}