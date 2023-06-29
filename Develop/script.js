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
  
  //what type of char?
  //special, number, upper, lower
  //window.confirm

  //use answers to make passwords
  //vars that include all possible chars
  //seperate vars for each type into array
  //literally type everything out

  //take all type of arrays user wants and concat into one -- loop
  //choose random chars from this new array
  //push into new array
  //var password turn array into string .toString()

  //return password
}