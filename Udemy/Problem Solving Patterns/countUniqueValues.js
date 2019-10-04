function countUniqueValues(arr) {
  let compareIndex = 0;
  let movingIndex = 0;
  if (arr.length === 0) return 0;
  let count = 1;
  while (movingIndex < arr.length) {
    if (arr[movingIndex] === arr[compareIndex]) movingIndex++;
    else {
      compareIndex = movingIndex;
      count++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 2, 2, 4, 4, 4, 12, 13]));
