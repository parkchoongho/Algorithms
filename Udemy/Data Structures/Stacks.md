# Stacks

### Objectives

- Define what a stack is
- Understand use cases for a stack
- Implement operations on a stack data structure

### What is a Stack?

A **LIFO**(**Last In First Out**) data structure! The last element added to the stack will be the first element removed from the stack

### How is it used?

Think about a stack of **plates**, or a stack of **markers**, or a stack of ...**anything**.

As you pile it up the last thing (or the topmost thing) is what gets removed first.

We've seen this before **The Call Stack**!

### Where Stacks are used

- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack!

**There is more than one way of implementing a stack**

### Array Implementation

Using Array with **push** and **pop** method or **unshift** and **shift** method, we can handle array like stack.

In general if you are going to use an array, **push** and **pop** are the better options. Because it doesn't require reindexing the entire array every time you add or remove, something you just have to create some a new index at the end or remove that index.