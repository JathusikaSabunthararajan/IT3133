//Q3. Break a whole number into digits
let num = 4562;

// Convert to string, then split into digits
let digits = num.toString().split('').map(Number);

console.log(digits); // [4, 5, 6, 2]
