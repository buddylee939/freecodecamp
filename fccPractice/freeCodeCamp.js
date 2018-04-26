/*
// MAP 198
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
    // console.log("found");
  } else {
    // console.log("not found");
    return "Not Found";
  }
  
}

// Test your code by modifying these values
var test = checkObj("dog");
console.log(test);
*/

/* 
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
*/

// Map 202
/* Use a for loop to work to push the values 1 through 5 onto myArray. */

/*
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var n = 1;n < 6; n++){
  myArray.push(n);
}
console.log(myArray);

// Map 203
// Push the odd numbers from 1 through 9 to myArray using a for loop.

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var n = 1; n <= 10; n += 2){
  myArray.push(n);
}

// Map 204
// Push the odd numbers from 9 through 1 to myArray using a for loop.

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var n = 9; n > 0; n -= 2){
  myArray.push(n);
}

// Map 205
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (n = 0; n < myArr.length; n++){
  total += myArr[n];
}

console.log('the total is: '+total);

// Map 206
// Push the numbers 0 through 4 to myArray using a while loop.

// Setup
var myArray = [];

// Only change code below this line.
var n = 0;
while ( n < 5){
  myArray.push(n);
  n++;
}

console.log(myArray);
*/

// Map 207
/* We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes firstName and a property (prop) as arguments has been pre-written for you.

The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If firstName does not correspond to any contacts then return "No such contact"

If prop does not correspond to any valid properties then return "No such property"
*/

/*
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
// alert(contacts.length);
// alert(contacts[0][prop]);

var n = 0;
var yesNo;
while (n < contacts.length){
// we need to check if contact matches firstName
  if (contacts[n].firstName == firstName){
    yesNo = true;     
    // we need to check if that name has that property
    if (contacts[n][prop]){
      // if both true the return value of property
      answer = contacts[n][prop];
      return answer;
    } else {
      // if prop to there 'No such property'
      answer = "No such property";
      return answer;
    }
  } else {
    // if name does not match "No such contact"
    yesNo = false; 
  }
  n++;
}
if (!yesNo){
  return answer = "No such contact";
}


// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Bob", "likes"));
*/

// Map 208
// Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));


// Map 210


function randomFraction() {

  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}

console.log(randomFraction());

// Map 211 
/* Math.floor(Math.random() * 20); Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19. */


// Map 212 
// Math.floor(Math.random() * (max - min + 1)) + min
//Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive. 


// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));

// Only change code below this line.

function randomRange(myMin, myMax) {
  // var output;
  // var test = true;
  // while (!test){
  //   output = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  //   if (output >= myMin)
  // }
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
console.log(myRandom);


// Map 213
// Sift through Text with Regular Expressions
/* 
Regular expressions are used to find certain words or patterns inside of strings.

For example, if we wanted to find the word the in the string The dog chased the cat, we could use the following regular expression: /the/gi

Let's break this down a bit:

/ is the start of the regular expression.

the is the pattern we want to match.

/ is the end of the regular expression.

g means global, which causes the pattern to return all matches in the string, not just the first one.

i means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.
*/

/* Select all the occurrences of the word and in testString.

You can do this by replacing the . part of the regular expression with the word and.
*/

// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;
  

// Only change code below this line.

var expression = /and/gi;  // Change this Line

// Only change code above this line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;
console.log(andCount);

// Map 214
/* 
We can use special selectors in Regular Expressions to select a particular type of value.

One such selector is the digit selector \d which is used to retrieve one digit (e.g. numbers 0 to 9) in a string.

In JavaScript, it is used like this: /\d/g.

Appending a plus sign (+) after the selector, e.g. /\d+/g, allows this regular expression to match one or more digits.

The trailing g is short for 'global', which allows this regular expression to find all matches rather than stop at the first match.
*/

// Use the \d selector to select the number of numbers in the string, allowing for the possibility of one or more digit.
// Setup
var testString = "There are 3 cats but 4 dogs and 5 giraffes.";

// Only change code below this line.

var expression = /\d+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;
console.log(digitCount);


// Map 216
/* 
We can also use regular expression selectors like \s to find whitespace in a string.

The whitespace characters are " " (space), \r (the carriage return), \n (newline), \t (tab), and \f (the form feed).

The whitespace regular expression looks like this:

/\s+/g
*/

// Use \s to select all the whitespace characters in the sentence string.

// Setup
var testString = "How many spaces 3 are there in this 5 sentence and 6?";

// Only change code below this line.

var expression = /\s+/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;
console.log(spaceCount);


// Map 216
// Use /\S/g to count the number of non-whitespace characters in testString.
/*
You can invert any match by using the uppercase version of the regular expression selector.

For example, \s will match any whitespace, and \S will match anything that isn't whitespace.
*/

// Setup
var testString = "How many non-space characters are there in this sentence?";

// Only change code below this line.

var expression = /\S/g;  // Change this line

// Only change code above this line

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;
console.log(nonSpaceCount);

// Map 218

/*
We are also able to create objects using constructor functions.

A constructor function is given a capitalized name to make it clear that it is a constructor.

Here's an example of a constructor function:

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};
In a constructor the this variable refers to the new object being created by the constructor. So when we write,

  this.wheels = 4;

inside of the constructor we are giving the new object it creates a property called wheels with a value of 4.

You can think of a constructor as a description for the object it will create.

Have your MotorBike constructor describe an object with wheels, engines and seats properties and set them to numbers.
*/


var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var MotorBike = function() {
  this.wheels = 3;
  this.engines = 2;
  this.seats = 1;
};


// Map 219 

/*
Now let's put that great constructor function we made in the last lesson to use!

To use a constructor function we call it with the new keyword in front of it like:

var myCar = new Car();

myCar is now an instance of the Car constructor that looks like the object it described:

{
  wheels: 4,
  engines: 1,
  seats: 5
}
Note that it is important to use the new keyword when calling a constructor. This is how Javascript knows to create a new object and that all the references to this inside the constructor should be referring to this new object.

Now, once the myCar instance is created it can be used like any other object and can have its properties accessed and modified the same way you would usually. For example:

myCar.turboType = "twin";

Our myCar variable now has a property turboType with a value of "twin".

In the editor, use the Car constructor to create a new instance and assign it to myCar.

Then give myCar a nickname property with a string value.
*/

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var myCar = new Car();
myCar.nickname = "Christine";
console.log(myCar.nickname);


// Map 220

/*
Make Unique Objects by Passing Parameters to our Constructor
The constructor we have is great, but what if we don't always want to create the same object?

To solve this we can add parameters to our constructor. We do this like the following example:

var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
Now we can pass in arguments when we call our constructor.

var myCar = new Car(6, 3, 1);

This code will create an object that uses the arguments we passed in and looks like:

{
  wheels: 6,
  seats: 3,
  engines: 1
}
Now give it a try yourself! Alter the Car constructor to use parameters to assign values to the wheels, seats, and engines properties.

Then call your new constructor with three number arguments and assign it to myCar to see it in action.
*/

var Car = function(wheels, seats, engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
var myCar = new Car(9, 4, 3);
console.log("You car has " + myCar.wheels + " wheels, " + myCar.seats + " seats, and " + myCar.engines + " engines");


// Map 221

/*
Objects have their own attributes, called properties, and their own functions, called methods.

In the previous challenges, we used the this keyword to reference public properties of the current object.

We can also create private properties and private methods, which aren't accessible from outside the object.

To do this, we create the variable inside the constructor using the var keyword we're familiar with, instead of creating it as a property of this.

This is useful for when we need to store information about an object but we want to control how it is used by outside code.

For example, what if we want to store the speed our car is traveling at but we only want outside code to be able to modify it by accelerating or decelerating, so the speed changes in a controlled way?

In the editor you can see an example of a Car constructor that implements this pattern.

Now try it yourself! Modify the Bike constructor to have a private property called gear and two public methods called getGear and setGear to get and set that value.

Further explanation on this keyword

*/


var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.
  var gear = 3;

  this.setGear = function(change){
    gear = change;
  }

  this.getGear =function(){
    return gear;
  }
};

var myCar = new Car();
console.log(myCar);
var myBike = new Bike();
console.log(myBike.setGear(10));
console.log(myBike.getGear());

// Map 22 

/*
Iterate over Arrays with map

The map method is a convenient way to iterate through arrays. Here's an example usage:

var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;
});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]
The map method will iterate through every element of the array, creating a new array with values that have been modified by the callback function, and return it. Note that it does not modify the original array.

In our example the callback only uses the value of the array element (the val argument) but your callback can also include arguments for the index and array being acted on.


*/

//Use the map function to add 3 to every value in the variable oldArray, and save the results into variable newArray. oldArray should not change.

var oldArray = [1,2,3,4,5];

// Only change code below this line.
var newArray = oldArray.map(function(num){
  return num + 3;
});

console.log(newArray);

// Map 223

/*
Condense arrays with reduce
The array method reduce is used to iterate through an array and condense it into one value.

To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).

The accumulator is like a total that reduce keeps track of after each operation. The current value is just the next element in the array you're iterating through.

reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element.

Here is an example of reduce being used to subtract all the values of an array:

var singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal - currentVal;
}, 0);

*/

// Use the reduce method to sum all the values in array and assign it to singleVal.

var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal = array.reduce(function(previousVal, currentVal){
  return previousVal + currentVal;
});
console.log(singleVal);

// Map 224

/*
Filter Arrays with filter
The filter method is used to iterate through an array and filter out elements where a given condition is not true.

filter is passed a callback function which takes the current value (we've called that val) as an argument.

Any array element for which the callback returns true will be kept and elements that return false will be filtered out.

The following code is an example of using filter to remove array elements that are equal to five:

Note: We omit the second and third arguments since we only need the value

array = array.filter(function(val) {
  return val !== 5;
});
*/

// Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.

var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function(val){
  return val < 6;
});

console.log(newArray);


// Map 225

/*
Sort Arrays with sort
You can use the method sort to easily sort the values in an array alphabetically or numerically.

Unlike the previous array methods we have been looking at, sort actually alters the array in place. However, it also returns this sorted array.

sort can be passed a compare function as a callback. The compare function should return a negative number if a should be before b, a positive number if a should be after b, or 0 if they are equal.

If no compare (callback) function is passed in, it will convert the values to strings and sort alphabetically.

Here is an example of using sort with a compare function that will sort the elements from smallest to largest number:

var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;
});
Use sort to sort array from largest to smallest.

Further explanation on the .sort() method can be found here.
*/

var array = [1, 12, 21, 2];
console.log(array);
// Only change code below this line.

array.sort(function(a, b) {
  return b - a;
});

console.log(array);

// Map 226

/*
Reverse Arrays with reverse
You can use the reverse method to reverse the elements of an array.

reverse is another array method that alters the array in place, but it also returns the reversed array.

var myArray = [1, 2, 3];
myArray.reverse();
returns [3, 2, 1]

Use reverse to reverse the array variable and assign it to newArray.
*/

var array = [1,2,3,4,5,6,7];
var newArray = [];

// Only change code below this line.

newArray = array;


// Map 227

/*
Concatenate Arrays with concat
concat can be used to merge the contents of two arrays into one.

concat takes an array as an argument and returns a new array with the elements of this array concatenated onto the end.

Here is an example of concat being used to concatenate otherArray onto the end of oldArray:

newArray = oldArray.concat(otherArray);

Use .concat() to concatenate concatMe onto the end of oldArray and assign it to newArray.
*/


var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

// Only change code below this line.

newArray = oldArray.concat(concatMe);
console.log(newArray);


// Map 228

/*
Split Strings with split
You can use the split method to split a string into an array.

split uses the argument you pass in as a delimiter to determine which points the string should be split at.

Here is an example of split being used to split a string at every s character:

var array = string.split('s');

Use split to create an array of words from string and assign it to array.
*/

var string = "Split me into an array";
var array = [];

// Only change code below this line.

array = string.split(" ");
console.log(array);

// Map 229

/*
Join Strings with join
We can use the join method to join each element of an array into a string separated by whatever delimiter you provide as an argument.

The following is an example of using join to join all of the elements of an array into a string with all the elements separated by word and:

var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad); // "Celery and Radish and Carrot and Potato" 
Use the join method to create a string from joinMe with spaces in between each element and assign it to joinedString.
*/


var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

// Only change code below this line.

joinedString = joinMe.join(" ");
document.write(joinedString);
