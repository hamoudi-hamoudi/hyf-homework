// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
function arrayItem1() {
  console.log("array index 0 logged");
}
function arrayItem2() {
  console.log("array index 1 logged");
}
function arrayItem3() {
  console.log("array index 2 logged");
}
const array = [arrayItem1, arrayItem2, arrayItem3];
array.forEach((item) => item());
// Create a function as a const and try creating a function normally.

// myfunction();  logs out an error becouse its called before declaration
const myfunction = () => {
  console.log("const function logged");
};
myfunction();

// Create an object that has a key whose value is a function

const obj = {
  objFuction: () => {
    console.log("object with function as key logged");
  },
};
obj.objFuction();
