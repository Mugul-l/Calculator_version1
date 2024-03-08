// Get references to HTML elements
const resultBar = document.getElementById('result-bar');
const buttons = document.querySelectorAll('#buttons button');
let currentResult = '0';

// Attach click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => handleButtonClick(button.textContent));
});

// Delete 
function deleteLastDigit() {
  currentResult = currentResult.slice(0, -1);
}
//reset
function resetCalculator() {
  currentResult = '0';
}
//equals
function evaluateExpression() {
  try {
    currentResult = eval(currentResult).toString();
  } catch (error) {
    currentResult = currentResult;
  }
}
//append
function appendToResult(value) {
  currentResult = currentResult === '0' ? value : currentResult + value;
}
//update res
function updateResultBar() {
  resultBar.textContent = currentResult;
}

function handleButtonClick(value) {
  if (value === 'DEL') {
    deleteLastDigit();
  } else if (value === 'Reset') {
    resetCalculator();
  } else if (value === '=') {
    evaluateExpression();
  } else {
    appendToResult(value);
  }

  updateResultBar();
}