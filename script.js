
// Assignment Code
var generateBtn = document.querySelector("#generate");
var charactorLength = 8
var upperCase = true
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m",'n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialChar = ['#','$','%','&','*','+','-','=','?','@','_','~'];
var numbers = ['1','2','3','4','5','6','7','8','9',]
var newPassword = []




// Write password to the #password input
function writePassword() {
  console.log ("writing password");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword()  {
  console.log ("generating password");
for (let index = 0; index < charactorLength; index++) {
  var randomNumber = Math.floor(Math.random() * (64 - 0) + 0);
  newPassword.push (charactors[randomNumber])
console.log (newPassword)
}
if (upperCase == true){
var randomNumber = Math.floor(Math.random() * (charactorLength - 1) + 0)
newPassword[randomNumber] = newPassword[randomNumber];
console.log (newPassword)
}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);