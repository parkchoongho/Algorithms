# Singly Linked List

### Objectives

- Define what a Singly Linked List is
- Compare and contrast Linked Lists with Arrays
- Implement insertion, removal and traversal methods on Singly Linked Lists

### What is a linked list?

- A data structure that contains a **head**, **tail** and **length** property.
- Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null

### Comparisons with Arrays

#### Lists

- Do not have indexes!
- Connected via nodes with a **next** pointer
- Random access is not allowed

#### Arrays

- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

### Starter Code and Push

#### Pushing

Adding a new **node** to the end of the Linked List!

#### Pushing pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one


