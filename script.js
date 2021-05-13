// number of characters user requests for password from lengthInput prompt window that returns a number
var length = "";

// password parameters as selected by user from varInput conformation windows that return booleans 
var lower = "";
var upper = "";
var number = "";
var symbol = "";

// number of true (affirmative) responses to the varInput confirmation windows
var count = "";

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

/*
arrays of randomly generated characters to be randomly combined
*/
/*
initialCharacterReturn are the single characters returned from each individual array list when it's corresponding character paramter is selected from varInput confirmation window prompts
*/
/*
remainderCharacterReturn is an array of random characters generated from all Character array lists user selects for use from confirmation window prompts
*/
var initialCharacterReturn = [];
var remainderCharacterReturn = [];







// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
