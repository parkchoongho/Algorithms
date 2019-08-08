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

