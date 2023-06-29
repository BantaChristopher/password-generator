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

function generatePassword() {
  
  //prompt how many chars?
  //var to store chars
  
  var passwordLength = window.prompt("How many characters would you like in your password?");
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid length or character! Please enter a number between 8 and 128.");
      var passwordLength = window.prompt("How many characters would you like in your password?");
    }
  
  //what type of char?
  //special, number, upper, lower
  //window.confirm
 
  var specialAnswer = window.confirm("Would you like to include special characters in your password?");
  var numberAnswer = window.confirm("Would you like to include numbers in your password?");
  var upperAnswer = window.confirm("Would you like to include uppercase characters in your password?");
  var lowerAnswer = window.confirm("Would you like to include lowercase characters in your password?");

  while (specialAnswer === false && numberAnswer === false && upperAnswer === false && lowerAnswer === false) {
    alert("Must select at least one character type! Try again")
    var specialAnswer = window.confirm("Would you like to include special characters in your password?");
    var numberAnswer = window.confirm("Would you like to include numbers in your password?");
    var upperAnswer = window.confirm("Would you like to include uppercase characters in your password?");
    var lowerAnswer = window.confirm("Would you like to include lowercase characters in your password?");
  }
  
  //use answers to make passwords
  //vars that include all possible chars
  //seperate vars for each type into array
  //literally type everything out
 
  var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  //take all type of arrays user wants and concat into one -- loop

  var chosenChars = []

  if (specialAnswer) {
    chosenChars = specialChar.concat(chosenChars)
  }

  if (numberAnswer) {
    chosenChars = numberChar.concat(chosenChars)
  }

  if (upperAnswer) {
    chosenChars = upperChar.concat(chosenChars)
  }
  
  if (lowerAnswer) {
    chosenChars = lowerChar.concat(chosenChars)
  }

  //choose random chars from this new array
  //push into new array
  //var password turn array into string .toString()
  
  var i = 0
  randomPass = []
  while (i < Number(passwordLength)) {
    var randomChar = chosenChars[Math.floor(Math.random() * chosenChars.length)];
    randomPass.push(randomChar);
    i++;
  }

  console.log(randomPass)
  var password = randomPass.join("").toString()

  return password
}