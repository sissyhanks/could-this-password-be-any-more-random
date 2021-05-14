// Assignment Code
var generateBtn = document.querySelector("#generate");

// number of true (affirmative) responses to the criteria confirmation windows
var count = 0;

// arrays built from single characters returned from affirmative criteria confirmation and all of the characters included in affirmative criteria choices
var lockedCriteriaCharacters = [];
var allCriteriaCharacters = [];

// number of characters user requests for password from prompt window that returns a number
let lengthEntry = window.prompt("How many characters long would you like your password to be? Please enter a number between 8 and 128.");

var length = lengthEntry;

// while condition runs until a number between 8 - 128 is returned
if (length >= 8 && length <= 128){
  console.log("length works");
}
else {
  while (!(length >= 8 && length <= 128)){
    length = Number(window.prompt("You must enter a number between 8 and 128 to continue.", ""));
  }
}

// password character type criteria confirmation windows
let lowerChoice = window.confirm("LOWERCASE LETTERS \nWould you like your password to include lowercase letters? \nClick OK to include lower case letters in your password. \nClick Cancel to create a password without lower case letters.");

let upperChoice = window.confirm("UPPERCASE LETTERS \nWould you like your password to include uppercase letters? \nClick OK to include uppercase letters in your password. \nClick Cancel to create a password without uppercase letters.");

let numberChoice = window.confirm("NUMBERS \nWould you like your password to include numbers? \nClick OK to include numbers in your password. \nClick Cancel to create a password without numbers.");

let specialChoice = window.confirm("SPECIAL CHARACTERS \nWould you like your password to include special characters? \nClick OK to include special characters in your password. \nClick Cancel to create a password without special characters.");

// objects corresponding to individual character type criteria choices 
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
	characters: ["!", "#", "$", "%", "&", "'", "", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",  "\"" ],
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

// calls all object functions
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

// test outputs
console.log(length);
console.log(count);
console.log(lockedCriteriaCharacters);
console.log(allCriteriaCharacters);

// //       window.alert("Please chose at least one character type for your " + length + " character password by clicking OK when you see the type(s) of characters you would like included in your password from the pop up boxes to follow.");


// /*
// -------------------------------------------------------------------------
// ------------------------- TO DO LIST ------------------------
// -------------------------------------------------------------------------
// TODO validate criteria choice ::::: at least one affirmative choice required 
// /*
// TODO random generation
//   ** find remainderLength by subtracting count from length 
//   ** generate remainderLength number of random characters from paramterCharacters array
  
//   ** randomly combine initialCharacterReturn and remainderCharacterReturn arrays into passwordReturn

//   ** write passwordReturn to #password text box
// */


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
