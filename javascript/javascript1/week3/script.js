//Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Rasmus";
names.splice(names.indexOf(nameToRemove), 1);
console.log(names); // [ "Peter", "Ahmad", "Yana", "kristina", "Samuel", "katrine", "Tala" ]

//When will we be there??

const travelInformation = {
  speed: +prompt("enter your speed in km/h"),
  distance: +prompt("enter your distants in km"), // a small change
};
function calculateTime(travelInformation) {
  const travelTime = travelInformation.distance / travelInformation.speed;
  const hours = Math.floor(travelTime);
  const minutes = ((travelTime - hours) * 60).toFixed(0);
  return `${hours} hours and ${minutes} minutes`;
}
console.log(calculateTime(travelInformation)); // 8 hours and 38 minutes

// Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "true detective",
    days: 1,
    hours: 4,
    minutes: 0,
  },
  {
    title: "the boys",
    days: 2,
    hours: 11,
    minutes: 15,
  },
];
// nested functions becouse of the lesson
function logOutSeriesText() {
  let age = +prompt("how old are you");
  let total = 0;
  function calculating(serie) {
    const seriePercentage = (
      ((serie.days * 24 * 60 + serie.hours * 60 + serie.minutes) * 100) /
      (age * 365 * 24 * 60)
    ).toFixed(3);
    console.log(`${serie.title} took ${seriePercentage} % of your life`);
    total += +seriePercentage;
  }
  seriesDurations.forEach(calculating);
  console.log(`In total that is ${total.toFixed(3)} % of your life`);
}
logOutSeriesText();

// NOnoN0nOYes (Note taking app)

const notes = [];
function saveNote(content, id) {
  notes.push({ content, id });
}
saveNote("clean the room", 1);
saveNote("go for a walk", 2);
saveNote("buy some food your fridge is empty", 3);

console.log(notes);

function getNote(id) {
  if (id === undefined || id === "") {
    return "Please enter a valid id.";
  }
  let foundId = notes.find((item) => {
    return item.id === id;
  });
  if (!foundId) {
    return "id not found";
  }
  return foundId;
}

console.log(getNote(3));
console.log(getNote(25));
console.log(getNote(""));

function logOutNotesFormatted() {
  for (let i in notes) {
    console.log(
      `The note with id: ${notes[i].id} has the following note text: ${notes[i].content}`
    );
  }
}
logOutNotesFormatted();
