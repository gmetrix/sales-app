import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/header";
import Orders from "./components/orders/orders";
import Filter from "./components/filter/filter";
import ProgressArc from "./components/progress-arc/progress-arc";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <div>
            <Filter/>
            <br/>
            <Orders/>
            <ProgressArc/>
          </div>
      </div>
    );
  }
}

export default App;
