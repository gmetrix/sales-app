import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header/header";
import ProgressArc from "./components/progress-arc/progress-arc";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Header/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sales Dashboard</h1>
        </header>
          for(
          <ProgressArc/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
