import React, { Component } from 'react';
import Login from './Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Login />
      </div>
    );
  }
}

export default App;
