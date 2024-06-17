const convertToCelsius = function(fahrenheit) {

  let convertedCelsius = ((fahrenheit - 32) * 5/9).toFixed(1);
  return +convertedCelsius;

}; 

const convertToFahrenheit = function(celsius) {

  let convertedFahrenheit = ((celsius * 9/5) + 32).toFixed(1);
  return +convertedFahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
