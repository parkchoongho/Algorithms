function linearSearch(arr, value) {
  // add whatever parameters you deem necessary - good luck!

  for (let index = 0; index < arr.length; index++) {
    if (value === arr[index]) {
      return index;
    }
  }
  return -1;
}

linearSearch([1, 2, 3], 1);
