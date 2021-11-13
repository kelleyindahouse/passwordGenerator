// Object to contain declared functions
const randomFunctions = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
}

// function to generate random lowercase letter
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// function to generate random uppercase letters
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// function to generate random numbers
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// function to generate random symbols
function randomSymbol() {
  const symbols = " !#$%&'() * +,-./: ;<=>?@[\]^ _`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// When generate button is clicked
document.getElementById('generate').addEventListener('click', () => {
  // Prompts user for desired password length
  let passwordLength = prompt("Please enter a number for how long you'd like your password to be. (Min: 8, Max: 128)")
  passwordLength = parseInt(passwordLength)
  // Prompts user to include uppercase letters or not
  let uppercase = prompt("Would you like uppercase letters in your password? (y or n)")
  // Prompts user to include lowercase letters or not
  let lowercase = prompt("Would you like lowercase letters in your password? (y or n)")
  // Prompts user to include numbers or not
  let numbers = prompt("Would you like numbers in your password? (y or n)")
  // Prompts user to include symbols or not
  let symbols = prompt("Would you like symbols in your password? (y or n)")

  for (let i = 8; i <= passwordLength; i++) {
    
  }



})
