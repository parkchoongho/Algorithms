# Big O Notation

### Objective

- Motivate the need for something like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is

<br>

### What is the Big O?

Imagine we have multiple implementations of the same function.

How can we determine which one is the "best"?

The Big O Notation idea comes from that question.

<br>

### Problem

Write a function that accepts a string input and returns a reversed copy

With Big O Notation, we can assign generalized labels on the code. (like Earthquakes 7.5, 9.2)

<br>

### Who cares?

- It's important to have a precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
- Less important: it comes up in interviews

<br>

### Timing Our Code

Compare two codes. Both codes are the code that caculates the sum of all numbers from 1 up to (and including) some number n.

```javascript
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
```

```javascript
function addUpTo(n) {
    return n * (n + 1) / 2;
}
```

Which one is better?

<br>

### What does better mean?

- Faster?
- Less memory-intensive?
- More readable?

First, we will focus on the time. (Faster)

<br>

### Why not use timers?

```javascript
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`);
// more than one second
```

```javascript
function addUpTo(n) {
    return n * (n + 1) / 2;
}
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2-t1)/1000} seconds`);
// way more less than one second
```

The second one is way more better than the first one in perspective of time.

<br>

### The Problem with Time

- Different machines will record different times
- The same machine will record different times!
- For faster algorithms, speed measurements may not be precise enough

<br>

### If not time, then what?

Rather than counting seconds, which are so variable.....

=> **Let's count the *number* of simple operations the computer has to perform !**

=> **Because that remains constant no matter what computer we're on.**

```javascript
function addUpTo(n) {
    return n * (n + 1) / 2;
}
```

=> **Three simple operations** regardless of the size of N whether it's small or massive.

```javascript
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
```

=> Depending on what we count, the number of operations can be as slow as 2n or as high as 5n+2

=> **But regardless of the exact number, the number of operations grows roughly proportionally with n.**

<br>

### Introducing....Big O

Big O Notation is a way to formalize fuzzy counting. It allows us to talk in a very formal way about how the  runtime of an algorithm grows  as the inputs. We won't care about the details, only the trends.

<br>

### Big O Definition

We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

One thing to notice is that when we talk about big oh we're talking about the worst case scenario. So we're talking about basically the upper bound for runtime.

```javascript
function addUpTo(n) {
    return n * (n + 1) / 2;
}
```

=> Always 3 Operations : **O(1)**

```javascript
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
```

=> Number of operations  is (eventually) bounded by a multiple of n(say, 10n): **O(n)**

```javascript
function countUpAndDown(n){
    console.log("Going Up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back Down. Bye!");
}
```

=> Number of operations  is (eventually) bounded by a multiple of n(say, 10n): **O(n)** + **O(n)** = **O(n)**

```javascript
function printAllPairs(n) {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j);
        }
    }
}
```

=> O(n) operation inside of an O(n) operation: **O(n*n) = O(n^2)**

<br>

### Simplifying Big O Expressions

When determining the time complexity of an algorithm, there are some helpful **rule of thumbs** for Big O Expressions. These rules of thumb are consequences of the definition of Big O Notation.

**Constants Don't Matter**

- O(2n) ❌ => O(n) ✅
- O(500) ❌ => O(1) ✅ 
- O(13n^2) ❌ => O(n^2) ✅

**Smaller Terms Don't Matter**

- O(n + 10) ❌ => O(n) ✅
- O(1000n + 100) ❌ => O(n) ✅
- O(n^2 + 5n + 10) ❌ => O(n^2) ✅

<br>

### Big O Shorthands

- Analyzing complexity with big O can get complicated
- There are several rules of thumb that can help
- These rules won't **ALWAYS** work, but are a helpful starting point

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

```javascript
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
```

=> **O(n)**

```javascript
function logAtMost5(n) {
    for (let i = 1; i <=Math.min(5, n); i++) {
        console.log(i);
    }
}
```

=> **O(1)**

<br>

### Space Complexity

So far, we've been focusing on time complexity: how can we analyze the runtime of an algorithm as the size of the inputs increase?

We can also use big O notation to analyze **space complexity**: how much additional memory  do we need to allocate in order to run the code in our algorithm?

<br>

### What about the inputs?

Sometimes you'll hear the term **auxiliary space complexity** to refer to space required by the algorithm, not including space taken up by the inputs.

Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

<br>

### Rules of Thumb of Space Complexity in JS

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the length of the String) 
- Reference types are generally O(n), where n is the length(for arrays) or the number of keys (for objects)

```javascript
function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
```

=> **O(1) Space**

```javascript
function double(arr) {
    let newArr=[];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
	}
    return newArr;
}
```

=> **O(n) Space**

<br>

### Logarithms

We've encountered some of the most common complexities: O(1), O(n), O(n^2)

Sometimes big O expressions involve more complex mathematical expressions

One that appears more often than you might like is the logarithm!

The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one**.

**O(logn) O(nlogn)**

- Certain Searching algorithms have logarithmic time complexity. 
- Efficient sorting algorithms involve logarithms.
- Recursion sometimes involves logarithmic space complexity.

