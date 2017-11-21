const doubleSay = (str) => str + ", " + str;

function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}


let resultUsual = exclaim(capitalize(doubleSay("hello")));
console.log(resultUsual) //=> "Hello, hello!"


let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;

console.log(result); //=> "Hello, hello!"

console.log('bye' |> doubleSay |> capitalize |> exclaim);
 //=> "Bye, bye!"