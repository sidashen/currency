import React, { Component } from 'react';

class CurrencyInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const currency = this.props.currency;
    const scale = this.props.scale;
    return (
      <div>
        <h2>{scaleNames[scale]}:</h2>
        <input value={currency}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default CurrencyInput;