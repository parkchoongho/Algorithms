function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let inSertedIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[inSertedIndex] < arr[j]) {
        let temp = arr[inSertedIndex];
        arr[inSertedIndex] = arr[j];
        arr[j] = temp;
        inSertedIndex -= 1;
      } else break;
    }
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([9, 4, 6, 2, 7]));
