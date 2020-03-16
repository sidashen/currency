import React, { Component } from 'react';

class CurrencyInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onCurrencyChange(e.target.value);
  }

  render() {
    const scaleNames = {
      u: 'USD',
      c: 'CNY'
    };
    const currency = this.props.currency;
    const scale = this.props.scale;
    return (
      <div>
        <h2>{scaleNames[scale]}:</h2>
        <input value={currency}
          onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
}

export default CurrencyInput;