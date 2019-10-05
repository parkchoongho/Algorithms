function findMaxSum(arr, num) {
  if (arr.length < num) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < num; j++) {
      tempSum += arr[i + j];
    }
    if (tempSum > max) max = tempSum;
  }
  return max;
}

console.log(findMaxSum([5, 6, 3, 4, 7, 8, 5, 6, 5, 7, 5, 5, 9, 3, 1, 9], 3));
