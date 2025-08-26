//Q5. Multiply two matrices
let A = [
  [1, 2],
  [3, 4]
];
let B = [
  [5, 6],
  [7, 8]
];

let rowsA = A.length;
let colsA = A[0].length;
let colsB = B[0].length;

let result = Array.from({length: rowsA}, () => Array(colsB).fill(0));

for (let i = 0; i < rowsA; i++) {
  for (let j = 0; j < colsB; j++) {
    for (let k = 0; k < colsA; k++) {
      result[i][j] += A[i][k] * B[k][j];
    }
  }
}

console.log(result); // [[19, 22], [43, 50]]
