//Q2. Find 3 largest numbers in an array
let arr = [4, 5, 8, 6];

// Sort in descending order and pick first 3
let largestThree = arr.sort((x, y) => y - x).slice(0, 3);

console.log(largestThree); // [8, 6, 5]
