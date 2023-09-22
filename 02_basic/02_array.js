const marvel_heros = ["thor", "IronMan", "SpiderMan"]
const dc_heros = ["superMan", "flash", "batMan"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
const another_array = [1, 2, 3, 4, [7, 8], 5, [0, 9, [6, 3]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("nouman"));
console.log(Array.from("nouman"));
console.log(Array.from({name: "nouman"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
