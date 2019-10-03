function checkArr(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyObj1 = {};
  let frequencyObj2 = {};

  for (let ele of arr1) {
    frequencyObj1[ele] = (frequencyObj1[ele] || 0) + 1;
  }
  for (let ele of arr2) {
    frequencyObj2[ele] = (frequencyObj2[ele] || 0) + 1;
  }

  for (let key in frequencyObj1) {
    if (!(key ** 2 in frequencyObj2)) return false;
    if (frequencyObj2[key ** 2] !== frequencyObj1[key]) return false;
  }
  return true;
}

console.log(checkArr([1, 2, 3], [4, 1, 9]));
