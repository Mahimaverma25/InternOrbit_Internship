function convertFromFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById("Fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * (5 / 9);
        const kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;
        document.getElementById("Celsius").value = celsius.toFixed(2);
        document.getElementById("Kelvin").value = kelvin.toFixed(2);
    } else {
        document.getElementById("Celsius").value = "";
        document.getElementById("Kelvin").value = "";
    }
}

function convertFromCelsius() {
    const celsius = parseFloat(document.getElementById("Celsius").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * (9 / 5)) + 32;
        const kelvin = celsius + 273.15;
        document.getElementById("Fahrenheit").value = fahrenheit.toFixed(2);
        document.getElementById("Kelvin").value = kelvin.toFixed(2);
    } else {
        document.getElementById("Fahrenheit").value = "";
        document.getElementById("Kelvin").value = "";
    }
}

function convertFromKelvin() {
    const kelvin = parseFloat(document.getElementById("Kelvin").value);
    if (!isNaN(kelvin)) {
        const celsius = kelvin - 273.15;
        const fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
        document.getElementById("Celsius").value = celsius.toFixed(2);
        document.getElementById("Fahrenheit").value = fahrenheit.toFixed(2);
    } else {
        document.getElementById("Celsius").value = "";
        document.getElementById("Fahrenheit").value = "";
    }
}