let nums = [-1, -2, -1, -3, -1, -4];

function findSecondLargestNumber(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  if (arr.length < 2) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

let result = findSecondLargestNumber(nums);
console.log(result);
