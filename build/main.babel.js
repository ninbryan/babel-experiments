var _ref, _ref2, _hello, _ref3, _ref4, _bye;

const doubleSay = str => str + ", " + str;

function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

function exclaim(str) {
  return str + '!';
}

let resultUsual = exclaim(capitalize(doubleSay("hello")));
console.log(resultUsual); //=> "Hello, hello!"

let result = (_ref = (_ref2 = (_hello = "hello", doubleSay(_hello)), capitalize(_ref2)), exclaim(_ref));
console.log(result); //=> "Hello, hello!"

console.log((_ref3 = (_ref4 = (_bye = 'bye', doubleSay(_bye)), capitalize(_ref4)), exclaim(_ref3))); //=> "Bye, bye!"