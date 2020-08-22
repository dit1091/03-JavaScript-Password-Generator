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

// Return a string after click
function generatePassword() {

    // Prompt user for length of the password
    var passwordLength = parseInt(prompt("Enter the length of your password between 8 and 128 characters"));

    // Sets input variable to be at least 8 characters and no more than 128 characters
    var minChar = 8;
    var maxChar = 128;

    // If the password is not a number, an alert pops up to warn the user, who must click the button again

    if (isNaN(passwordLength)) {
        alert("You must choose a number between 8 and 128");
    }
    // Prompts an alert to user if user inputs less than 8 characters
     if (passwordLength < minChar) {
        alert("Password must be at least 8 characters");
        passwordLength = 0;
    }

        // Prompts an alert to user if user inputs more than 128 characters
     else if (passwordLength > maxChar) {
            alert("Password must be less than 128 characters");
            passwordLength = 0;
        }
    // Prompts user to confirm at  least one required character type
    else {
        var useLowerCase = confirm("Click OK to use lowercase characters");
        var useUpperCase = confirm("Click OK to use uppercase characters");
        var useNumeric = confirm("Click OK to use numberic characters");
        var useSpecialChar = confirm("Click OK to use special characters");
        }

    // Prompts alert if user does not confirm at least one character type requirement
    if (useLowerCase === false && useUpperCase === false && useNumeric === false && useSpecialChar === false) {
        alert("At least ONE type of character is required to generate your password");
        }
        else {

            // Array of special characters to be included in password
            var specialCharacters = ["@", "%", "+", "\\", "/","'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."]; 

            // Array of numeric characters to be included in password
            var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

            // Array of lowercase characters to be included in password
            var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

            // Array of uppercase characters to be included in password
            var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

            // Sets up variables that will store the string of characters to be used for password generation
            var characterString = ""
            var guaranteedCharacters = []
        
            // Sets up function that will create the random string
            function randomNum(a) {
                var number = Math.floor(Math.random() * a.length);
                return number;
            }

            // Declares function that will take the string created from the true user input and turns it into it into characterString as one string
            function pushChar(x, y) {
                if (y) {
                    characterString += (x);
                    guaranteedCharacters.push(x[randomNum(x)]);
                }
             }
        
            // Function then runs through each of the variables created from line 41 to 67
            pushChar(lowerCasedCharacters, useLowerCase);
            pushChar(upperCasedCharacters, useUpperCase);
            pushChar(numericCharacters, useNumeric);
            pushChar(specialCharacters, useSpecialChar);
            }
  
        // Prompts loop will randomly choose characters from characterString and placing it into passwordString until finished the number of characters collected matches the value assigned to passwordLength
        for (var i = 0, passwordString = ""; i < passwordLength; i++) {
            passwordString += characterString[randomNum(characterString)];
        }

        // Prompts passwordString to convert from a string into an array called passwordArray
        var passwordArray = passwordStr.split("");

        //Runs loop that will swap the index of passwordArray with the index of guaranteedCharacter so that any 'True Confirms' for a character will be included in the final password
        for (var i = 0; i < guaranteedCharacters.length; i++) {
            passwordArray[i] = guaranteedCharacters[i];
        }

        //Converts the array created on line 100  back into a single string called finalPassword
        var finalPassword = passwordArray.join('');

        //Generates the final password
        return finalPassword; 
    }