export const tryConvert = (currency, convert) => {
  const input = parseFloat(currency);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  return output.toString();
};

export const toUSD = (CNY) => {
  return Math.floor((CNY / 6) * 100) / 100;
};

export const toCNY = (USD) => {
  return Math.floor((USD * 6) * 100) / 100;
};
