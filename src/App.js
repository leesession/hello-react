import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div children='col-xs-1 col-xs-offset-11'>
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
