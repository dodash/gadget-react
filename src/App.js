import React, { Component } from 'react';
// Can't import image files because the are injected onto the
// page after gadget-rendered. The URL won't be proxied correctly.
// Must use the full URL for now until this can be fixed.
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'http://localhost:3000/logo.svg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Note - dashboard gadgets won't reload.
        </p>
      </div>
    );
  }
}

export default App;
