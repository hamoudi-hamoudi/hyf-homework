// Warmup
const arg = process.argv.slice(2);
if (arg.length === 0) {
  console.log("please give me arguments");
} else {
  const average = arg.reduce((a, b) => a + parseInt(b), 0) / arg.length;
  if (isNaN(average)) {
    console.log("works with only numbers");
  } else {
    console.log(average);
  }
}
