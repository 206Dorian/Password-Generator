// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log ("Hey!")

var alphaLower = "abcdefghijklmnopqrstuvwxyz"
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*+=" 

var options = [alphaLower, alphaUpper, numbers, symbols];

prompt

window.confirm

//Prompt the user for the password criteria
//password lenght 8 to 128
//lowercase, uppercase, numbers, special char 

// Validate the input  input validation
//Generate password base don criteria


//display generated password on page
  return "generated password will go here!"
}
// Write password to the #password input
function writePassword() {

  /*Define a generate password function*/
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }*/
