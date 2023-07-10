var conversionHistory = [];

function convertTemperature() {
    // Get input values
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var kelvin = parseFloat(document.getElementById("kelvinInput").value);

    // Check which input value is provided and convert the temperatures
    if (!isNaN(celsius)) {
        var convertedFahrenheit = (celsius * 9/5) + 32;
        var convertedKelvin = celsius + 273.15;

        // Format converted temperatures to 2 decimal places
        convertedFahrenheit = convertedFahrenheit.toFixed(2);
        convertedKelvin = convertedKelvin.toFixed(2);

        // Update the result element with the converted temperatures
        document.getElementById("result").textContent = "Fahrenheit: " + convertedFahrenheit + "°F, Kelvin: " + convertedKelvin + "K";
    } else if (!isNaN(fahrenheit)) {
        var convertedCelsius = (fahrenheit - 32) * 5/9;
        var convertedKelvin = (fahrenheit + 459.67) * 5/9;

        // Format converted temperatures to 2 decimal places
        convertedCelsius = convertedCelsius.toFixed(2);
        convertedKelvin = convertedKelvin.toFixed(2);

        // Update the result element with the converted temperatures
        document.getElementById("result").textContent = "Celsius: " + convertedCelsius + "°C, Kelvin: " + convertedKelvin + "K";
    } else if (!isNaN(kelvin)) {
        var convertedCelsius = kelvin - 273.15;
        var convertedFahrenheit = (kelvin * 9/5) - 459.67;

        // Format converted temperatures to 2 decimal places
        convertedCelsius = convertedCelsius.toFixed(2);
        convertedFahrenheit = convertedFahrenheit.toFixed(2);

        // Update the result element with the converted temperatures
        document.getElementById("result").textContent = "Celsius: " + convertedCelsius + "°C, Fahrenheit: " + convertedFahrenheit + "°F";
    }

    // Clear input fields
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("kelvinInput").value = "";

    
   

    
}
// ...existing JavaScript code...

