let nums = [1, -1, 4, -2, 8, 5, -3];

function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

const result = countNegativeNumbers(nums);
console.log(result);
