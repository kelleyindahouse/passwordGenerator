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
  // Container for generated password
  let userPassword = ""

  // Prompts user for desired password length
  let userLength = prompt("Please enter a number for how long you'd like your password to be. (Min: 8, Max: 128)");

  if (userLength < 8 || userLength > 128 || userLength === NaN) {
    alert("Please enter a number that is greater than 7 and less than 129.")
  }

  passLength = parseInt(userLength);
  

  // Prompts user to include uppercase letters or not
  let uppercase = prompt("Would you like uppercase letters in your password? (y or n)");
  // Prompts user to include lowercase letters or not
  let lowercase = prompt("Would you like lowercase letters in your password? (y or n)");
  // Prompts user to include numbers or not
  let numbers = prompt("Would you like numbers in your password? (y or n)");
  // Prompts user to include symbols or not
  let symbols = prompt("Would you like symbols in your password? (y or n)");

  for (let i = 0; i <= passLength; i++) {
    if (uppercase === 'y') {
      userPassword += randomUpper()
    }
    if (lowercase === 'y') {
      userPassword += randomLower()
    }
    if (numbers === 'y') {
      userPassword += randomNumber()
    }
    if (symbols === 'y') {
      userPassword += randomSymbol()
    }
  }
  // Return generated password set to user submitted password length
  document.getElementById('password').innerHTML = userPassword.substr(0, passLength);

})
