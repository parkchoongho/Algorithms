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

### Heap: Insert Intro

Defining our class

Class Name: **MaxBinaryHeap**

Properties: **values = []**

**Adding to a MaxBinaryHeap**

- Add to the end
- Bubble up

### Insert Pseudocode

- Push the value into the values property on the heap
- Bubble the value up to its correct spot!
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index-1)/2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over!

### Insert Code

```javascript
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  add(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    // console.log(index, parentIndex);

    while (parentIndex >= 0 && this.values[index] > this.values[parentIndex]) {
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    // console.log(this.values);
  }
}

let binaryHeap = new MaxBinaryHeap();

binaryHeap.add(10);
binaryHeap.add(50);
binaryHeap.add(30);
binaryHeap.add(40);
binaryHeap.add(70);
binaryHeap.add(110);
binaryHeap.add(90);
binaryHeap.add(150);
binaryHeap.add(80);

console.log(binaryHeap);
```

