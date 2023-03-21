//Vowel Count

function vowelCount(letters) {
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    let letter = letters.charAt(i).toLocaleLowerCase();
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      count++;
    } else {
      count = count;
    }
  }
  return console.log(count);
}
let inputString =
  "The charAt method returns the character at the specified index in a string. The index of the first character is 0, the second character is 1, and so on";
vowelCount(inputString);
vowelCount(prompt("please write your paragraph"));

//Digit*Digit

function multiply(arrgm) {
  let result = [];
  for (let i = 0; i < arrgm.length; i++) {
    result.push(arrgm.charAt(i) * arrgm.charAt(i));
  }
  return console.log(result.join(""));
}
const numbers = "16515";
multiply(numbers);
multiply(prompt("write random numbers"));

//Highest and Lowest

const numberSpace = "1 9 3 4 -5";
function highAndLow(number) {
  let arrayofNumbers = number.split(" ");
  console.log(Math.max(...arrayofNumbers) + " " + Math.min(...arrayofNumbers));
}
highAndLow(numberSpace);
