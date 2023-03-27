const convertToCelsius = function(temp) {
  degCel = (temp - 32) * (5/9)
  return Math.round(degCel * 10) / 10;
  
};

const convertToFahrenheit = function(temp) {
  degFah = (temp * 9/5) + 32
  return Math.round(degFah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
