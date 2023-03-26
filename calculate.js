const yargs = require('yargs');

// Define the command-line arguments
const argv = yargs
  .usage('Usage: node calculator.js <number1> <operator> <number2>')
  .demandCommand(3)
  .argv;

const number1 = Number(argv._[0]);
const number2 = Number(argv._[1]);
const operator = argv._[2];

// Perform the requested operation
let result
switch (operator) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  case '*':
    result = number1 * number2;
    break;
  case '/':
    result = number1 / number2;
    break;
  default:
    console.error('error:', operator);
    process.exit(1);
}

console.log(`${number1} ${operator} ${number2} = ${result}`);