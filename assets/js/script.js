var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];


var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var characters = [];
var finalPassword = [];
var guaranteed = [];




function generatePassword() {
  var promptLength = window.prompt("How many characters would you like your password to contain?");
    if (promptLength<8 || promptLength > 128) {
     window.alert("Password must be more then 8 characters and less then 128.")
     return;
  }
  var promptNumeric = window.confirm("Click okay to include numeric characters.");
  var promptLowerCase = window.confirm("Click okay to include lowercase characters.");
  var promptUpperCase = window.confirm("Click okay to include uppercase characters.");
  var promptCharacters = window.confirm("Click okay to include special characters.");
    if (promptNumeric === false && promptLowerCase === false && promptUpperCase === false && promptCharacters === false) {
      window.alert("Must chose atleast 1 type.")

    }
    if (promptNumeric === true) {
      characters= characters.concat (numeric)
      guaranteed.push(random(numeric))
      console.log(guaranteed);
    }
    if (promptLowerCase === true) {
      characters= characters.concat (lowerCase)
      guaranteed.push(random(lowerCase))
      console.log(guaranteed);
    }
    if (promptUpperCase === true) {
      characters= characters.concat (upperCase)
      guaranteed.push(random(upperCase))
      console.log(guaranteed);
    }
    if (promptCharacters === true) {
      characters= characters.concat (specialCharacters)
      guaranteed.push(random(specialCharacters))
      console.log(characters);
    }

    for (let i = 0; i < promptLength; i++) {
      const element = promptLength[i];
      var possibleChar = random(characters)
      finalPassword.push(possibleChar)
    }

    for (let i = 0; i < guaranteed.length; i++) {
      const element = guaranteed[i];
      finalPassword[i]=element
    }
    return finalPassword.join("")
}


function random(array) {
  var index = Math.floor(Math.random()*array.length)
  var randomCharacter = array[index]
  return randomCharacter;
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