// Assignment code here
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var length = "";
var number2;
var special2;
var lowerCase2;
var upperCase2;

function generatePassword () {
  var length = prompt("Please input in length of password between 8 and 128 characters long");
  while (length <= 7 && length >= 129) {
    alert("Sorry, password is not within boundaries");
    var length = prompt("Please input in length of password between 8 and 128 characters long");
  }

  number2 = confirm("Do you wish to include numbers in your password?");
  special2 = confirm("Do you wish to include special characters in your password?");
  lowerCase2 = confirm("Do you wish to have lower-case letters in your password?");
  upperCase2 = confirm("Do you wish to have upper-case letters in your password?");

  while(number2 === false && special2 === false && lowerCase2 === false && upperCase2 === false) {
    alert("Error: Criteria not met, try again");
    number2 = confirm("Do you wish to include numbers in your password?");
    special2 = confirm("Do you wish to include special characters in your password?");
    lowerCase2 = confirm("Do you wish to have lower-case letters in your password?");
    upperCase2 = confirm("Do you wish to have upper-case letters in your password?"); 
  }
  
  var passwordText = []
    if (number2) {
    passwordText = passwordText.concat(number)
    }
  
    if (special2) {
      passwordText = passwordText.concat(special)
    }
      
    if (lowerCase2) {
      passwordText = passwordText.concat(lowerCase)
    }

    if (upperCase2) {
      passwordText = passwordText.concat(upperCase)
    }

      console.log(passwordText)

      var randomPassword = ""
      
      for (var i = 0; i < length; i++) {
        randomPassword = randomPassword + passwordText[Math.floor(Math.random() * passwordText.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
