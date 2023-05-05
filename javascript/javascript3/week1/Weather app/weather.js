const input = document.getElementById("input");
const button = document.getElementById("button");
const myPostion = document.getElementById("current");
const error = document.getElementById("err");
const storage = document.getElementById("storage");

// ---- getting the user city coordinates latitude and longitude ----

const getCityLocation = async (name) => {
  try {
    const city = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=541ef5d4efc0006a00e05f056917e2a3`
    );
    const cityData = await city.json();

    return cityData[0];
  } catch (err) {
    console.error(err);
  }
};
// ---- using latitude and longitude to get a weather data using API ----
const appid = `541ef5d4efc0006a00e05f056917e2a3`;
const getWeatherInfo = async (lat, lon) => {
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`
    );
    const data = await weather.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

// ---- button that take the a valid user input and transform it for weather information ----

button.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    error.innerText = "";
    const geoCityLocation = await getCityLocation(input.value);
    const result = await getWeatherInfo(
      geoCityLocation.lat,
      geoCityLocation.lon
    );
    //console.log(result);
    renderWeatherResult(result);
    localStorage.setItem(`${result.name}`, result.name);
  } catch (err) {
    error.innerText = "Please enter a valid city Name";
    console.log("its this error " + err);
  }
});

// ---- using the dvice geolocation and transform it for weather information ----

const myLocationWeather = async (position) => {
  try {
    error.innerText = "";
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const result = await getWeatherInfo(latitude, longitude);
    console.log(result);
    renderWeatherResult(result);
  } catch (err) {
    console.error(err);
  }
};

// ---- button to generate the weather in the dvice position ----

myPostion.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(myLocationWeather);
});

// ---- using the city in the localstorage to get the current weather ----

// getting the key of the stored info
let keys = Object.keys(localStorage);
let optionValues = keys.forEach((e) => {
  const option = document.createElement("option");
  option.value = `${e}`;
  option.text = `${e}`;
  storage.appendChild(option);
});
storage.addEventListener("change", async () => {
  // look for a change in status and render the result
  error.innerText = "";
  const geoCityLocation = await getCityLocation(storage.value);
  const result = await getWeatherInfo(geoCityLocation.lat, geoCityLocation.lon);
  renderWeatherResult(result);
});

// ---- function that render the data in the DOM ----

const renderWeatherResult = (data) => {
  const cityName = document.getElementById("city-name");
  const icon = document.getElementById("icon");
  const temperature = document.getElementById("temp");
  const description = document.getElementById("description");
  const windSpeed = document.getElementById("wind-speed");
  const cloudiness = document.getElementById("cloud");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");

  cityName.innerText = data.name;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  icon.alt = `${data.weather[0].description}`;
  temperature.innerText = `${data.main.temp.toFixed(0)}°C`;
  description.innerText = data.weather[0].description;
  windSpeed.innerText = `Wind speed: ${data.wind.speed} m/s`;
  cloudiness.innerText = `Cloudiness: ${data.clouds.all}%`;
  sunrise.innerText = `Sunrise: ${new Date(
    data.sys.sunrise * 1000
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
  sunset.innerText = `Sunset: ${new Date(
    data.sys.sunset * 1000
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};
