// 1. Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string 
// in the format "last, first".

const concatName = (firstName, lastName) => {
	return `${lastName}, ${firstName}`
}

// 2. Multiple of 100
// Create a function that takes an integer and returns true if it's divisible by 100, 
// otherwise return false.
const divisible = num => {
	if (num % 100 === 0){
		return true
	} else {
		return false
	}
}

// 3. Name Greeting!
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but
//  use an "arrow function".
const helloName = name => `Hello ${name}!`

// 4. Is the Number Even or Odd?
// Create a function that takes a number as an argument and returns "even" 
// for even numbers and "odd" for odd numbers.
const isEvenOrOdd = num => {
	if (num % 2 === 0){
		return "even"
	} else {
		return "odd"
	}
}

// 5. Find the Index (Part 1)
// Create a function that finds the index of a given item.
const search = (arr, item) => arr.indexOf(item)

// 6. Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the 
// perimeter of a rectangle.

const findPerimeter = (height, width) => {
	return (height * 2) + (width * 2)
}

// 7. Find the Index
// Create a function that takes an array and a string as arguments and return 
// the index of the string.
function findIndex(arr, str) {
	return arr.indexOf(str)
}

// 8. Check if an Array Contains a Given Number
// Write a function to check if an array contains a 
// particular number.
const check = (arr, el) => {
	if (arr.includes(el)){
		return true
	} else {
		return false
	}
}

// 9. Find the Bug: Returning the Container
// The packaging system is running wild! The candy is lying 
// loose all over in the warehouse, the cereal is missing, 
// and bread is stuffed in a bottle. What is going on here? 
// The candy should be in plastic and the bread should be in
//  a bag.

// The packaging machine is running the getContainer()
//  function to retrieve the container of a product. 
//  But something is not right...

function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
			break
		case "Beer":
			container = "bottle"
			break
		case "Milk":
			container = "bottle"
			break
		case "Cerials":
			container = "box"
			break
		case "Eggs":
			container = "carton"
			break
		case "Candy":
			container = "plastic"
			break
		default:
			container = null
	}

	return container
}

// 10. Recursion: Length of a String
// Write a function that returns the length of a string.
//  Make your function recursive.
const length = str => str.length

// 11. Compare Strings by Count of Characters
// Create a function that takes two strings as arguments
//  and return either true or false depending on whether 
//  the total number of characters in the first string is 
//  equal to the total number of characters 
// in the second string.
const comp = (str1, str2) => {
	if (str1.length === str2.length){
		return true
	} else {
		return false
	}
}

// 12. Create a fn that verifies if a string has spaces
function hasSpaces(str) {
	if (str.includes(" ")) {
		return true
	} else {
		return false
	}
}

// 13. Profitable Gamble
// Create a function that takes in three arguments 
// (prob, prize, pay) and returns true if prob * prize > pay; 
// otherwise return false.

// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
const profitableGamble = (prob, prize, pay) => {
	if (prob * prize > pay){
		return true
	} else {
		return false
	}
}

// 14. To the Power of _____
// Create a function that takes a base number and an exponent number
//  and returns the calculation. 
const calculateExponent = (num, exp) => Math.pow(num,exp)

// 15. Is the Last Character an N?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true,
//  otherwise return false.
const isLastCharacterN = word => {
	if (word.endsWith("n")) {
		return true
	} else {
		return false
	}
}

// 16. ES6: Destructuring Arrays I
// You can assign variables from arrays like this:
// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in 
// a much more succinct way. Create variables a and b from
//  the given array using the ES6 destructuring assignment 
//  syntax (check the Resources tab for more examples),
//  where a === 1 and b === 2. 
const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

// 17. ES6: Destructuring Arrays IV
// There is an easy way to assign to array values to
//  the nth index by using the Rest element.

// var [head, tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4]
//  instead of tail = 2?

