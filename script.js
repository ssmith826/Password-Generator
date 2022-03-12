var selectionsMade = [];
var charactersNeeded = [];
var finalResult = [];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T","U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "-","=", "+", ">", "<", "?"]

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  selectionsMade = [];
  charactersNeeded = [];
  finalResult = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


  // if (correctPrompts) {
  //   var newpassword = generatePassword();  
  //   passwordText.value = newpassword;
  // } else {
  //   passwordText.value = "";
  // }
}

function generatePassword(){
  var passwordLength = generatePrompts();
  for(var i = 0; i < passwordLength; i++){
    var randomIndex= Math.floor(Math.random() * selectionsMade.length)
    var finalPassword = selectionsMade[randomIndex];
    console.log(finalPassword);
    finalResult.push(finalPassword);
  }
  return finalResult.join("");
}

function generatePrompts(){
  charactersNeeded = [];
  var passwordLength = parseInt(prompt("Need a password? Please choose the number of characters needed in your password. You can choose from between 8 and 128 characters."))
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
  alert("Invalid input, please choose a range of characters from 8-128, numerical values only")
  return false;
}
    if (confirm("Do you want your password to contain lowercase letters?")){
    selectionsMade = selectionsMade.concat(lowerCase);
}
    if (confirm("Do you want your password to contain uppercase letters?")){
    selectionsMade = selectionsMade.concat(upperCase);
}
    if (confirm("Do you want your password to contain numbers?")){
    selectionsMade = selectionsMade.concat(numbers);
}
    if (confirm("Do you want your password to contain symbols?")){
    selectionsMade = selectionsMade.concat(symbols);    
}
  return passwordLength;
}
