//Calculate Area of Rectangle
function areaOfRectangle(length, width) {
  return console.log('Length =', length, 'Width =', width, "==> Area of Rectangle =", length * width);
}

areaOfRectangle(5, 11);

// Celsius to Fahrenheit conversion
function CelsiusToFahrenheit(celsiusTemperature) {
  let fahrenheitTemperature = (9 / 5) * celsiusTemperature + 32;
  return console.log(`${celsiusTemperature}°Celsius = ${fahrenheitTemperature.toFixed(2)}°Fahrenheit`);
}

CelsiusToFahrenheit(44);

// Fahrenheit to Celsius conversion
function fahrenheitToCelsius(fahrenheitTemperature) {
  let celsiusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
  return console.log(`${fahrenheitTemperature}°Fahrenheit = ${celsiusTemperature.toFixed(2)}°Celsius`);
}

fahrenheitToCelsius(99);
