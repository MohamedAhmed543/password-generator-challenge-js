// Array of special characters to be included in password
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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
  'z'
]
  //Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
  'Z'
];

// Function to prompt the user for password options
function getPasswordOptions() {
  var userLength = parseInt(prompt('Enter the length of characters for the password (between 8 and 128):'));
  
  if (isNaN(userLength) || userLength < 8 || userLength > 128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return null;
  }

  var includeLowercase = confirm('Do you want to include lowercase letters?');
  var includeUppercase = confirm('Do you want to include uppercase letters?');
  var includeSpecialCharacters = confirm('Do you want to include special characters?');

  if (!includeLowercase && !includeUppercase && !includeSpecialCharacters) {
    alert('At least one character type must be selected.');
    return null;
  }

  return {
    length: userLength,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeSpecialCharacters: includeSpecialCharacters
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate a password with user input
function generatePassword() {
  var options = getPasswordOptions();
  
  if (!options) {
    return ''; // User input was invalid; return an empty string
  }

  var availableCharacters = [];
  var result = '';

  if (options.includeLowercase) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUppercase) {
    availableCharacters = availableCharacters.concat(upperCasedCharacters);
  }
  if (options.includeSpecialCharacters) {
    availableCharacters = availableCharacters.concat(specialCharacters);
  }
  availableCharacters = availableCharacters.concat(numericCharacters);

  for (var i = 0; i < options.length; i++) {
    result += getRandom(availableCharacters);
  }

  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write the password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add an event listener to the generate button
generateBtn.addEventListener('click', writePassword);
