// Flight booking fullname function

function getFullname(firstname, surname, gender, useFormalName) {
  if (firstname !== "" && surname !== "") {
    if (gender === "man" && useFormalName === "y") {
      return "Your client full name is lord " + firstname + " " + surname;
    } else if (gender === "woman" && useFormalName === "y") {
      return "Your client full name is princess " + firstname + " " + surname;
    } else {
      return "Your client full name " + firstname + " " + surname;
    }
  } else {
    return "please enter a valid name";
  }
}
let flightClient = getFullname(
  prompt("please enter your first name"),
  prompt("please enter your last name"),
  prompt("what is your gender ?"),
  prompt("would you like to use a formal name ? (Y/N)")
);
console.log(flightClient);

// Event application

let dayToEvent = +prompt("How Many Days Left To The Event ?");
function getEventWeekday(days) {
  let today = new Date();
  today.setDate(today.getDate() + days);
  return today.toLocaleString("default", { weekday: "long" });
}
console.log("The event in happening on " + getEventWeekday(dayToEvent));

// Weather wear

function checkWeatherCloths(temperature) {
  if (temperature <= 5) {
    return "Stay home its freezing outside and wear your blanket";
  } else if (temperature > 5 && temperature < 15) {
    return "Wear warm clothes most important dont forget your jacket";
  } else if (temperature >= 15 && temperature <= 29) {
    return "its a beach day wear your light clothes";
  } else if (temperature >= 30 && temperature < 45) {
    return "the heat can hurt you, wear light color clothes and cover your head with a hat";
  } else {
    return "I think you are in another planet";
  }
}
let weatherWear = checkWeatherCloths(+prompt("what temp is it "));
console.log(weatherWear);

// Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.length < 6 || studentName === "queen") {
    if (class07Students.includes(studentName)) {
      console.log(studentName + " is already in the class");
    } else if (studentName === "") {
      console.log("I need a name to process");
    } else {
      class07Students.push(studentName);
    }
  } else {
    console.log("Cannot add more students to class 07");
  }
}
addStudentToClass("");
addStudentToClass("Kumar");
addStudentToClass("Neila");
addStudentToClass("Upasana");
addStudentToClass("Kristina");
addStudentToClass("Anna");
addStudentToClass("Sayali");
addStudentToClass("Arash");
addStudentToClass("Hamoudi");
addStudentToClass("queen");

console.log(class07Students);
function getNumberOfStudents() {
  console.log("there is " + class07Students.length + " students in the class");
}
getNumberOfStudents();

// Candy helper optional

function addCandy(candyType, weight) {
  if (candyType === "Sweet") {
    return boughtCandyPrices.push(weight * 0.5);
  } else if (candyType === "Chocolate") {
    return boughtCandyPrices.push(weight * 0.7);
  } else if (candyType === "Toffee") {
    return boughtCandyPrices.push(weight * 1.1);
  } else if (candyType === "Chewing-gum") {
    return boughtCandyPrices.push(weight * 0.03);
  }
}
let boughtCandyPrices = [];
addCandy("Sweet", 6);
addCandy("Chocolate", 10);
addCandy("Toffee", 10);
addCandy("Toffee", 10);
addCandy("Chewing-gum", 100);
console.log(boughtCandyPrices);

let amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let totalPrice = 0;
  for (i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice = boughtCandyPrices[i] + totalPrice;
  }
  if (amountToSpend >= totalPrice) {
    return true;
  } else return false;
}
let resultCandy =
  canBuyMoreCandy() === true
    ? "You can buy more, so please do!"
    : "Enough candy for you!";

console.log(resultCandy);
