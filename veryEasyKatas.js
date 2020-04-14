// convert minutes to seconds 
// 1. write a fn that takes an integer in minutes and converts it to seconds

const convert = minutes => {
    return minutes * 60
}

// 2. squaring a number **use Math.pow()**

const squared = b => Math.pow(b,2)

//  3. Return the Sum of Two Numbers; Create a function that takes
//  two numbers as arguments and return their sum

const addition = (a,b) => a +b

// 4. Return the First Element in an Array
// Create a function that takes an array and returns the first element.

const getFirstValue = arr => arr[0]

// 5. Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, 
// increments the number by +1 and returns the result.

const addition = num => num + 1

// 6. In this challenge, a farmer is asking you to tell him how many legs
// can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

const animals = (chickens, cows, pigs) => {
    return 2*chickens + 4*cows + 4*pigs
}

// 7. Maximum Edge of a Triangle
// Create a function that finds the maximum range of a triangle's third edge, 
// where the side lengths are all integers.

const nextEdge = (side1, side2) => (side1 + side2) -1

// 8. Are the Numbers Equal?
// Create a function that returns true when num1 is equal to num2; 
// otherwise return false.

const isSameNum = (num1, num2) => {
	if (num1 === num2){
		return true
	} else {
		return false
	}
}

// 9. Equality Check
// In this challenge, you must verify the equality of two different given parameters: a and b.

// Both the value and the type of parameters need to be tested in order to have an matching equality. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learnt so far that will permit you to do two different checks (value and type) with a single statement?

// Implement a function that returns true if the parameters are equal, and false if they are different.

function checkEquality(a, b) {
    if (a === b){
          return true
      } else {
          return false
      }
  }

//   10. Frames Per Second
//   Create a function that returns the number of frames shown in a given number of minutes 
//   for a certain FPS.

const frames = (minutes, fps) => (minutes * fps) * 60

// 11. Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes) and
//  converts them into seconds.

const convert = (hours,minutes) => hours * 3600 + minutes * 60

// 12. Convert seconds to hours 
const howManySeconds = hours => hours * 3600

// 13. Area of a Triangle
// Write a function that takes the base and height of a triangle and return
//  its area.

const triArea = (base, height) => (base * height)/2