// spread operator

let obj1 = {
  char1: "abc",
  char2: "def",
};

let obj2 = {
  fName: "xyz",
  lName: "wxy",
};

let spreadObj = { ...obj1, ...obj2 };
console.log("Object spread:", spreadObj);
console.log("--------------------------------");

const arr1 = [2, 4, 6, 7, 8];
const arr2 = [4, 4, 7, 9, 8];

let spreadArray = [...arr1, ...arr2];

console.log("Arrays Spread:", spreadArray);
console.log("--------------------------------");

// rest parameter
function log(...restParameter) {
  let sum = 0;
  for (let x of restParameter) {
    sum += x;
  }
  return console.log("Sum of elements using rest parameter:", sum);
}

log(1, 2, 3, 4, 5);
console.log("--------------------------------");

// concat string in element of array
const contactNo = [9879, 7979, 4545, 6755, 4353];
for (let i = 0; i < contactNo.length; i++) {
  contactNo[i] = "+91-" + contactNo[i].toString();
}

console.log("+91- added to array elements:", contactNo);
console.log("--------------------------------");

// concat string in element of array using map
const contactNo2 = [9879, 7979, 4545, 6755, 4353];
const contact = contactNo2.map((value) => {
  return "+91" + value;
});
console.log("+91- added to array elements using map method:", contact);
console.log("--------------------------------");

// capitalize array names using map

let names = ["ramesh", "suresh", "mahesh", "mukesh", "dinesh", "somesh"];

const capsArray = names.map((cap) => {
  return cap.charAt(0).toUpperCase() + cap.slice(1);
});

console.log("Capitalized array elements using map method:", capsArray);
console.log("--------------------------------");

//convert numbers to string in arrays using map

let numbersArray = [123, 4, 56, 78910, 11, 2345];

const numToString = numbersArray.map((nums) => {
  return nums.toString();
});

console.log(
  "convert number to string array elements using map method:",
  numToString
);
console.log("--------------------------------");

// array element multiply by 3

let exampleArray = [1, 3, 4, 6, 7];

const multipliedArray = exampleArray.map((multiple) => {
  return multiple * 3;
});

console.log("multiplied array elements using map method:", multipliedArray);
console.log("--------------------------------");
