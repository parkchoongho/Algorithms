function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    console.log(arr);
  }
  return arr;
}

console.log(selectionSort([10, 6, 7, 8, 4, 3, 1, 1]));
