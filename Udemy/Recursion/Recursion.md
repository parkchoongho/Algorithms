# Recursion

The idea is taking one problem and doing it over and over on a smaller piece or on a changing piece until you hit some endpoint which we call the base case.

<br>

### Objectives

- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems

<br>

### What is recursion?

A **process**(a function in our case) that **calls itself**

**It's everywhere in JavaScript.**

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- It's sometimes a cleaner alternative to iteration

In almost all program languages, there is a built in data structure that manages what happens when function are invoked

=> It's named **Call Stack**

<br>

### The Call Stack

- It's a **stack** data structure - we'll talk about that later!
- Any time a function is invoked it is placed (**pushed**) on the top of the call stack
- When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**)

=> As functions are invoked, they're added to the top of the stack and then they are popped off one at a time from the top as well.

- You're used to functions being pushed on the call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack! 

<br>

### How recursive function work

Invoke the **same** function with a different input until you reach your base case!

**Base Case**

The condition when the recursion ends. **This is the most important concept to understand**

**Two essential parts of a recursive function**

- Base Case

- Different Input

**Example**

```javascript
function countDown(num){
    if(num <= 0){
		console.log('We are done!!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

**What needed to check**

- Can you spot the base case?
- Do you notice the different input?
- What would happen if we didn't return?

```javascript
function sumRange(num){
	if(num === 1) return 1;
    return num + sumRange(num - 1);
}
```

<br>

### Factorial

**Iterative**

```javascript
function factorial(num){
    let total = 1;
    for(let i = num; num > 1; num--;){
        total *= i;
    }
    return total;
}
```

**Recursion**

```javascript
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num - 1);
}
```

<br>

### Pitfalls

- No or Wrong Base Case
- Forgetting to return or returning the wrong thing
- Stack overflow

```javascript
function factorial(num){
	if(num === 1) return 1;
    return num * factorial(num);
}
```

```javascript
function factorial(num){
    if(num === 1) console.log(num);
    return num * factorial(num - 1);
}
```

<br>

### Helper Method Recursion

```javascript
function outer(input){
    let outerScopedVariable = [];
    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--);
    }
    helper(input);
    return outerScopedVariable;
}
```

**Example**

I just tried to define a function called collect odds which accepts a list of nums. If I tried to make a variable called result and I set it to be an empty array. This is where we're going to put the odd numbers. If we're doing a recursive function no matter what I put after this every time it is called, result will be reset to be an empty array.

So how are we going to collect our data?

How are we going to have this piece that persists throughout?

```javascript
function collectOddValues(arr){
    let collectedOddList = [];
    
    function helper(helperInput){
		if(helperInput.length === 0) return;
        if(helperInput[0] % 2 !== 0) collectedOddList.push(helperInput[0]);
        helper(helperInput.slice(1));    
    }
    helper(arr);
  	return collectedOddList;
}
```

<br>

### Pure Recursion

Pure Recursion means the function itself is totally self-contained in its recursive. We don't have some external data structure like we had here this external result today.

**Example**

Same problem with helper function

```javascript
function collectOddNum(arr){
    let result = [];
    
    if(arr.length === 0) return result;
    if(arr[0] % 2 !== 0) result.push(arr[0]);
    result = result.concat(collectOddNum(arr.slice(1)));
    
    return result;
}
```

**Pure Recursion Tips**

- For arrays, use methods like **slice, the spread operator, and concat** that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like **slice, substr, or substring** to make copies of strings
- To make copies of objects, use **Object.assign, or the spread operator**

