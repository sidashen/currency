import React, { Component } from 'react';
import './App.css';
import CurrencyInput from './component/CurrencyInput'

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <CurrencyInput
          scale="u" />
        <CurrencyInput
          scale="c" />
      </div>
    );
  }
}

export default App;
