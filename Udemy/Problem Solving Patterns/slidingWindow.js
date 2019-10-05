function findMax(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
    maxSum = tempSum;
  }

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(findMax([5, 6, 3, 4, 7, 8, 5, 6, 5, 7, 5, 5, 9, 3, 1, 9], 3));
