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
console.log(result_part1);
