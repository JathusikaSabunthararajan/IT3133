//Q6. Function to print elements from multi-dimensional array
function printMultiArray(arr) {
  arr.forEach(row => {
    if (Array.isArray(row)) {
      printMultiArray(row); // recursion for nested arrays
    } else {
      console.log(row);
    }
  });
}

let multiArr = [[1, 2], [3, 4, [5, 6]]];
printMultiArray(multiArr);
// Output: 1 2 3 4 5 6
