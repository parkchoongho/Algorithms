# Doubly Linked List

### Objectives

- Construct a Doubly Linked List
- Compare and contrast Doubly Linked List and Singly Linked List
- Implement basic operations on a Doubly Linked List

### We know what lists are... but what is doubly?

**Almost** identical to Singly Linked Lists, except every node has another pointer, to the **previous** node!

### Comparisons with Singly Linked Lists

**More Memory === More Flexibility**

=> It's **almost** always a tradeoff!

### Pushing

Adding a node to the **end** of the Doubly Linked List

### Pushing pseudocode

- Create a new node with the value passed to the function
- If the head property is null, set the head and tail to be the newly created node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length by 1
- Return the Doubly Linked List



