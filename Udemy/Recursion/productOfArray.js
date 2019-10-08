// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArr(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArr(arr.slice(1));
}

console.log(productOfArr([1, 2, 3, 10]));
