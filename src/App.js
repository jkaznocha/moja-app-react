import React, { Component } from 'react';
import './App.css';
import Border from '../src/Border/Border';
import Head from '../src/Head/Head';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Head/>
        <Border/>
      </div>
    );
  }
}

export default App;
