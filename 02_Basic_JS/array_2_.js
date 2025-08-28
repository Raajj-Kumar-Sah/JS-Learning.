const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) //Push array inside the array. dc_heros pushed or add to the marvel_heros.

console.log(marvel_heros);
console.log(marvel_heros[3][1]); //Output: flash

const allHeros = marvel_heros.concat(dc_heros) //Concatinate the both array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]//Spread the array element and make it one just like contactination.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  //Nested array

const real_another_array = another_array.flat(Infinity) // the flat() method is an array method used to create a new array with all sub-array elements concatenated into it recursively up to a specified depth.
//Here Infinity is add to cover all the nexted element without giving the specific value.
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//check that it is array or not.
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));
