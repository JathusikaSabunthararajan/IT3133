//Q4. Scale a matrix
let matrix = [
  [1, 2],
  [3, 4]
];
let scalar = 2;

let scaledMatrix = matrix.map(row => row.map(val => val * scalar));

console.log(scaledMatrix); 
// [[2, 4], [6, 8]]
