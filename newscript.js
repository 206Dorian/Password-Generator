// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function generatePassword() {
    var userInput = window.prompt("How many characters would you like your password to be?")
    console.log(userInput)

    var passwordLength = parseInt(userInput)

    //if (isNaN(passwordLength)) {
     //window.alert("Not a Number")

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("password must be between 8 -128")
        return
    }

    var wantsAlphaUpper = window.confirm("would you like to use Uppercase letters?");
    console.log(wantsAlphaUpper)

    var wantsAlphaLower = window.confirm("would you like to use Lowercase letters?");
    console.log(wantsAlphaLower)

    var wantsNumbers = window.confirm("would you like to use Numbers?");
    console.log(wantsNumbers)

    var wantsSpecChar = window.confirm("would you like to use Special Characters?");
    console.log(wantsSpecChar)


    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    var specChar = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "="]

    var pickedVar = [];


    //All 4 selected
    if (wantsAlphaUpper && wantsAlphaLower && wantsNumbers && wantsSpecChar) {
        pickedVar = pickedVar.concat(alphaUpper, alphaLower, numbers, specChar)
    }


    //All 3 selected
    else if (wantsAlphaLower && wantsNumbers && wantsSpecChar) {
        pickedVar = pickedVar.concat(alphaLower, numbers, specChar)
    }

    else if (wantsAlphaUpper && wantsNumbers && wantsSpecChar) {
        pickedVar = pickedVar.concat(alphaUpper, numbers, specChar)
    }

    else if (wantsAlphaUpper && wantsAlphaLower && wantsSpecChar) {
        pickedVar = pickedVar.concat(alphaUpper, alphaLower, specChar)
    }

    else if (wantsAlphaUpper && wantsAlphaLower && wantsNumbers) {
        pickedVar = pickedVar.concat(alphaUpper, alphaLower, numbers)
    }


    //All 2 selected
    else if (wantsAlphaUpper && wantsAlphaLower) {
        pickedVar = pickedVar.concat(alphaUpper, alphaLower)
    }

    else if (wantsAlphaUpper && wantsNumbers) {
        pickedVar = pickedVar.concat(alphaUpper, numbers)
    }

    else if (wantsAlphaUpper && wantsSpecChar) {
        pickedVar = pickedVar.concat(alphaUpper, specChar)
    }

    else if (wantsAlphaLower && wantsNumbers) {
        pickedVar = pickedVar.concat(alphaLower, numbers)
    }

    else if (wantsAlphaLower && wantsSpecChar) {
        pickedVar = pickedVar.concat(alphaLower, specChar)
    }

    else if (wantsNumbers && wantsSpecChar) {
        pickedVar = pickedVar.concat(numbers, specChar)
    }

    //all 1's selected

    else if (wantsAlphaUpper) {
        pickedVar = pickedVar.concat(alphaUpper)
    }

    else if (wantsAlphaLower) {
        pickedVar = pickedVar.concat(alphaLower)
    }

    else if (wantsNumbers) {
        pickedVar = pickedVar.concat(numbers)
    }

    else if (wantsSpecChar) {
        pickedVar = pickedVar.concat(specChar)
    }
    else {
        window.alert("Try again")
        return
    }
    console.log(pickedVar)

    var password = []

    for (var i = 0; i < passwordLength; i++) {
    var choices = Math.floor(Math.random() * pickedVar.length);
    password += pickedVar[choices];
 }
    return password;

}

function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);