# Queues

### Objectives

- Define what a queue is
- Understand use cases for a queue
- Implement operations on a queue data structure

 ### What is a Queue?

A **FIFO** Data Structure (**F**irst **I**n **F**irst **O**ut)

ex) The first person in line is the first person out

### We've seen this before

Queues exist everywhere! Think about the last time you waited in line.....

**How do we use them in programming?**

- Background tasks
- Uploading resources
- Printing / Task processing

### Building a Queue with an array

```javascript
let q = [];
q.push("FIRST");
q.push("SECOND");
q.push("THIRD");
q.shift();
q.shift();
q.shift();
q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");
q.pop();
q.pop();
q.pop();
```

Definitely makes sense to create your own Q class if you're really concerned about performance.

### Writing Our Own Queue From Scratch

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let addedNode = new Node(val);
    if (!this.first) {
      this.first = addedNode;
      this.last = addedNode;
    } else {
      this.last.next = addedNode;
      this.last = addedNode;
    }
    this.size++;
    return this;
  }
  dqueue() {
    if (!this.first) return undefined;
    let removedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }
}

let linkedQueue = new Queue();
linkedQueue.enqueue(1);
linkedQueue.enqueue(2);
console.log("===============");
console.log(linkedQueue.enqueue(3));
console.log(linkedQueue.dqueue());
console.log(linkedQueue);
console.log(linkedQueue.dqueue());
console.log(linkedQueue);
console.log(linkedQueue.dqueue());
console.log(linkedQueue);
console.log(linkedQueue.dqueue());
console.log(linkedQueue);

```

### Enqueue pseudocode

- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
- Increment the size of the queue by 1

### Dequeue pseudocode

- If there is no first property, just return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of first
- Decrement the size by 1
- Return the value of the node dequeued

