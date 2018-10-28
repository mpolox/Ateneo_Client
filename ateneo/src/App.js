import React, { Component } from 'react';
import Header from "./views/Header"
import './App.css';
import Body from './views/Body';
import Footer from './views/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Body/>
          <Footer/>
      </div>
    );
  }
}

export default App;
