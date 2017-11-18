const doubleSay = (str) => str + ", " + str;

function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}

/*
let result = exclaim(capitalize(doubleSay("hello")));
result //=> "Hello, hello!"
*/

let result = "hello"
  |> doubleSay
  |> capitalize
  |> (str => str + '!');

console.log(result); //=> "Hello, hello!"