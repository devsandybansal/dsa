let nums = [5, -5, 10, 13, 2, 19, 4];

function findLargestNumber(arr) {
  // Instead of -Infinity, we can also assume the 0th index element as the largest number and start comparing numbers from the first index.
  let largestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }

  return largestNum;
}

let result = findLargestNumber(nums);
console.log(result);
