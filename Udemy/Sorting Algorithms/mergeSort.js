function mergeSort(arr1, arr2) {
  let results = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      results.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      results.push(arr2[arr2Index]);
      arr2Index++;
    }
  }

  while (arr1Index < arr1.length) {
    results.push(arr1[arr1Index]);
    arr1Index++;
  }

  while (arr2Index < arr2.length) {
    results.push(arr2[arr2Index]);
    arr2Index++;
  }

  return results;
}

console.log(mergeSort([1, 4, 6], [3, 4, 8, 9]));
