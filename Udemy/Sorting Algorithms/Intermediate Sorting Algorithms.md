# Intermediate Sorting Algorithms

### Objectives

- Understand the limitations of the sorting algorithms we've learned so far
- Implement merge sort
- Implement quick sort
- Implement radix sort

### Why Learn This?

- The sorting algorithms we've learned so far don't scale well
- Try out bubble sort on an array of 100000 elements, it will take quite some time!

### Faster Sorts

- There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(nlogn)
- There's a tradeoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and generally take longer to understand
- Let's dive in!

### Merge Sort

- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

### Merging Arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
- This function should run in **O(n + m)** time and **O(n + m)** space and should not modify the parameters passed to it

### Merging Arrays Pseudocode

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
  -  If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once we exhaust one array, push in all remaining values from the other array

mergeSort.js(We get two sorted array. We merge them into on sorted array.)

```javascript
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
```

