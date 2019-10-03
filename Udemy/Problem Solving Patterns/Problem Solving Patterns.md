# Problem Solving Patterns

### Intro to Problem Solving Patterns

**How Do You Improve?**

1. **Devise** a plan for solving problems
2. **Master** common problem solving patterns

This section is for **second part** (**Master** common problem solving patterns).

<br>

### Frequency Counters

This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or  O(n^2) operations with arrays / strings

**Example**

Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

**Naive Solution**

```javascript
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
```

**Frequency Counter Solution**

```javascript
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
```

The idea behind the frequency counter usually use an object and you use that object to construct a profile sort of a way of breaking down the contents of an array or a string.

