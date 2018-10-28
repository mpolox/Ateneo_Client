import React, { Component } from 'react';
import Header from "./views/Header"
import './App.css';
import Body from './views/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Body></Body>
      </div>
    );
  }
}

export default App;
