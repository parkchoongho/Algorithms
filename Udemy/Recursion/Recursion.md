# Recursion

The idea is taking one problem and doing it over and over on a smaller piece or on a changing piece until you hit some endpoint which we call the base case.

### Objectives

- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems

### What is recursion?

A **process**(a function in our case) that **calls itself**

**It's everywhere in JavaScript.**

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- It's sometimes a cleaner alternative to iteration

In almost all program languages, there is a built in data structure that manages what happens when function are invoked

=> It's named **Call Stack**

### The Call Stack

- It's a **stack** data structure - we'll talk about that later!
- Any time a function is invoked it is placed (**pushed**) on the top of the call stack
- When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**)

=> As functions are invoked, they're added to the top of the stack and then they are popped off one at a time from the top as well.

- You're used to functions being pushed on the call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack! 