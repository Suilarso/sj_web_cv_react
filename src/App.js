import { Grid } from '@material-ui/core';
// import { Avatar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
class App extends Component {
  render()  {
    return (
      <Grid container direction="row" alignItems="baseline">
        <Grid item={true} xs={5}>
          {/* <Avatar alt="Suilarso" src="home/suilarso/SJS_Pribadi/sj_web_cv_react/src/res/img/Suilarso.jpg" /> */}
          <Avatar alt="Suilarso" src="/res/img/Suilarso.jpg" />
        </Grid>

        <Grid item={true} xs={7}>
          <p>Para</p>
        </Grid>
        {/* Things to do here: add pageHeader component in src component folder.
        Call pageHeader from here */}
      {/* <div className="App">
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
      </div> */}
      </Grid>
    );
  }

}

export default App;
