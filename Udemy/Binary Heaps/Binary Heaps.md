# Binary Heaps

### Objectives

- Define what a binary heap is
- Compare and contrast min and max heaps
- Implement basic methods on heaps
- Understand where heaps are used in the real world and what other data structures can be constructed from heaps

### What is a Binary Heap?

**Very** similar to a binary search tree, but with some different rules! In a **MaxBinaryHeap**, parent nodes are always larger than child nodes. In a **MinBinaryHeap**, parent nodes are always smaller than child nodes.

### Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is **always** greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

### Why do we need to know this?

Binary Heaps are used to implement Priority Queues, which are **very** commonly used data structures

They are also used quite a bit, with **graph traversal** algorithms

### Storing Heaps

There's an easy way of storing a binary heap...  **A List / Array**

- **Array**

For any index of an array **n**...

The left child is stored at **2n + 1**

The right child is at **2n + 2**

**What if we have a child node and want to find its parent?**

For any child node at index **n**... Its parent is at index **(n - 1)/2 floored**

