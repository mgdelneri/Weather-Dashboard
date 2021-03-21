// Variables assigned to elements in the DOM
var input = document.querySelector("input");
var inputBtn = document.querySelector("#input-btn");
var citiesBtn = document.querySelector(".cityBtn");
var currentCity = document.querySelector("#current-city");
var currentTemp = document.querySelector("#current-temp");
var currentHumidity = document.querySelector("#current-humidity");
var currentWind = document.querySelector("#current-wind");
var currentUV = document.querySelector("#current-uv");
var firstCityBtn = document.querySelector("#chosen-city1");
var secondCityBtn = document.querySelector("#chosen-city2");
var thirdCityBtn = document.querySelector("#chosen-city3");
var fourthCityBtn = document.querySelector("#chosen-city4");
var fifthCityBtn = document.querySelector("#chosen-city5");
// Variable assigned to the value of the input being searched
var inputValue = "";

// Call the function that gets item from local storage when page is opened/refreshed
renderLastInput();

// Event listener attached to the button attached to the input field
inputBtn.addEventListener("click", function(event) {
    // Prevent default button behavior
    event.preventDefault();
    inputValue = input.value;
    console.log(inputValue);
    // Saves input value in local storage
    localStorage.setItem("cityName", inputValue);
    var lastInput = localStorage.getItem("cityName");
    firstCityBtn.textContent = lastInput;

    // Fetches relevant city data from Open Weather API
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,alerts&appid=e855ba782204791deaddac674c970432")
        .then (function(response) {
            console.log(response);
        });
})

// Function that renders the last input searched from local storage
function renderLastInput() {
    var lastInput = localStorage.getItem("cityName");
    
    if (!lastInput) {
        return;
    };

    firstCityBtn.textContent = lastInput;
}

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
