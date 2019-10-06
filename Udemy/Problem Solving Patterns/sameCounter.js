function sameCounter(num1, num2) {
  let numStr1 = String(num1);
  let numStr2 = String(num2);

  if (numStr1.length !== numStr2.length) return false;

  let numStrArr1 = numStr1.split("");
  let numStrArr2 = numStr2.split("");

  let numObj1 = {};
  let numObj2 = {};

  for (let i of numStrArr1) {
    numObj1[i] = (numObj1[i] || 0) + 1;
  }
  for (let i of numStrArr2) {
    numObj2[i] = (numObj2[i] || 0) + 1;
  }
  console.log(numObj1, numObj2);
  for (let i in numObj1) {
    if (!numObj2[i]) return false;
    if (numObj1[i] !== numObj2[i]) return false;
  }

  return true;
}

console.log(sameCounter(1982929, 1982929));
