function hasSubarrayWithSum(arr, target) {
  let left = 0;
  let currentSum = 0;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];

    while (currentSum > target) {
      currentSum -= arr[left];
      left++;
    }

    if (currentSum === target) {
      return true;
    }
  }

  return false;
}


const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(hasSubarrayWithSum(arr, target)); 
