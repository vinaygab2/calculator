const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1, num2, operator;

const operate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      console.log(add(num1, num2));
      break;

    case '-':
      console.log(subtract(num1, num2));
      break;

    case '*':
      console.log(multiply(num1, num2));
      break;

    case '/':
      console.log(divide(num1, num2));
      break;

    default:
      console.log('Please enter a valid operator!');
      break;
  }
};

switch (key) {
  case value:
    break;

  default:
    break;
}
