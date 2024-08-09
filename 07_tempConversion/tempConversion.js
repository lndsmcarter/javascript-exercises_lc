const convertToCelsius = function(far) {
  let tempCels = (far - 32) * (5/9);
  let newCels = (Math.round(tempCels * 10)) / 10
  return newCels;
};

const convertToFahrenheit = function(cels) {
  let tempFar = ((9/5) * cels) + 32;
  let newFar = (Math.round(tempFar * 10)) / 10
  return newFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
