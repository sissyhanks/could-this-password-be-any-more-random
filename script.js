// Assignment Code
var generateBtn = document.querySelector("#generate");

/*
arrays of characters to randomly grab from 
I used the method Array.from(); to generate an array from strings of characters that i then copied from the console log
var string = "string of characters to turn into an array";
console.log(Array.from(string));
*/
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",  "\"" ];


// array of each single character returned after each true paramter choice
var initialCharacterReturn = [];

// array of all values from character arrays that correspond to true paramter choices
var remainderCharacterReturn = [];

// random array of remainderCharacterReturn items that is length.length - count characters long
var randomRemainderReturn = [];

// random combination of initialCharacterReturn and randomRemainderReturn array items
var passwordReturn =[]

// number of characters user requests for password from prompt window that returns a number
var length =  Number(window.prompt("How many characters long would you like your password to be? Please enter a number between 8 and 128.", ""));

if (length >= 8 && length <= 128)
      {
        console.log("length works");
      }
else {
  while (!(length >= 8 && length <= 128))
    {
      length = Number(window.prompt("You must enter a number between 8 and 128 to continue.", ""));
    }
}

console.log(length);

var initialLowerCharacter = lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)];

// number of true (affirmative) responses to the varInput confirmation windows
var count = 0;

/* 
password parameters as selected by user from varInput conformation windows that return booleans 
*/
var lower = Boolean(window.confirm("LOWERCASE LETTERS \nWould you like your password to include lowercase letters? \nClick OK to include lower case letters in your password. \nClick Cancel to create a password without lower case letters."));

if (lower === true){
  var initialLowerCharacter = lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)];
  (count++); console.log(initialLowerCharacter); initialCharacterReturn.push(initialLowerCharacter);
  remainderCharacterReturn = lowerCharacters.concat(remainderCharacterReturn);
}


var upper = Boolean(window.confirm("UPPERCASE LETTERS \nWould you like your password to include uppercase letters? \nClick OK to include uppercase letters in your password. \nClick Cancel to create a password without uppercase letters."));

if (upper === true){
  var initialUpperCharacter = upperCharacters[Math.floor(Math.random() * upperCharacters.length)];
  (count++); console.log(initialUpperCharacter); initialCharacterReturn.push(initialUpperCharacter);
  remainderCharacterReturn = upperCharacters.concat(remainderCharacterReturn); 
}


var number = Boolean(window.confirm("NUMBERS \nWould you like your password to include numbers? \nClick OK to include numbers in your password. \nClick Cancel to create a password without numbers."));

if (number === true){
  var initialNumberCharacter = numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
  (count++); console.log(initialNumberCharacter); initialCharacterReturn.push(initialNumberCharacter); remainderCharacterReturn = numberCharacters.concat(remainderCharacterReturn);
}


var symbol = Boolean(window.confirm("SPECIAL CHARACTERS \nWould you like your password to include special characters? \nClick OK to include special characters in your password. \nClick Cancel to create a password without special characters."));

if (symbol === true){
  var initialSpecialCharacter = specialCharacters[Math.floor(Math.random()) * specialCharacters.length]; (count++); console.log(initialSpecialCharacter); initialCharacterReturn.push(initialSpecialCharacter); remainderCharacterReturn = specialCharacters.concat(remainderCharacterReturn);
}


console.log(remainderCharacterReturn);
console.log(initialCharacterReturn);
console.log(count);






/*
-------------------------------------------------------------------------
------------------------- OPERATIONAL CODE BELOW ------------------------
-------------------------------------------------------------------------

*/

// DONE create prompt and confirmation windows to gather password parameters from user


/*
TODO for each confirmation prompt
  ** count true returns
  ** for each true return generate 1 random character from corresponding character list and add it to the initialCharacterReturn array
  ** generate paramterCharacters array (an array made up of all items from array lists corresponding to true returns)
  ** generate remainderCharacterReturn (an array made up of all items from array lists corresponding to true returns)
*/

/*
TODO random generation
  ** find remainderLength by subtracting count from length 
    ** generate remainderLength number of random characters from paramterCharacters array
  
    ** randomly combine initialCharacterReturn and remainderCharacterReturn arrays into passwordReturn

    ** write passwordReturn to #password text box
*/







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
