const getStringLength = require('./stringLength');

const str = 'Hey, this is great!';
const length = getStringLength(str);

console.log(`The length of "${str}" is ${length}.`);