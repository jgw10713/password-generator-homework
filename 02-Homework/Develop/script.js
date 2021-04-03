// Assignment Code
var generateBtn = document.querySelector("#generate");


  
function generatePassword() {
    var userPassword = "";
    var newPassword = "";
 
    //possible character strings
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var number = "0123456789";

    //promt that asks for a number
    var x = (prompt("How many characters would you like your password to be?"));
    var userLength = parseInt(x);

    //next three ifs ask user to press Generate Password again if they do not enter a valid number
    if (!userLength) {
      alert("Your answer must contain a number, please press Generate Password again!")
      return;
    }

    if (userLength < 8) {
      alert("Your password must be at lease 8 characters long, please press Generate Password again!")
      return;
    }

    if (userLength > 128) {
      alert("Your password must be less than 128 characters long, please press Generate Password again!")
      return;
    }


    //gives user a yes or no on lower case
    var userLower = confirm("Would you like to use lower case letters?");

    //if user chooses yes, the lower case string is added to newPassword variable
    if (userLower === true) {
      newPassword += lower;
    }
  
    //gives user a yes or no on upper case
    userUpper = confirm("Would you like to use upper case letters?");

    //if user chooses yes, the upper case string is added to newPassword variable
    if (userUpper === true) {
      newPassword += upper;
    }

    //gives user a yes or no on numbers
    userNumber = confirm("Would you like to use numbers?");

    //if user chooses yes, the numbers string is added to newPassword variable
    if (userNumber === true) {
      newPassword += number;
    }

    //gives user yes or no on special character
    userSpecial = confirm("Would you like to use special characters?");  

    //if user chooses yes, the special characters string iss added to newPassword variable
    if (userSpecial === true) {
      newPassword += special;
    }

    //loop the number given for userLength
    //takes the generated newPassword with appropriate strings (based on user input)
    //makes password equal to this and spits out a new password
    //took me a while but with a lot of help from google i was able to get the for loop to work the way i wanted
    //(still really fuzzy on for loops and dont really understand how i got it to work)
    for (var i = 0; i < userLength; i++) {
      var randomPassword = Math.floor(Math.random() * newPassword.length);
      userPassword += newPassword[randomPassword];
    }
  
    passwordText = userPassword
    
    //shows what is being done in console
  
    console.log(newPassword);
    console.log(userPassword);
    console.log(userLength);
    console.log(passwordText);


    //returns generated password to html
    return passwordText;
    
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
