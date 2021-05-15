// Assignment Code
var generateBtn = document.querySelector("#generate");

// start code on click
function generatePassword() {
// length of password as declared by user in prompt window
var lengthEntry;

// // while condition runs until a number between 8 - 128 is entered into prompt window
  while (!(lengthEntry >= 8 && lengthEntry <= 128)){
    lengthEntry = Number(window.prompt("How many characters long would you like your password to be? Please enter a number between 8 and 128.", ""));
  }

// number of true (affirmative) responses to the criteria confirmation windows
var count = 0;

// password character type criteria variables to be declared by action confirmation windows
var needNumber;
var lowerChoice;
var upperChoice;
var numberChoice;
var specialChoice;

// arrays built from single characters returned from affirmative criteria confirmation and all of the characters included in affirmative criteria choices
var lockedCriteriaCharacters = [];
var lockedRemainderCharacters = [];
var allCriteriaCharacters = [];

// the number of characters needed after initial characters for each criteria returned
var remainderLength;

// popup confirmation windows for users to set password character criteria 
needNumber = window.alert("Please chose at least one character type for your " + lengthEntry + " character password by clicking OK when you see the type(s) of characters you would like included in your password from the pop up boxes to follow.");

lowerChoice = window.confirm("LOWERCASE LETTERS \nWould you like your password to include lowercase letters? \nClick OK to include lower case letters in your password. \nClick Cancel to create a password without lower case letters.");

upperChoice = window.confirm("UPPERCASE LETTERS \nWould you like your password to include uppercase letters? \nClick OK to include uppercase letters in your password. \nClick Cancel to create a password without uppercase letters.");

numberChoice = window.confirm("NUMBERS \nWould you like your password to include numbers? \nClick OK to include numbers in your password. \nClick Cancel to create a password without numbers.");

specialChoice = window.confirm("SPECIAL CHARACTERS \nWould you like your password to include special characters? \nClick OK to include special characters in your password. \nClick Cancel to create a password without special characters.");

// objects created based on password criteria options with 
// arrays of characters associated with the criteria 
// function to increase count of affirmative responses
// functions to pick an initial character of each type (if selected) and return to lockedCharacter array
// function to add full array of characters for given criteria to allCharacter array for further character retrieval

var lower ={
  criteria: lowerChoice,
	characters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	criteriaCharacter: [],

  increaseCount: function(){
    if (this.criteria === true){
      (count++);
    }
  },
  
  pickCriteriaCharacter: function(){
    if (this.criteria === true){
      this.criteriaCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
    }
  },
  
  lockInCriteriaCharacter: function(){
    if (this.criteria === true){
      lockedCriteriaCharacters.push(this.criteriaCharacter);
    }
  },
  
  assembleAllCriteriaCharacters: function(){
    if (this.criteria === true){
      allCriteriaCharacters = this.characters.concat(allCriteriaCharacters); 
    }
  }
}

var upper ={
	criteria : upperChoice,
	characters : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	criteriaCharacter : [],

  increaseCount: function(){
    if (this.criteria === true){
      (count++);
    }
  },
  
  pickCriteriaCharacter: function(){
    if (this.criteria === true){
      this.criteriaCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
    }
  },
  
  lockInCriteriaCharacter: function(){
    if (this.criteria === true){
      lockedCriteriaCharacters.push(this.criteriaCharacter);
    }
  },
  
  assembleAllCriteriaCharacters: function(){
    if (this.criteria === true){
      allCriteriaCharacters = this.characters.concat(allCriteriaCharacters); 
    }
  }
}

var number ={

	criteria: numberChoice,
	characters: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
	criteriaCharacter: [],


  increaseCount: function(){
    if (this.criteria === true){
      (count++);
    }
  },
  
  pickCriteriaCharacter: function(){
    if (this.criteria === true){
      this.criteriaCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
    }
  },
  
  lockInCriteriaCharacter: function(){
    if (this.criteria === true){
      lockedCriteriaCharacters.push(this.criteriaCharacter);
    }
  },
  
  assembleAllCriteriaCharacters: function(){
    if (this.criteria === true){
      allCriteriaCharacters = this.characters.concat(allCriteriaCharacters); 
    }
  }
}

var special ={
  
	criteria: specialChoice,
	characters: ["!", "#", "$", "%", "&", "'", "", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "\`", "{", "|", "}", "~",  "\"" ],
	criteriaCharacter : [],

  increaseCount: function(){
    if (this.criteria === true){
      (count++);
    }
  },
  
  pickCriteriaCharacter: function(){
    if (this.criteria === true){
      this.criteriaCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
    }
  },
  
  lockInCriteriaCharacter: function(){
    if (this.criteria === true){
      lockedCriteriaCharacters.push(this.criteriaCharacter);
    }
  },
  
  assembleAllCriteriaCharacters: function(){
    if (this.criteria === true){
      allCriteriaCharacters = this.characters.concat(allCriteriaCharacters); 
    }
  }
}

// calls all functions from objects
lower.increaseCount();
lower.pickCriteriaCharacter();
lower.lockInCriteriaCharacter();
lower.assembleAllCriteriaCharacters();

upper.increaseCount();
upper.pickCriteriaCharacter();
upper.lockInCriteriaCharacter();
upper.assembleAllCriteriaCharacters();

number.increaseCount();
number.pickCriteriaCharacter();
number.lockInCriteriaCharacter();
number.assembleAllCriteriaCharacters();

special.increaseCount();
special.pickCriteriaCharacter();
special.lockInCriteriaCharacter();
special.assembleAllCriteriaCharacters();

// calculates how many more characters to generate
remainderLength = lengthEntry - count;

// generates remaining needed password characters, adds them to lockedRemainderCharacters array, mixes that array with initially returned characters, and saves shuffled lits to passwordOut array
function randomCharacter() {
      lockedRemainderCharacters = lockedRemainderCharacters.concat(allCriteriaCharacters[Math.floor(Math.random() * allCriteriaCharacters.length)]);
    }
for (let i = 0; i < remainderLength; i++) {
  randomCharacter();
}
passwordOut = lockedRemainderCharacters.concat(lockedCriteriaCharacters);
passwordOut.sort(() => Math.random() - 0.5);

// test outputs
console.log(lengthEntry);
console.log(count);
console.log(lockedCriteriaCharacters);
console.log(allCriteriaCharacters);
console.log(remainderLength);
console.log(lockedRemainderCharacters);
console.log(passwordOut);
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  generatePassword();

  // removes commas from output array and writes to screen
  passwordText.value = passwordOut.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
