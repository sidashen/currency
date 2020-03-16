import React, { Component } from 'react';
import './styles/App.css';
import CurrencyInput from './component/CurrencyInput';
import { tryConvert, toCNY, toUSD } from './utils/utils.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 10,
      scale: 'u'
    };
  }

  handleUSDChange = (currency) => {
    this.setState({ scale: 'u', currency });
  }

  handleCNYChange = (currency) => {
    this.setState({ scale: 'c', currency });
  }

  render() {
    const scale = this.state.scale;
    const currency = this.state.currency;
    const USD = scale === 'c' ? tryConvert(currency, toUSD) : currency;
    const CNY = scale === 'u' ? tryConvert(currency, toCNY) : currency;
    return (
      <div className="currency-exchange">
        <CurrencyInput
          scale="u"
          currency={USD}
          onCurrencyChange={(currency) => this.handleUSDChange(currency)} />
        <CurrencyInput
          scale="c"
          currency={CNY}
          onCurrencyChange={(currency) => this.handleCNYChange(currency)} />
      </div>
    );
  }
}

export default App;
