const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1, num2, operator, equalsPressed;
const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');
const operatorBtns = document.querySelectorAll('.operator');

const operate = (num1, num2, operator) => {
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
  // remove opacity on operator buttons if other buttons are clicked
  if (e.target.classList.contains('operator') === false) {
    operatorBtns.forEach((operatorBtn) =>
      operatorBtn.classList.remove('btnPressed')
    );
  }
  // if digit buttons are clicked
  if (e.target.classList.contains('digits')) {
    if (operator === undefined) {
      if (equalsPressed === true) {
        equalsPressed = false;
        display.textContent = '';
      }
      display.textContent = display.textContent + e.target.textContent;
      num1 = Number(display.textContent);
      console.log('num1 is', num1);
    } else {
      if (num2 === undefined) {
        display.textContent = '';
      }
      display.textContent = display.textContent + e.target.textContent;
      num2 = Number(display.textContent);
      console.log('num2 is', num2);
    }
  } else if (e.target.classList.contains('clear')) {
    display.textContent = '';
    operator = undefined;
    num1 = undefined;
    num2 = undefined;
  } else if (e.target.classList.contains('operator')) {
    operator = e.target.textContent;
    e.target.classList.add('btnPressed');
  } else if (e.target.classList.contains('equals')) {
    if (num1 === undefined) {
      num1 = 0;
    }
    if (num2 === undefined) {
      num2 = num1;
    }
    if (operator !== undefined) {
      display.textContent = String(operate(num1, num2, operator));
      num1 = Number(display.textContent);
      num2 = undefined;
      operator = undefined;
      equalsPressed = true;
    }
  }
});
