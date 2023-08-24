// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var ucstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lcstring = "abcdefghijklmnopqrstuvwxyz";
var numstring = "1234567890";
var spcstring = "!@#$%^&*()"; 
var passchar = "";

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Input the length the password should be", "Enter a number between 8-128");
  

  if (passwordLength > 7 && passwordLength < 129) {
    var upperCase = confirm("Would you like to include Uppercase letters?");
    var lowerCase = confirm("Would you like to include Lowercase letters?");
    var numeric = confirm("Would you like to include Numeric values?");
    var special = confirm("Would you like to include Special characters?");
  

    if (upperCase === false && lowerCase === false && numeric === false && special === false){
      alert("At least one parameter must be selected")
      writePassword();      
    } 
      if (upperCase === true){
        passchar = passchar.concat(ucstring);
      }

      if (lowerCase === true){
        passchar = passchar.concat(lcstring);
      }

      if (numeric === true){
        passchar = passchar.concat(numstring);
      }

      if (special === true){
        passchar = passchar.concat(spcstring);
      }


      for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * passchar.length);
        password += passchar.substring(randomNumber, randomNumber +1);
       }

      passwordText.value = password;

       console.log(passwordText);
    }



    
   else {
    alert("Password length not between 8 and 128")
    writePassword();
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
