// Variables assigned to elements in the DOM
var form = document.querySelector("form");
var input = document.querySelector("input");
var inputBtn = document.querySelector("#input-btn");
var citiesBtn = document.querySelector(".cityBtn");
var currentCity = document.querySelector("#current-city");
var currentDate = document.querySelector("#current-date");
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
inputBtn.addEventListener("click", function (event) {
  // Prevent default button behavior
  event.preventDefault();

  // Moves search history down when button is clicked to make room for new input
  if (firstCityBtn.textContent) {
    fifthCityBtn.textContent = fourthCityBtn.textContent;
    fourthCityBtn.textContent = thirdCityBtn.textContent;
    thirdCityBtn.textContent = secondCityBtn.textContent;
    secondCityBtn.textContent = firstCityBtn.textContent;
  }

  inputValue = input.value;

  // Saves input value in local storage and gets input to display in search history
  localStorage.setItem("cityName", inputValue);
  var lastInput = localStorage.getItem("cityName");
  firstCityBtn.textContent = lastInput;
  // Saves search history in local storage
  localStorage.setItem("firstBtn", firstCityBtn.textContent);
  localStorage.setItem("secondBtn", secondCityBtn.textContent);
  localStorage.setItem("thirdBtn", thirdCityBtn.textContent);
  localStorage.setItem("fourthBtn", fourthCityBtn.textContent);
  localStorage.setItem("fifthBtn", fifthCityBtn.textContent);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=e855ba782204791deaddac674c970432`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var longitude = response.coord.lon;
      var latitude = response.coord.lat;
      console.log(latitude);

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely,hourly,alerts&appid=e855ba782204791deaddac674c970432`
      ).then(function (response) {
        return response.json();
      }).then (function (response) {
        console.log(response)

        currentCity.textContent = inputValue + response.current.weather.icon;
        currentDate.textContent = new Date();
        currentTemp.textContent = "Temperature: " + response.current.temp + "°";
        currentHumidity.textContent = "Humidity: " + response.current.humidity + "%";
        currentWind.textContent = "Wind Speed:  " + " mph";
        currentUV.textContent = "UV Index: " + response.current.uvi 

      })
    });

  // Clears input field after submitting
  form.reset();
});

// Function that renders the last input searched from local storage for all of search history
function renderLastInput() {
  var lastInput = localStorage.getItem("cityName");

  if (!lastInput) {
    return;
  }

  firstCityBtn.textContent = lastInput;

  var lastBtn1 = localStorage.getItem("secondBtn");

  if (!lastBtn1) {
    return;
  }

  secondCityBtn.textContent = lastBtn1;

  var lastBtn2 = localStorage.getItem("thirdBtn");

  if (!lastBtn2) {
    return;
  }

  thirdCityBtn.textContent = lastBtn2;

  var lastBtn3 = localStorage.getItem("fourthBtn");

  if (!lastBtn3) {
    return;
  }

  fourthCityBtn.textContent = lastBtn3;

  var lastBtn4 = localStorage.getItem("fifthBtn");

  if (!lastBtn4) {
    return;
  }

  fifthCityBtn.textContent = lastBtn4;
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
