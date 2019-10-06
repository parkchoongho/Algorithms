function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avr = arr[left] + arr[right] / 2;
    if (avr === num) return true;
    else if (avr > num) right--;
    else left++;
  }
  return false;
}
