const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? 'Error' : a / b);
const percent = (a) => a / 100;
const changeOfSign = (a) => -a;

const operations = {
  '+': add,
  '-': subtract,
  '×': multiply,
  '÷': divide,
  '%': percent,
};

const calculations = document.querySelector('.functional-buttons');
const display = document.querySelector('.display');

let firstNumber = '';
let operator = '';
let expression = '';
let waitingForSecondNumber = false;

calculations.addEventListener('click', (event) => {
  if (event.target.classList.contains('digit')) {
    if (event.target.textContent === '.') {
      const currentNumberParts = display.textContent.split(/[+\-×÷%]/);
      const lastNumberPart = currentNumberParts[currentNumberParts.length - 1];

      if (lastNumberPart.includes('.')) {
        return;
      }

      if (waitingForSecondNumber || display.textContent === '0') {
        display.textContent = '0.';
        waitingForSecondNumber = false;
        return;
      }
    }

    if (waitingForSecondNumber || display.textContent === '0') {
      display.textContent = expression + event.target.textContent;
      waitingForSecondNumber = false;
    } else {
      display.textContent += event.target.textContent;
    }
    return;
  }

  if (event.target.textContent === 'AC') {
    display.textContent = '0';
    firstNumber = '';
    operator = '';
    expression = '';
    waitingForSecondNumber = false;
    return;
  }

  if (event.target.textContent === '+/-') {
    display.textContent = changeOfSign(parseFloat(display.textContent));
    return;
  }

  if (event.target.textContent === '%') {
    display.textContent = percent(parseFloat(display.textContent));
    return;
  }

  if (event.target.classList.contains('operator') && event.target.textContent !== '=') {
    const lastChar = display.textContent.slice(-1);
    const isLastCharOperator = Object.keys(operations).includes(lastChar);

    if (isLastCharOperator) {
      operator = event.target.textContent;
      expression = display.textContent.slice(0, -1) + operator;
      display.textContent = expression;
      return;
    }

    if (operator && !waitingForSecondNumber) {
      const secondNumber = display.textContent.split(operator)[1];
      const operation = operations[operator];
      const result = operation(parseFloat(firstNumber), parseFloat(secondNumber));
      display.textContent = result;
      firstNumber = result;
    } else {
      firstNumber = display.textContent;
    }
    operator = event.target.textContent;
    expression = firstNumber + operator;
    display.textContent = expression;
    waitingForSecondNumber = true;
    return;
  }

  if (event.target.textContent === '=' && operator && firstNumber) {
    const secondNumber = display.textContent.split(operator)[1];
    const operation = operations[operator];
    const result = operation(parseFloat(firstNumber), parseFloat(secondNumber));
    display.textContent = result;
    firstNumber = result;
    operator = '';
    waitingForSecondNumber = true;
  }
});