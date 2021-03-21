var input = document.querySelector("input");
var inputBtn = document.querySelector("#input-btn");
var citiesBtn = document.querySelector(".cityBtn");
var currentCity = document.querySelector("#current-city");
var currentTemp = document.querySelector("#current-temp");
var currentHumidity = document.querySelector("#current-humidity");
var currentWind = document.querySelector("#current-wind");
var currentUV = document.querySelector("#current-uv");
var inputValue = "";



inputBtn.addEventListener("click", function(event) {
    event.preventDefault();
    inputValue = input.value;
    console.log(inputValue);
    localStorage.setItem("cityName", inputValue);


    fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,alerts&appid=e855ba782204791deaddac674c970432")
        .then (function(response) {
            console.log(response);
        })
})

// TODO: When user searches for city in input field:
    // TODO: When button is pressed:
        // TODO: prevent default
        // TODO: put city name in local storage
        // TODO: city name appears in search history buttons below
        // TODO: fetch current weather parameters and 5-day forecast parameters for results section

// TODO: When user clicks on a city in search history, the city's updated current weather and 5-day forecast appears

// TODO: Current weather parameters:
    // TODO: city name
    // TODO: today's date
    // TODO: weather conditions icon
    // TODO: current temperature
    // TODO: current humidity
    // TODO: current wind speed
    // TODO: current UV index

// TODO: Attach colors to UV index indication whether conditions are favorable (green), moderate(yellow), or severe(red)

// TODO: Forecast/future weather conditions parameters:
    // TODO: 5-day forecast
    // TODO: the date
    // TODO: weather conditions icon
    // TODO: temperature
    // TODO: humidity
