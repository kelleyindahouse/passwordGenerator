// {/* <div class="settings">
//   <div class="setting">
//     <label>Password length</label>
//     <input type="number" id="length" min='4' max='20' value='20' />
//   </div>
//   <div class="setting">
//     <label>Include uppercase letters</label>
//     <input type="checkbox" id="uppercase" checked />
//   </div>
//   <div class="setting">
//     <label>Include lowercase letters</label>
//     <input type="checkbox" id="lowercase" checked />
//   </div>
//   <div class="setting">
//     <label>Include numbers</label>
//     <input type="checkbox" id="numbers" checked />
//   </div>
//   <div class="setting">
//     <label>Include symbols</label>
//     <input type="checkbox" id="symbols" checked />
//   </div>
// </div> */}

// DOM elements
const result = document.getElementById('result');

const randomFunctions = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
}

// function to generate random lowercase letter
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26)) + 97);
}
// function to generate random uppercase letters
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26)) + 65);
}
// function to generate random numbers
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10)) + 48);
}
// function to generate random symbols
function randomSymbol() {
  const symbols = " !#$%&'() * +,-./: ;<=>?@[\]^ _`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

document.getElementById('generate').addEventListener('click', () => {

})
