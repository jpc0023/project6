var apiKey = "5eebafd7e2106877e823e63b95779d18";
var searchFormEl = document.querySelector("#search-form");
var cityEl = document.querySelector("#city");
var currentCityEl = document.querySelector("#current-city");
var citySearchTerm = document.querySelector("#city-search-term");
var cityButtons = document.querySelector("#city-buttons");
var currentTemp = document.querySelector("#current-temp");
var formSubmitHandler = function(event) {
    event.preventDefault();
    var city = cityEl.value.trim();
    if (city) {
        getCurrentCity(city);
        cityEl.value = "";
    } else {
        alert("wut say huh?");
    }
    console.log(event);
    
};

var getCurrentCity = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=" + apiKey;
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
                displayCity(city);
            });
        } else {
            alert("wut");
        }
    });
};

var displayCity = function(city) {
    var cityNameEl = document.createElement("a");
    cityNameEl.classList = "list-item flex-row justify-space-between align-center";
    var titleEl = document.createElement("div");
    titleEl.classList = "list-item flex-row justify-space-between";
    titleEl.textContent = city;
    citySearchTerm.textContent = city;
    
    cityButtons.appendChild(titleEl);
}













searchFormEl.addEventListener("submit", formSubmitHandler);