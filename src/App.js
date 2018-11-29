import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="AppMain">
          {Routes}
        </div>
      </div>
    );
  }
}

export default App;