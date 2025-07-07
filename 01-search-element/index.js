let nums = [2, 8, 10, 13, 5, 3, 1];

function searchElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

let result = searchElement(nums, 9);
console.log(result);
