import React, { Component } from 'react';
import GetOnlinePosts from './components/onlineposts/getonline';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import GetLocalPosts from './components/Localposts/getlocalpost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Local Storage</h1>
        <GetLocalPosts/>
        <br/>
        <h1 className="header">External API</h1>
        <GetOnlinePosts/>
      </div>
    );
  }
}

export default App;