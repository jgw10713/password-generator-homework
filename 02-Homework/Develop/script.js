// Assignment Code
var generateBtn = document.querySelector("#generate");


// next four functions generate random characters in their field
function lowerCase() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)];
  
}

function upperCase() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)];
  
}

function specialChar() {
  var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return special[Math.floor(Math.random() * special.length)];
  
}

function numberChar() {
  var number = "0123456789";
  return number[Math.floor(Math.random() * number.length)];
  
}

console.log(numberChar());



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
