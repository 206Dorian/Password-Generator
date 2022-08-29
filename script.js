// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min,max){}

function generatePassword(passwordLength){
  console.log ("Hey!")

  var userInput = window.prompt("How long do you want your password to be?")

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)){
  window.alert("Not a Number")
  return
}

if (passwordLength < 8 || passwordLength > 128){
  window.alert("password must be between 8 -128")
  return
}
var wantsAlphaUpper = window.confirm("would you like to use Uppercase letters?")
console.log("Yes Please Uppers")

var wantsAlphaLower = window.confirm("would you like to use Lowercase letters?")
console.log("Yes Please Lowers")

var wantsNumbers = window.confirm("would you like to use Numbers?")
console.log("Yes Please Numbers")

var wantsSpecChar = window.confirm("would you like to use Special Characters?")
console.log("Yes Please Special")


var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specChar = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "="]

var optionsCart = [alphaLower + alphaUpper + numbers + specChar];

if (wantsAlphaUpper === true){
optionsCart.push(alphaUpper)
}

if (wantsAlphaLower === true){
  optionsCart.push(alphaLower)
}

if (wantsNumbers === true){
  optionsCart.push(numbers)
}

if (wantsSpecChar === true){
optionsCart.push(specChar)
}

console.log(optionsCart)

var generatedPassword = ""


for (var i = 0; i <= passwordLength; i++) {
var randomItem = optionsCart[randomInt(0, optionscart.length -1)]
generatePassword

  //var randomNumber = Math.floor(Math.random() * chars.length);
 // password += chars.substring(randomNumber, randomNumber +1);
 //}


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






