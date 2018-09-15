import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import fetch from 'isomorphic-unfetch';
import ArrestType from './ArrestType';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NFL Arrest Data</h1>
        <p>A collection of graphs and charts about nfl arrests including most popular crimes, teams with the highest crime rate, etc.</p>
        <ArrestType />
      </div>
      
    );
  }
}

export default App;
