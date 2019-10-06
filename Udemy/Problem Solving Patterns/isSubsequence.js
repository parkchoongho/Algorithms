function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.

  if (str1.length > str2.length) return false;
  let strArr1 = str1.split("");
  let strArr2 = str2.split("");
  let strIndex1 = 0;
  for (let i = 0; i < strArr2.length; i++) {
    if (strIndex1 > strArr1.length - 1) break;
    if (strArr1[strIndex1] === strArr2[i]) strIndex1++;
  }
  console.log(strIndex1);
  if (strIndex1 === strArr1.length) return true;
  else return false;
}
console.log(isSubsequence("hello", "helli world"));
