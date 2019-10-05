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

**Anagrams Problem**

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as ***cinema***, formed from ***iceman***.

**Solution**

```javascript
function isAnagram(str1, str2) {
  if (str1 === "" && str2 === "") return true;
  if (str1.length !== str2.length) return false;

  let strObj1 = {};
  let strObj2 = {};

  for (let ele of str1) {
    strObj1[ele] = (strObj1[ele] || 0) + 1;
  }
  for (let ele of str2) {
    strObj2[ele] = (strObj2[ele] || 0) + 1;
  }

  for (let key in strObj1) {
    if (!(key in strObj2)) return false;
    if (strObj1[key] !== strObj2[key]) return false;
  }
  return true;
}

console.log(isAnagram("bbbggnjk", "jkggbbnb"));
```

<br>

### Multiple Pointers

Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

**Very** efficient for solving problems with minimal space complexity as well

**Example**

Write a function called **sumZero** which accepts a **sorted** array of integers. The function should find the **first** pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

**Naive Solution**

```javascript
function zeroToSum(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[index] + arr[j] === 0) {
        return [arr[index], arr[j]];
      }
    }
  }
  return undefined;
}

console.log(zeroToSum([-3, -2 - 1, 0, 4, 5, 6]));
```

**Time Complexity**: O(n^2)

**Space Complexity**: O(1)

**Multiple Pointers Solution**

```javascript
function zeroToSum(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
  return undefined;
}

console.log(zeroToSum([-3, -2, -1, 0, 2, 4, 5]));
```

**Time Complexity**: O(n)

**Space Complexity**: O(1)

This idea is using two pointers in this case working from the far left side and the far right side towards the middle. 

**Count Unique Value Problem**

Implement a function called **countUniqueValues**, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

**Solution**

```javascript
function countUniqueValues(arr) {
  let compareIndex = 0;
  let movingIndex = 0;
  if (arr.length === 0) return 0;
  let count = 1;
  while (movingIndex <= arr.length - 1) {
    if (arr[movingIndex] === arr[compareIndex]) movingIndex++;
    else {
      compareIndex = movingIndex;
      count++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
```

<br>

### Sliding Window

This pattern involves creating a **window** which can either be an array or number from one position to another. 

Depending on a certain condition, the window either increases or closes (and a new window is created) 

Very useful for keeping track of a subset of data in an array/string etc.

**Example**

Write a function called maxSubArraySum which accepts an array of integers and a number called **n**. The function should calculate the maximum sum of **n** consecutive elements in the array.

**Naive Solution**

```javascript
function findMaxSum(arr, num) {
  if (arr.length < num) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < num; j++) {
      tempSum += arr[i + j];
    }
    if (tempSum > max) max = tempSum;
  }
  return max;
}

console.log(findMaxSum([5, 6, 3, 4, 7, 8, 5, 6, 5, 7, 5, 5, 9, 3, 1, 9], 3));
```

**Sliding Window Solution**

```javascript
function findMax(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
    maxSum = tempSum;
  }

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(findMax([5, 6, 3, 4, 7, 8, 5, 6, 5, 7, 5, 5, 9, 3, 1, 9], 3));
```

