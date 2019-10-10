# Sorting Algorithms

### What is Sorting?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

### Why do we need to learn this?

- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages

### Objectives

- Implement bubble sort
- Implement selection sort
- Implement insertion sort
- Understand why it is important to learn these simpler sorting algorithms

### Built-In JavaScript Sort Method

- The built-in sort method accepts an optional comparator function

- You can use this comparator function to tell JavaScript how you want it to sort

- The comparator looks at pairs of elements (a and b), determines their sore order based on the return value   

  - If it returns a negative number, a should come before b
  - If it returns a positive number, a should come after b
  - If it returns 0, a and b are the same as far as the sort is concerned


```javascript
function compareByLen(str1, str2){
    return str1.length - str2.length
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
```

=> ["Colt", "Steele", "Algorithms", "Data Structures"]

### Bubble Sort

A sorting algorithm where the largest values bubble up to the top!

**Before we sort, we must swap!**

Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

```javascript
// ES5
function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

### Bubble Sort Pseudocode

- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values
- Return the sorted array

bubbleSort.js

```javascript
function bubbleSort(arr) {
  for (i = arr.length; i > 0; i--) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([10, 9, 3, 2, 1]));
```

bubbleSort.js Optimization

```javascript
function bubbleSort(arr) {
  for (i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3, 9, 10]));
```

