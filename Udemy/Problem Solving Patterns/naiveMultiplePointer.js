function zeroToSum(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[index] + arr[j] === 0) {
        return [arr[index], arr[j]];
      }
    }
  }
  return undefined;
}

console.log(zeroToSum([-3, -2 - 1, 0, 4, 5, 6]));
