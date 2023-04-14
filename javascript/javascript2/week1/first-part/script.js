// CodeWars link https://www.codewars.com/users/ham-oudi
//you can see the widget of the site on my github https://github.com/hamoudi-hamoudi

// Find and count the Danish letters

function findingDanichLetters(str) {
  let specialChar1 = str.split("å").length - 1;
  let specialChar2 = str.split("æ").length - 1;
  let specialChar3 = str.split("ø").length - 1;
  let result = {
    total: specialChar1 + specialChar2 + specialChar3,
    å: specialChar1,
    æ: specialChar2,
    ø: specialChar3,
  };
  Object.entries(result).forEach(([k, v]) => {
    // turn the object to an array and delete the value 0
    if (v === 0) delete result[k];
  });
  return console.log(`${JSON.stringify(result)} `); // json.stringify shows the inner of the object
}
const danishString = "Jeg har en blå bil";
findingDanichLetters(danishString); // returns {"total":1,"å":1}
const danishString2 = "Blå grød med røde bær";
findingDanichLetters(danishString2); // returns {"total":4,"å":1,"æ":1,"ø":2}

//Spirit animal name generator
let spiritAnimals = [
  {
    name: "Magical Dear",
    pic: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/magical-deer-ata-alishahi.jpg",
  },
  {
    name: "Dracula",
    pic: "https://img5.goodfon.com/wallpaper/nbig/6/83/todor-hristov-by-todor-hristov-bloodsucker-creatures-krovopi.jpg",
  },
  {
    name: "Unicorn",
    pic: "https://investinestonia.com/wp-content/uploads/estonian-unicorn-in-space.jpg",
  },
  {
    name: "kingkong",
    pic: "https://i.dawn.com/primary/2022/08/261217144d9ad8a.png",
  },
  {
    name: "Godzilla",
    pic: "https://www.hollywoodreporter.com/wp-content/uploads/2015/06/Godzilla2014_20.jpg",
  },
  {
    name: "Mermaid",
    pic: "https://i.pinimg.com/originals/74/9e/84/749e847bfa68adbf769d3e5675699253.jpg",
  },
  {
    name: "Dragon",
    pic: "https://winteriscoming.net/files/2021/11/Caraxes.jpeg",
  },
];

let divTag = document.querySelector(".animalResult");
const imgTag = document.createElement("img"); // creat an img tag to show a picture of the spirit animal
const inputname = document.querySelector("#username");
let pTag = document.querySelector("#welcome");
let buttonTag = document.querySelector("#button");
buttonTag.addEventListener("click", function () {
  if (inputname.value !== "") {
    let random = Math.floor(Math.random() * 7); // random numbers from 0 to 6
    pTag.innerHTML = `Welcome ${inputname.value} Your spirit Animal is a ${spiritAnimals[random].name} `;
    imgTag.src = spiritAnimals[random].pic;
    divTag.appendChild(imgTag);
  } else {
    return (pTag.innerHTML = "please enter your name");
  }
});
