// 1.1 codewars!
// https://www.codewars.com/users/ham-oudi

// 1.2 functions!

// 1/ 2.5 seconds after the script is loaded
setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

//2/ Calling this function should log out the stringToLog after delay

function delayedStringToLog(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
delayedStringToLog(3, "this string logged after 3 seconds");

//3/ Create a button in html
const buttonTag = document.getElementById("buttonLog");
buttonTag.addEventListener("click", () => {
  delayedStringToLog(5, "this string logged after 5 seconds");
});

//4/ Create two functions and assign them to two different variables

const earthLog = () => {
  console.log("Earth");
};
const saturnLog = () => {
  console.log("saturn");
};
const planetToLog = (planetLogFunction) => {
  planetLogFunction();
};
planetToLog(earthLog);
planetToLog(saturnLog);

//5/ Create a button with the text called "Log location"
const locationTag = document.getElementById("location");
const pTag = document.getElementById("geolocation");

locationTag.addEventListener("click", () => {
  pTag.textContent = "Locating…";
  navigator.geolocation.getCurrentPosition(currentLocation);
});

async function currentLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  pTag.innerHTML = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

  //6/ Optional Now show that location on a map using fx the Google maps api

  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  const marker = new AdvancedMarkerView({
    map: map,
    position: { lat: latitude, lng: longitude },
    title: "Uluru",
  });

  map.setCenter({ lat: latitude, lng: longitude });
}

//7/ Create a function called runAfterDelay

function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}
function test1() {
  console.log("the first function is called");
}
function test2() {
  console.log("the second function is called");
}
runAfterDelay(4, test1);
runAfterDelay(6, test2);

//8/ Check if we have double clicked on the page

let click = 0;
document.addEventListener("dblclick", (event) => {
  console.log("double click!");
});
//9/ Create a function called jokeCreator

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else if (!shouldTellFunnyJoke) {
    logBadJoke();
  }
}
const funnyJoke = () => {
  document.getElementById("funny").innerHTML =
    "funnyJoke : JavaScript is a lot like English, No one knows how to use semicolons properly.";
};
const badJoke = () => {
  document.getElementById("bad").innerHTML =
    "badJoke : Don't trust javascript programmers , All they do is promises but they never callback.";
};
jokeCreator(true, funnyJoke, badJoke);
jokeCreator(false, funnyJoke, badJoke);
