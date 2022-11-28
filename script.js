// 1.
const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

let max = Math.max(...users.map((person) => person.age));
let maxValues = users.filter((person) => person.age == max);

let min = Math.min(...users.map((person) => person.age));
let minValues = users.filter((person) => person.age == min);

console.log(minValues); // {name:'Lasha', age:21}
console.log(maxValues); // {name: "Ana", age:28}

//2.

const user1 = {
  name: "Temo",
  lastName: "Asanishvili",
  age: 26,
  location: "Tbilisi",
};

const user2 = user1;
console.log(user1); // {name: 'Temo', lastName: 'Asanishvili', age: 26, location: 'Tbilisi'}
console.log(user2); // {name: 'Temo', lastName: 'Asanishvili', age: 26, location: 'Tbilisi'}

// 3.

let game = 0;
let player1 = 0;
let player2 = 0;

function winner() {
  return parseInt(Math.random() * 10);
}

while (player1 !== 3 && player2 !== 3) {
  game++;
  player1 = winner();
  player2 = winner();
  console.log("game " + game + ": ", player1, player2);
  result();
}

function result() {
  if (player1 == 3 && player2 !== 3) {
    console.log("WINNER: Player 1 - in game " + game);
  } else if (player1 !== 3 && player2 == 3) {
    console.log("WINNER: Player 2 - in game " + game);
  }
}
