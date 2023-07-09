function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");
    var result;
    
    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (temperature * 9 / 5) + 32;
        } 
        else if (toUnit === "kelvin") {
            result = temperature + 273.15;
        } 
        else {
            result = temperature;
        }
    } 
    
    else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (temperature - 32) * 5 / 9;
        } 
        else if (toUnit === "kelvin") {
            result = (temperature + 459.67) * 5 / 9;
        }   
        else {
            result = temperature;
        }
    } 
    
    else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = temperature - 273.15;
        } 
        else if (toUnit === "fahrenheit") {
            result = (temperature * 9 / 5) - 459.67;
        } 
        else {
            result = temperature;
        }
    }
    resultElement.innerHTML = temperature.toFixed(2) + " " + fromUnit + " is equal to " + result.toFixed(2) + " " + toUnit;
}