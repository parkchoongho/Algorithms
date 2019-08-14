# Analyzing Performance of Arrays and Objects

### Objectives

- Understand how objects and arrays work, through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods

<br>

### Objects

Objects are unordered, key value pairs

```javascript
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
```

When to use Objects

- When you don't need order
- When you need fast access / insertion and removal

### Big O of Objects

Insertion - **O(1)**

Removal - **O(1)**

Searching - **O(n)** => Searching a specific value

Access - **O(1)**

When you don't need any ordering, objects are an excellent choice!

### Big O of Object Methods

Object.keys - **O(n)**

Object.values - **O(n)**

Object.entries - **O(n)**

hasOwnProperty - **O(1)**

<br>

### Array

Arrays are ordered lists

```javascript
let names = ["Micheal", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];
```

When to use arrays

- When you need order
- When you need fast access / insertion and removal (sort of....)

### Big O of Arrays

Insertion - **It depends....**

Removal - **It depends....**

Searching - **O(n)**

Access - **O(1)**

만약 array 상에서 맨 뒤에 element를 넣거나 제거하는 것은 그 나머지 요소에 영향을 미치지 않으므로 **O(1)**이 됩니다. 하지만, 맨 앞에 요소를 넣거나 제거하는 경우에는 나머지 요소들에 영향을 미치므로 **O(n)**이 됩니다.

### Big O of Array Operations

- push - **O(1)**
- pop - **O(1)**
- shift - **O(N)**
- unshift - **O(N)**
- concat - **O(N)**
- slice - **O(N)**
- splice - **O(N)**
- sort - **O(N*logN)**
- forEach/map/filter/reduce/etc. - **O(N)**