let result = "hello"
  |> str => str + ", " + str
  |> str => str[0].toUpperCase() + str.substring(1)
  |> str => str + '!'
;

console.log(result);
/*
----
----
----
*/
// let data = ['2011-05-05', '2015-11-11']
//   |> arr => arr.map()