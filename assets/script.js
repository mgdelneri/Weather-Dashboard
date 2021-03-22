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
var uvNumber = document.querySelector("span");
var firstCityBtn = document.querySelector("#chosen-city1");
var secondCityBtn = document.querySelector("#chosen-city2");
var thirdCityBtn = document.querySelector("#chosen-city3");
var fourthCityBtn = document.querySelector("#chosen-city4");
var fifthCityBtn = document.querySelector("#chosen-city5");
var date1 = document.querySelector("#date1");
var date2 = document.querySelector("#date2");
var date3 = document.querySelector("#date3");
var date4 = document.querySelector("#date4");
var date5 = document.querySelector("#date5");
var icon1 = document.querySelector("#weather-symbol1");
var icon2 = document.querySelector("#weather-symbol2");
var icon3 = document.querySelector("#weather-symbol3");
var icon4 = document.querySelector("#weather-symbol4");
var icon5 = document.querySelector("#weather-symbol5");
var temp1 = document.querySelector("#temp1");
var temp2 = document.querySelector("#temp2");
var temp3 = document.querySelector("#temp3");
var temp4 = document.querySelector("#temp4");
var temp5 = document.querySelector("#temp5");
var humidity1 = document.querySelector("#humid1");
var humidity2 = document.querySelector("#humid2");
var humidity3 = document.querySelector("#humid3");
var humidity4 = document.querySelector("#humid4");
var humidity5 = document.querySelector("#humid5");
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

  // Use fetch to call API data from Open Weather API
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
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          console.log(response);
          // Attach data from API to current weather elements
          currentCity.textContent =
            inputValue + " " + response.current.weather[0].icon;
          currentDate.textContent = new Date();
          currentTemp.textContent =
            "Temperature: " + response.current.temp + "°";
          currentHumidity.textContent =
            "Humidity: " + response.current.humidity + "%";
          currentWind.textContent =
            "Wind Speed:  " + response.current.wind_speed + " mph";
          uvNumber.textContent = response.current.uvi;

          // Attach data from API to 5-day forecast elements
          
          // Day 1 
          // date1.textContent = // Date(response.daily[1][1]);
          // icon1.textContent =
          // temp1.textContent = 
          // humidity1.textContent =

          // Day 2
          // date2.textContent =
          // icon2.textContent = 
          // temp2.textContent = 
          // humidity2.textContent =

          // Day 3
          // date3.textContent =
          // icon3.textContent =
          // temp3.textContent =
          // humidity3.textContent =

          // Day 4
          // date4.textContent = 
          // icon4.textContent = 
          // temp4.textContent = 
          // humidity4.textContent = 

          // Day 5
          // date5.textContent = 
          // icon5.textContent = 
          // temp5.textContent =
          // himidity5.textContent = 

          // Change background of current UV Index according to value
          if (response.current.uvi < 3) {
            uvNumber.setAttribute(
              "style",
              "background-color: green; color: ivory"
            );
          } else if (response.current.uvi >= 3 && response.current.uvi < 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: yellow; color: rgb(152, 152, 38)"
            );
          } else if (response.current.uvi >= 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: red; color: ivory"
            );
          }
        });
    });
  // Clears input field after submitting
  form.reset();
});

// Add event listeners to all 5 buttons in search history

// First button in search history
firstCityBtn.addEventListener("click", function () {
  var firstBtnTxt = firstCityBtn.textContent;
  // Use fetch to call API data from Open Weather API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${firstBtnTxt}&appid=e855ba782204791deaddac674c970432`
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
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          console.log(response);
          // Attach data from API to current weather elements
          currentCity.textContent =
            firstBtnTxt + " " + response.current.weather[0].icon;
          currentDate.textContent = new Date();
          currentTemp.textContent =
            "Temperature: " + response.current.temp + "°";
          currentHumidity.textContent =
            "Humidity: " + response.current.humidity + "%";
          currentWind.textContent =
            "Wind Speed:  " + response.current.wind_speed + " mph";
          uvNumber.textContent = response.current.uvi;

          // Attach data from API to 5-day forecast elements
          date1.textContent = Date(response.daily[1][1]);

          // Change background of current UV Index according to value
          if (response.current.uvi < 3) {
            uvNumber.setAttribute(
              "style",
              "background-color: green; color: ivory"
            );
          } else if (response.current.uvi >= 3 && response.current.uvi < 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: yellow; color: rgb(152, 152, 38)"
            );
          } else if (response.current.uvi >= 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: red; color: ivory"
            );
          }
        });
    });
});

// Second button in search history
secondCityBtn.addEventListener("click", function () {
  var secondBtnTxt = secondCityBtn.textContent;
  // Use fetch to call API data from Open Weather API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${secondBtnTxt}&appid=e855ba782204791deaddac674c970432`
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
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          console.log(response);
          // Attach data from API to current weather elements
          currentCity.textContent =
            secondBtnTxt + " " + response.current.weather[0].icon;
          currentDate.textContent = new Date();
          currentTemp.textContent =
            "Temperature: " + response.current.temp + "°";
          currentHumidity.textContent =
            "Humidity: " + response.current.humidity + "%";
          currentWind.textContent =
            "Wind Speed:  " + response.current.wind_speed + " mph";
          uvNumber.textContent = response.current.uvi;

          // Attach data from API to 5-day forecast elements
          date1.textContent = Date(response.daily[1][1]);

          // Change background of current UV Index according to value
          if (response.current.uvi < 3) {
            uvNumber.setAttribute(
              "style",
              "background-color: green; color: ivory"
            );
          } else if (response.current.uvi >= 3 && response.current.uvi < 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: yellow; color: rgb(152, 152, 38)"
            );
          } else if (response.current.uvi >= 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: red; color: ivory"
            );
          }
        });
    });
});

// Third button in search history
thirdCityBtn.addEventListener("click", function () {
  var thirdBtnTxt = thirdCityBtn.textContent;
  // Use fetch to call API data from Open Weather API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${thirdBtnTxt}&appid=e855ba782204791deaddac674c970432`
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
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          console.log(response);
          // Attach data from API to current weather elements
          currentCity.textContent =
            thirdBtnTxt + " " + response.current.weather[0].icon;
          currentDate.textContent = new Date();
          currentTemp.textContent =
            "Temperature: " + response.current.temp + "°";
          currentHumidity.textContent =
            "Humidity: " + response.current.humidity + "%";
          currentWind.textContent =
            "Wind Speed:  " + response.current.wind_speed + " mph";
          uvNumber.textContent = response.current.uvi;

          // Attach data from API to 5-day forecast elements
          date1.textContent = Date(response.daily[1][1]);

          // Change background of current UV Index according to value
          if (response.current.uvi < 3) {
            uvNumber.setAttribute(
              "style",
              "background-color: green; color: ivory"
            );
          } else if (response.current.uvi >= 3 && response.current.uvi < 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: yellow; color: rgb(152, 152, 38)"
            );
          } else if (response.current.uvi >= 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: red; color: ivory"
            );
          }
        });
    });
});

// Fourth button in search history
fourthCityBtn.addEventListener("click", function () {
  var fourthBtnTxt = fourthCityBtn.textContent;
  // Use fetch to call API data from Open Weather API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${fourthBtnTxt}&appid=e855ba782204791deaddac674c970432`
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
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          console.log(response);
          // Attach data from API to current weather elements
          currentCity.textContent =
            fourthBtnTxt + " " + response.current.weather[0].icon;
          currentDate.textContent = new Date();
          currentTemp.textContent =
            "Temperature: " + response.current.temp + "°";
          currentHumidity.textContent =
            "Humidity: " + response.current.humidity + "%";
          currentWind.textContent =
            "Wind Speed:  " + response.current.wind_speed + " mph";
          uvNumber.textContent = response.current.uvi;

          // Attach data from API to 5-day forecast elements
          date1.textContent = Date(response.daily[1][1]);

          // Change background of current UV Index according to value
          if (response.current.uvi < 3) {
            uvNumber.setAttribute(
              "style",
              "background-color: green; color: ivory"
            );
          } else if (response.current.uvi >= 3 && response.current.uvi < 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: yellow; color: rgb(152, 152, 38)"
            );
          } else if (response.current.uvi >= 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: red; color: ivory"
            );
          }
        });
    });
});

// Fifth button in search history
fifthCityBtn.addEventListener("click", function () {
  var fifthBtnTxt = fifthCityBtn.textContent;
  // Use fetch to call API data from Open Weather API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${fifthBtnTxt}&appid=e855ba782204791deaddac674c970432`
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
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          console.log(response);
          // Attach data from API to current weather elements
          currentCity.textContent =
            fifthBtnTxt + " " + response.current.weather[0].icon;
          currentDate.textContent = new Date();
          currentTemp.textContent =
            "Temperature: " + response.current.temp + "°";
          currentHumidity.textContent =
            "Humidity: " + response.current.humidity + "%";
          currentWind.textContent =
            "Wind Speed:  " + response.current.wind_speed + " mph";
          uvNumber.textContent = response.current.uvi;

          // Attach data from API to 5-day forecast elements
          date1.textContent = Date(response.daily[1][1]);

          // Change background of current UV Index according to value
          if (response.current.uvi < 3) {
            uvNumber.setAttribute(
              "style",
              "background-color: green; color: ivory"
            );
          } else if (response.current.uvi >= 3 && response.current.uvi < 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: yellow; color: rgb(152, 152, 38)"
            );
          } else if (response.current.uvi >= 8) {
            uvNumber.setAttribute(
              "style",
              "background-color: red; color: ivory"
            );
          }
        });
    });
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
