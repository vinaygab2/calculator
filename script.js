const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1, num2, operator;
const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');
const button = document.querySelectorAll('button');

const operate = (num1, num2, operator) => {
  if (num1 === undefined) {
    num1 = 0;
  }
  switch (operator) {
    case '+':
      return add(num1, num2);
      break;

    case '-':
      return subtract(num1, num2);
      break;

    case '*':
      return multiply(num1, num2);
      break;

    case '/':
      return divide(num1, num2);
      break;

    default:
      break;
  }
};

calculator.addEventListener('click', (e) => {
  if (e.target.classList.contains('digits')) {
    if (operator === undefined) {
      display.textContent = display.textContent + e.target.textContent;
      num1 = Number(display.textContent);
      console.log('num1 is', num1);
    } else {
      display.textContent = display.textContent + e.target.textContent;
      num2 = Number(display.textContent);
      console.log('num2 is', num2);
    }
  } else if (e.target.classList.contains('clear')) {
    display.textContent = '';
    operator = undefined;
  } else if (e.target.classList.contains('operator')) {
    display.textContent = '';
    operator = e.target.textContent;
  } else if (e.target.classList.contains('equals')) {
    display.textContent = String(operate(num1, num2, operator));
  }
});
