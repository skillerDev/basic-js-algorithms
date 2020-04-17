// 1. ES6: Destructuring Objects III
// const obj =  { two : 2 }

// var { one, two } = obj

// console.log(one) // outputs undefined
// Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by 
// using default values.Use ES6 object destructuring to add a default value of 1 to the one variable.

const str = `({ one = 1, two } = {two : 2 })`

// 2. Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.
const getLastItem = arr => arr.pop()

// 3. Return the Total Number of Parameters
// Create a function that returns the total number of parameters passed in.
const numberArgs = (...args) => args.length

// 4. Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural.
//  A plural word is one that ends in "s". 
const isPlural = (word) => {
	if (word.endsWith('s')){
		return true
	} else {
		return false
	}
}

// 5. Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: 
// "Today, I am feeling {mood}". However, if no argument is passed, return 
// "Today, I am feeling neutral".
const moodToday = mood => {
	if (mood === 'happy'){
		return `Today, I am feeling ${mood}`
	} else if (mood === 'sad'){
		return `Today, I am feeling ${mood}`
	} else if (mood === 'very happy'){
		return `Today, I am feeling ${mood}`
	} else if (mood === 'rather empty inside'){
		return `Today, I am feeling ${mood}`
	} else if (mood === 'confused'){
		return `Today, I am feeling ${mood}`
	} else {
		return 'Today, I am feeling neutral'
	}
	
}

/* better solution to above is: */
const moodToday = mood => `Today, I am feeling ${mood || 'neutral'}`

// 6. Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array 
// with the elements multiplied by two. 
const getMultipliedArr = arr => {
	const newArr =[]
	return arr.map(newArr => newArr *2)
}

/* alt solution */
const getMultipliedArr = arr => arr.map(x => x * 2)


// 7.Case Insensitive Comparison
// Write a function that validates whether two strings are identical. 
// Make it case insensitive.
const match = (s1, s2) => s1.toLowerCase()=== s2.toLowerCase()

// 8. Extract City Facts
// Create a function that takes an object as an argument and returns a 
// string with facts about the city. The city facts will need to be extracted
//  from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and 
// is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

const cityFacts = city => `${city.name} has a population of ${city.population} and is situated in ${city.continent}`

// 9. Find the Index (Part 2)
// Create a function that searches for the index of a given item in an array. 
// If the item is present, it should return the index, otherwise, it should return -1.

const search = (arr, item) => {
	if (arr.includes(item)){
		return arr.indexOf(item)
	} else {
		return -1
	}
}

/* alt solution */
function search(arr, item) {
	if (arr.includes(item)){
		return arr.indexOf(item)
	} else {
		return -1
	}
}

// 10. Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"


const nSidedShape = n => {
	let arr = ['circle', 'semi-circle', 'triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 
						 'octagon', 'nonagon', 'decagon'];
	return arr[n - 1];
}

// 11. Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.
const ctoa = c => c.charCodeAt()


// 12. Is It a Triangle?
// Create a function that takes three numbers as arguments and returns
//  true if it's a triangle and false if not.
const isTriangle = (a, b, c)=> {
	if (a + b <= c || a + c <= b || b + c <= a){
		return false
	} else {
		return true
	}
}

// 13. Slice of Pie
// Create a function that determines whether or not it's possible to split a 
// pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// The function will be in this form:

// equalSlices(total slices, no. recipients, slices each)

const equalSlices = (total, people, each) => people * each <= total

// 14. Add a Consecutive List of Numbers
// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers 
// up to and including it.

const addUpTo = n => n * (n + 1) / 2;


// 15. Fraction Greater Than One
// Given a fraction as a string, return whether or not it is greater than 1 
// when evaluated.

const greaterThanOne = frac => eval(frac) > 1;

// 16. Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each
// word's length.
const wordLengths = arr => arr.map(newArr => newArr.length)

// 17. The pH Scale
// Given a pH value, return whether that value is 'alkaline', 'acidic', or 'neutral'. Return 'invalid' if the value given is less than 0 or greater than 14.

// Image of a pH chart

// Examples
// pHName(5) ➞ "acidic"

// pHName(8.7) ➞ "alkaline"

// pHName(7) ➞ "neutral"

const pHName = pH => pH < 0 || pH > 14 ? 'invalid' :
	pH < 7 ? 'acidic' : pH > 7 ? 'alkaline' : 'neutral';

// 18. Count the Arguments
// Create a function that returns the number of argument it was called with.	

const numArgs = (...args) => args.length

// 19. Testing K^K == N?
// Write a function that returns true if k^k == n for input (n, k) 
// and return false otherwise.
const kToK = (n, k) => {
	if (Math.pow(k,k)== n){
		return true
	}else{
		return false
	}
}

// 20. Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in 
// between all of the characters.
const spaceMeOut = str => str.split('').join(' ')