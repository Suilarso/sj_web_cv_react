import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
class App extends Component {
  render()  {
    return (
      <Grid container direction="row" alignItems="baseline">
        {/* Things to do here: add pageHeader component in src component folder.
        Call pageHeader from here */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </Grid>
    );
  }

}

export default App;
