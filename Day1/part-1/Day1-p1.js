let myString = require("./Input.js");
let myArrOfElves = [];

let count = 0;

myString.split("\n").forEach((item) => {
  if (item == "") {
    myArrOfElves.push(count);
    count = 0;
  }
  count += Number(item);
});

let result_part1 = Math.max(...myArrOfElves); // Task - 1:

let newElvesArr = myArrOfElves.sort((a, b) => {
  return b - a;
});

let result_part2 = newElvesArr[0] + newElvesArr[1] + newElvesArr[2]; // Task - 2:

console.log(result_part1, result_part2);
