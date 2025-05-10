const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1,
  num2,
  operator,
  equalsPressed,
  dotClicked = 0,
  loopStart = false,
  currentNum1,
  currentNum2,
  result;
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

function displayResult() {
  result = operate(num1, num2, operator);
  if (result.length < 15) {
    display.textContent = String(result);
  } else {
    display.textContent = String(Number(result.toPrecision(14)));
  }

  num1 = Number(display.textContent);
  num2 = undefined;
  operator = undefined;
  equalsPressed = true;
  dotClicked = 0;
  loopStart = true;
}

calculator.addEventListener('click', (e) => {
  // remove opacity on operator buttons if other buttons are clicked
  if (e.target.classList.contains('operator') === false) {
    operatorBtns.forEach((operatorBtn) =>
      operatorBtn.classList.remove('btnPressed')
    );
  }
  if (e.target.classList.contains('dot')) {
    dotClicked = dotClicked + 1;
  }

  // toggle sign of number
  if (e.target.classList.contains('sign')) {
    if (operator === undefined) {
      display.textContent = String(Number(display.textContent) * -1);
      num1 = Number(display.textContent);
      console.log('NUM1 IS', num1);
    } else if (operator !== undefined) {
      display.textContent = String(Number(display.textContent) * -1);
      num2 = Number(display.textContent);
      console.log('NUM2 IS', num2);
    }
  }

  // backspace behaviour
  if (e.target.classList.contains('backspace')) {
    if (display.textContent.slice(-1) === '.') {
      dotClicked = 0;
    }
    if (operator === undefined) {
      display.textContent = display.textContent.slice(0, -1);
      num1 = Number(display.textContent);
    } else if (operator !== undefined) {
      display.textContent = display.textContent.slice(0, -1);
      num2 = Number(display.textContent);
    }
  }

  // if digit buttons are clicked
  if (e.target.classList.contains('digits')) {
    if (operator === undefined) {
      // clear display of previous calculation
      if (equalsPressed === true) {
        equalsPressed = false;
        display.textContent = '0';
      }

      // display first number
      if (num1 === undefined && !e.target.classList.contains('dot')) {
        display.textContent = '';
      }
      if (loopStart === true && e.target.classList.contains('dot')) {
        loopStart = false;
      }
      if (loopStart === true && !e.target.classList.contains('dot')) {
        loopStart = false;
        display.textContent = '';
      }
      if (
        dotClicked === 0 ||
        dotClicked === 1 ||
        (dotClicked > 1 && !e.target.classList.contains('dot'))
      ) {
        display.textContent = display.textContent + e.target.textContent;
        num1 = Number(display.textContent);
      }
    } else {
      // clear display to enter second number after operator is clicked
      if (num2 === undefined) {
        if (e.target.classList.contains('dot')) {
          display.textContent = '0';
        } else {
          display.textContent = '';
        }
      }

      // display second number
      if (
        dotClicked === 0 ||
        dotClicked === 1 ||
        (dotClicked > 1 && !e.target.classList.contains('dot'))
      ) {
        display.textContent = display.textContent + e.target.textContent;
        num2 = Number(display.textContent);
      }
    }
  } else if (e.target.classList.contains('clear')) {
    operator = undefined;
    num1 = undefined;
    num2 = undefined;
    dotClicked = 0;
    display.textContent = '0';
    loopStart = false;
  } else if (e.target.classList.contains('operator')) {
    e.target.classList.remove('btnPressed');
    if (num1 !== undefined && num2 !== undefined && operator !== undefined) {
      displayResult();
    }
    operator = e.target.textContent;
    e.target.classList.add('btnPressed');
    dotClicked = 0; // to ensure num2 can have decimal point
  } else if (e.target.classList.contains('equals')) {
    if (num1 === undefined) {
      num1 = 0;
    }
    if (num2 === undefined && operator !== undefined) {
      num2 = num1;
    }
    if (operator !== undefined) {
      displayResult();
    }
  }
});
