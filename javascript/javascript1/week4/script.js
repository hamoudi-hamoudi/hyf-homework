// Voice assistant

let name = "";
let todo = [];
function getReply(command) {
  let phraseArr = command.toLowerCase().split(" ");

  if (
    phraseArr[phraseArr.indexOf("is")] &&
    phraseArr[phraseArr.indexOf("is") + 1] &&
    !phraseArr.includes("what")
  ) {
    name = phraseArr.slice(phraseArr.indexOf("is") + 1, phraseArr.length);
    console.log(`nice to meet you ${phraseArr[phraseArr.length - 1]}`);
  } else if (
    phraseArr.includes("what") &&
    phraseArr.includes("name") &&
    name !== ""
  ) {
    console.log("your name is " + name.join(" "));
  } else if (phraseArr.includes("add") && phraseArr.includes("todo")) {
    let todoTask = phraseArr
      .slice(phraseArr.indexOf("add") + 1, phraseArr.indexOf("to"))
      .join(" ");
    if (!todoTask) {
      console.log("please enter some todo !!");
    } else {
      todo.push(todoTask);
    }
  } else if (phraseArr.includes("remove") && phraseArr.includes("todo")) {
    let item = phraseArr
      .slice(phraseArr.indexOf("remove") + 1, phraseArr.indexOf("from"))
      .join(" ");
    todo.splice(todo.indexOf(item), 1);
  } else if (phraseArr.includes("what") && phraseArr.includes("todo")) {
    console.log("you have " + todo.length + " todo " + todo.join(" and "));
  } else if (
    (phraseArr.includes("what") && phraseArr.includes("day")) ||
    phraseArr.includes("today")
  ) {
    let today = new Date().toLocaleDateString("en-us", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    console.log("Today we are " + today);
  } else if (
    (phraseArr.includes("set") && phraseArr.includes("timer")) ||
    phraseArr.includes("timer")
  ) {
    let timer =
      parseInt(
        phraseArr.slice(
          phraseArr.indexOf("for") + 1,
          phraseArr.indexOf("for") + 2
        )
      ) * 60000;
    console.log(timer);
    setTimeout(() => {
      alert("your time is up");
    }, timer); // it can be more complex if we try to analyze if its minute or seconds or hours
  } else if (phraseArr.includes("what") && phraseArr.includes("is")) {
    let result = eval(
      phraseArr
        .slice(phraseArr.indexOf("is") + 1, phraseArr.indexOf("is") + 10)
        .join("")
    );
    console.log("your result is " + result);
  }
  if (name == "") {
    console.log("please enter your name ! ");
  }
}
getReply("");
getReply("my name is hamoudi");
getReply("what is my name");
getReply("add playing games to my todo");
getReply("add fishing to my todo");
getReply("add going for a drive to my todo");
getReply("Add taking a shower to my todo");
getReply("Add to my todo");
getReply("remove fishing from my todo");
getReply("What day is it today ?");
getReply("Set a timer for 1 minutes");
getReply("timer for 2 min");
getReply("What is 4 + 6");
getReply("What is 49/ 7");
getReply("What is 4*6");
getReply(prompt("Welcome to the AI website, please enter your commands"));
getReply("what is my todo list");
//console.log(todo);
