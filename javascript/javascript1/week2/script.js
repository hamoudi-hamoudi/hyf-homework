// Flight booking fullname function

function getFullname(firstname, surname, gender, useFormalName) {
  if (gender === "man" && useFormalName === true) {
    console.log("Your client full name is lord " + firstname + " " + surname);
  } else if (gender === "woman" && useFormalName === true) {
    console.log(
      "Your client full name is princess " + firstname + " " + surname
    );
  } else {
    console.log("Your client full name " + firstname + " " + surname);
  }
}
let useFormalName = true;
getFullname(
  prompt("please enter your first name"),
  prompt("please enter your last name"),
  prompt("what is your gender ?"),
  true
);

// Event application

let today = new Date();
let dayToEvent = +prompt("How Many Days Left To The Event ?");
function getEventWeekday(days) {
  today.setDate(today.getDate() + days);
  return today.toLocaleString("default", { weekday: "long" });
}
console.log("The event in happening on " + getEventWeekday(dayToEvent));

// Weather wear

function weatherWear(temperature) {
  if (temperature <= 5) {
    console.log("Stay home its freezing outside and wear your blanket");
  } else if (temperature > 5 && temperature < 15) {
    console.log("Wear warm clothes most important dont forget your jacket");
  } else if (temperature >= 15 && temperature <= 29) {
    console.log("its a beach day wear your light clothes");
  } else if (temperature >= 30 && temperature < 45) {
    console.log(
      "the heat can hurt you, wear light color clothes and cover your head with a hat"
    );
  } else {
    console.log("I think you are in another planet");
  }
}
weatherWear(+prompt("what temp is it "));

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
