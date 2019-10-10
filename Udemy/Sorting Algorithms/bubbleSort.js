function bubbleSort(arr) {
  for (i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3, 9, 10]));
