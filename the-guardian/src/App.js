import React from 'react';
import Header from './component/Header';
import TinyHeaderBox from './component/Culture';
import axios from 'axios';

import './App.css';
class App extends React.Component {
  state = {  }
  render() { 
    return (  
    <div className="App">
      <Header />
      <TinyHeaderBox />
    </div>
    );
  }
}
export default App;
