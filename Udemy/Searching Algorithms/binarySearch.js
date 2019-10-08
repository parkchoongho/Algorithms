function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) return middle;
    else if (arr[middle] > value) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}

console.log(binarySearch());
