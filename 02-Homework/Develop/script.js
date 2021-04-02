// Assignment Code
var generateBtn = document.querySelector("#generate");


  


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    function generatePassword() {
      var password = "";
      var newPassword = "";
     
      //possible character strings
      var lower = "abcdefghijklmnopqrstuvwxyz";
      var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var number = "0123456789";
  
      //promt that asks for a number(cant get this to work)
      var x = (prompt("How many characters would you like your password to be?"));
      var userLength = parseInt(x);
      
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
    
      //supposed to be a loop that loops the number given for userLength
      //takes the generated newPassword with appropriate strings (based on user input)
      //makes password equal to this and spits out a new password
      for (var i = 0; i < userLength; i++) {
      password = newPassword[Math.floor(Math.random() * newPassword.length)];
      }

      //problems I am having:
      //the user input does change the newPassword variable to have the correct string of character based on yes or no
      //I can see the chosen string in console.log, but the password in console.log is only one character
      //additionally, the text area is reading undefined
      
      console.log(newPassword);
      console.log(password);

    }

  }





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
