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

### Adding to a MaxBinaryHeap

- **Add to the end**
- **Bubble up**

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

### Removing from a Heap

- **Remove the root**
- **Replace with the most recently added**
- **Adjust(sink down)**

### Sink Down?

The procedure for deleting the root from the heap(effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as **bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down**, and **extract-min/max**)

### Removing Pseudocode

- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end
- Have the new root "sink down" to the correct spot...
  - Your parent index starts at 0 (the root)
  - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  - Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
  - If the left or right child is greater than the element, swap. If both left and right children are larger, swap with the largest child
  - The child index you swapped to now becomes the new parent index
  - Keep looping and swapping until neither child is larger than the element
  - Return the old root!

### Removing Code

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
  remove() {
    if (this.values.length === 0) return undefined;

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const popedValue = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();

    return popedValue;
  }

  sinkDown() {
    let parentIdx = 0;
    let leftChildIdx = parentIdx * 2 + 1;
    let rightChildIdx = parentIdx * 2 + 2;

    while (this.values[leftChildIdx]) {
      if (!this.values[rightChildIdx]) {
        if (this.values[leftChildIdx] >= this.values[parentIdx]) {
          let temp = this.values[parentIdx];
          this.values[parentIdx] = this.values[leftChildIdx];
          this.values[leftChildIdx] = temp;
        }
        break;
      }

      if (
        this.values[parentIdx] >= this.values[leftChildIdx] &&
        this.values[parentIdx] >= this.values[rightChildIdx]
      ) {
        break;
      }

      if (this.values[leftChildIdx] > this.values[rightChildIdx]) {
        let temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[leftChildIdx];
        this.values[leftChildIdx] = temp;
        parentIdx = leftChildIdx;
      } else {
        let temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[rightChildIdx];
        this.values[rightChildIdx] = temp;
        parentIdx = rightChildIdx;
      }
      leftChildIdx = parentIdx * 2 + 1;
      rightChildIdx = parentIdx * 2 + 2;
    }
    console.log(this.values);
  }
}

let binaryHeap = new MaxBinaryHeap();

binaryHeap.add(41);
binaryHeap.add(39);
binaryHeap.add(33);
binaryHeap.add(18);
binaryHeap.add(27);
binaryHeap.add(12);
binaryHeap.add(55);

console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
```

### Priority Queue Intro

**What is a Priority Queue?**

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

**A Naive Version**

Use a list to store all elements

Iterate over the entire thing to find the highest priority element.

### Priority Queue Pseudocode

**Defining our class**

Class Name: **PriorityQueue**

Properties: **values = []**

**Plus with...**

Class Name: **Node**

Properties: **val, priority**

=> Val doesn't matter. Heap is constructed **using Priority**

- Write a Min Binary Heap - lower number means higher priority.
- Each Node has a val and a priority. Use the priority to build the heap.
- **Enqueue** method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
- **Dequeue** method removes root element, returns it, and rearranges heap using priority.

### Priority Queue Code

```javascript
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enQueue(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[index].priority < this.values[parentIndex].priority
    ) {
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    console.log(this.values);
  }
  deQueue() {
    if (this.values.length === 0) return undefined;

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const popedValue = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();

    return popedValue;
  }
  sinkDown() {
    let parentIdx = 0;
    let leftChildIdx = parentIdx * 2 + 1;
    let rightChildIdx = parentIdx * 2 + 2;

    while (this.values[leftChildIdx]) {
      if (!this.values[rightChildIdx]) {
        if (
          this.values[leftChildIdx].priority < this.values[parentIdx].priority
        ) {
          let temp = this.values[parentIdx];
          this.values[parentIdx] = this.values[leftChildIdx];
          this.values[leftChildIdx] = temp;
        }
        break;
      }

      if (
        this.values[parentIdx].priority < this.values[leftChildIdx].priority &&
        this.values[parentIdx].priority < this.values[rightChildIdx].priority
      ) {
        break;
      }

      if (
        this.values[leftChildIdx].priority < this.values[rightChildIdx].priority
      ) {
        let temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[leftChildIdx];
        this.values[leftChildIdx] = temp;
        parentIdx = leftChildIdx;
      } else {
        let temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[rightChildIdx];
        this.values[rightChildIdx] = temp;
        parentIdx = rightChildIdx;
      }
      leftChildIdx = parentIdx * 2 + 1;
      rightChildIdx = parentIdx * 2 + 2;
    }
    console.log(this.values);
  }
}

let node1 = new Node("Soccer", 1);
let node2 = new Node("Video Game", 7);
let node3 = new Node("Baseball", 5);
let node4 = new Node("Math", 6);
let node5 = new Node("English", 3);
let node6 = new Node("Basketball", 2);
let node7 = new Node("Science", 4);
let node8 = new Node("Music", 4);

let priorityQueue = new PriorityQueue();

priorityQueue.enQueue(node1);
priorityQueue.enQueue(node2);
priorityQueue.enQueue(node3);
priorityQueue.enQueue(node4);
priorityQueue.enQueue(node5);
priorityQueue.enQueue(node6);
priorityQueue.enQueue(node7);
priorityQueue.enQueue(node8);

console.log(priorityQueue);

priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
```

### Big O of Binary Heaps

Insertion - **O(log N)**

Removal - **O(log N)**

Search - **O(N)**

### Recap

- Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
- Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
- With just a little bit of math, we can represent heaps using arrays!