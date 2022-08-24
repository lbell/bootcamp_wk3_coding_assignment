// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 	a. Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] - ages[0] is not allowed). Print the result to the console.

function subtractLastFromFirst(arr) {
  return arr[arr.length - 1] - arr[0];
}

console.log("Expected: 90");
console.log(subtractLastFromFirst(ages)); // 90

// 	b. Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(23); // adds 23 to the end of the array

console.log("Expected: 20");
console.log(subtractLastFromFirst(ages)); // 23 - 3 = 20

// c. Use a loop to iterate through the array and calculate the average age. Print the result to the console.

function calcAverageValue(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log("Expected: 28.11");
console.log(calcAverageValue(ages)); // average age is 28.11

// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

function calcAvgWordLength(arr) {
  let allNameLengths = [];
  for (eachName of names) {
    allNameLengths.push(eachName.length);
  }
  return calcAverageValue(allNameLengths);
}

console.log("Expected: 3.8333");
console.log(calcAvgWordLength(names)); // average name length is 3.8333

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

function concatArrayValues(arr) {
  let concated = "";
  for (value of arr) {
    concated = concated.concat(" ", value);
  }
  return concated.trim();
}

console.log("Expected: 'Sam Tommy Tim Sally Buck Bob'");
console.log(concatArrayValues(names));

// 3. How do you access the last element of any array?

function lastElement(arr) {
  return arr[arr.length - 1];
}

console.log("Expected: Bob");
console.log(lastElement(names)); // Bob

// 4. How do you access the first element of any array?

function firstElement(arr) {
  return arr[0];
}

console.log("Expected: Sam");
console.log(firstElement(names)); // Sam

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

function getValueLengths(arr) {
  let valLengths = [];
  for (value of arr) {
    valLengths.push(value.length);
  }
  return valLengths;
}
let namesLengths = getValueLengths(names);

console.log("Expected: 3,5,3,5,4,3");
console.log(namesLengths);

let namesArray = ["Kelly", "Sam", "Kate"];
let nameLengths = getValueLengths(namesArray);

console.log("Expected: 5,3,4");
console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

function sumArray(arr) {
  let arrSum = 0;
  for (i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return arrSum;
}

console.log("Expected: 12");
console.log(sumArray(nameLengths));

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function nConcat(string, n) {
  let out = "";
  for (i = 0; i < n; i++) {
    out += string;
  }
  return out;
}

console.log("Expected: HelloHelloHello");
console.log(nConcat("Hello", 3)); // HelloHelloHello

console.log("Expected: FireFire");
console.log(nConcat("Fire", 2)); // FireFire

console.log("Expected: Fire");
console.log(nConcat("Fire", 1)); // Fire

console.log("Expected: ''");
console.log(nConcat("Fire", 0)); // ""

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log("Expected: Arnold Schwarzenegger");
console.log(fullName("Arnold", "Schwarzenegger")); // Arnold Schwarzenegger

// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function greaterThan100(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum > 100;
}

console.log("Expected: false");
console.log(greaterThan100([2, 4, 6, 8, 10])); // false

console.log("Expected: true");
console.log(greaterThan100([2, 4, 6, 8, 10, 99])); // true

// 10 Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calcAvgValue2(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log("Expected: 6");
console.log(calcAvgValue2([2, 4, 6, 8, 10])); // 6

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareAvg(arr1, arr2) {
  let avg1 = calcAvgValue2(arr1);
  let avg2 = calcAvgValue2(arr2);
  return avg1 > avg2;
}

console.log("Expected: false");
console.log(compareAvg([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // false

console.log("Expected: true");
console.log(compareAvg([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])); // true

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.5;
}

console.log("Expected: false");
console.log(willBuyDrink(true, 10)); // false

console.log("Expected: true");
console.log(willBuyDrink(true, 10.51)); // true

console.log("Expected: false");
console.log(willBuyDrink(false, 10)); // false

console.log("Expected: false");
console.log(willBuyDrink(false, 10.51)); // false

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

/**
 * Replace all "o"s in a word with zeros.
 *
 * Why? Because sometimes you need to do something totally frivolous. And m00se really looks like it's looking at you.
 *
 * @param {string} word
 * @returns string with all o's replaced by zeros.
 */
function replaceOWithZero(word) {
  let newWord = "";
  for (letter of word) {
    if (letter === "o") {
      newWord += 0;
    } else {
      newWord += letter;
    }
  }
  return newWord;
}

console.log("Expected: c0w");
console.log(replaceOWithZero("cow"));

console.log("Expected: cat");
console.log(replaceOWithZero("cat"));

console.log("Expected: m00se");
console.log(replaceOWithZero("moose"));
