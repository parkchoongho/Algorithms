function checkNum(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let checkedIndex = arr2.indexOf(arr1[i] ** 2);
    if (checkedIndex === -1) return false;
    arr2.splice(checkedIndex, 1);
    console.log(arr2);
  }
  return true;
}

console.log(checkNum([1, 3, 8], [1, 9, 6]));
