// Map 232: took 6 minutes
function reverseString(str) {
  var array = [];
  array = str.split("");
  array.reverse();
  str = array.join('');
  return str;
}
var reversed = reverseString("hello")
console.log(reversed);


// Map 233: took 6 minutes

/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arithmetic Operators
*/

function factorialize(num) {
  var n = 0;
  var factorial = 1;
  while (n < num){
    factorial *= num;
    num--;
  }
  return factorial;
}

console.log(factorialize(5));


// Map 233: it took 23 minutes

/*
Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.replace()
String.prototype.toLowerCase()
*/


function palindrome(str) {
  // strip string of all non-alphanumeric characters
  var expression = /[^0-9a-z]/gi;
  var strForward = str.replace(expression, '');
  // Lowercase
  strForward = strForward.toLowerCase();
  // Split to array
  var strForwardArray = strForward.split('');
  // reverse the array
  var strBackwardArray = strForwardArray.reverse();
  // join array to string in reverse order
  var strBackward = strBackwardArray.join('');
  // if string is palindrome
  if (strForward === strBackward){
    // return true
    // alert('The string ' + str + ' is a palindrome');   
    return true; 
  } else {
    // else
      // return false
    // alert('The string ' + str + ' is NOT a palindrome');    
    return false;
  }
}



palindrome("2_A3*3#A2a");



// Map 234: it took 13 minutes

/*
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length
*/


function findLongestWord(str) {
  var wordsArray = [];
  // Split the string into an array, split by spaces
  wordsArray = str.split(" ");
  var n = 0;
  var finalWord = '';
  
  // loop through each word
  while (n < wordsArray.length){
    // put current word in a variable
    currentWord = wordsArray[n];
    // test to see if the next word is as long as current word
    if (finalWord.length < currentWord.length ){
      // if so, assign current variable the new word
      finalWord = currentWord;
    }
    // else, go on to the next word
    n++;
  }
  // return the length of current word
  return finalWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

