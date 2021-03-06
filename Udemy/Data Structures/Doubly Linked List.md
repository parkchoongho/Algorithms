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

### Pushing Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.push(3);
console.log(newDoubly);
newDoubly.push(4);
console.log(newDoubly);
```

### Popping 

Removing a node from the **end** of the Doubly Linked List

### Popping pseudocode

- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous node
- Set the new Tail's next to null
- Decrement the length
- Return the value removed

### Popping Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.push(3);
newDoubly.push(4);
newDoubly.push(5);
console.log(newDoubly);
console.log("==============");
newDoubly.pop();
console.log(newDoubly);
console.log("==============");
newDoubly.pop();
console.log(newDoubly);
console.log("==============");
newDoubly.pop();
console.log(newDoubly);
console.log("==============");
```

### Shifting

Removing a node from the beginning of the Doubly Linked List

### Shifting pseudocode

- If the length is 0, return undefined
- Store the current head property in a variable (we'll call it old head)
- If the length is one
  - set the head to be null
  - set the tail to be null
- Update the head to be the next of the old head
- Set the head's prev property to null
- Set the old head's next to null
- Decrement the length
- Return old head

### Shifting Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let poppedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.push(3);
newDoubly.push(4);
newDoubly.push(5);

console.log(newDoubly);
console.log("==============");
console.log(newDoubly.shift());

console.log(newDoubly);
console.log("==============");
console.log(newDoubly.shift());

console.log(newDoubly);
console.log("==============");
console.log(newDoubly.shift());

console.log(newDoubly);
console.log("==============");
console.log(newDoubly.shift());
```

### Unshifting

Adding a node to the **begginning** of the Doubly Linked List

### Unshifting pseudocode

- Create a new node with the value passed to the function
- If the length is 0
  - Set the head to be the new node
  - Set the tail to be the new node
- Otherwise
  - Set the prev property on the head of the list to be the new node
  - Set the next property on the new node to be the head property
  - Update the head to be the new node
- Increment the length
- Return the list

### Unshifting Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let poppedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.unshift(3);
console.log(newDoubly);
console.log("==============");
newDoubly.unshift(4);
console.log(newDoubly);
console.log("==============");
newDoubly.unshift(5);
console.log(newDoubly);
console.log("==============");
```

### Get

Accessing a node in a Doubly Linked List by its position

### Get pseudocode

- If the index is less than 0 or greater or equal to the length, return null
- If the index is less than or equal to half the length of the list
  - Loop through the list starting from the head and loop towards the middle
  - Return the node once it is found
- If the index is greater than half the length of the list
  - Loop through the list starting from the tail and loop towards the middle
  - Return the node once it is found

### Set

Replacing the value of a node to the in a Doubly Linked List

### Set pseudocode

- Create a variable which is the result of the **get** method at the index passed to the function
  - If the **get** method returns a valid node, set the value of that node to be the value passed to the function
  - Return true
- Otherwise, return false

### Set Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let poppedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let countIndex, currentNode;
    if (index <= this.length / 2) {
      console.log("WORKING FROM START");
      countIndex = 0;
      currentNode = this.head;
      while (index !== countIndex) {
        countIndex++;
        currentNode = currentNode.next;
      }
    } else {
      console.log("WORKING FROM END");
      countIndex = this.length - 1;
      currentNode = this.tail;
      while (index !== countIndex) {
        countIndex--;
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }
  set(index, val) {
    let validNode = this.get(index);
    if (validNode) {
      validNode.val = val;
      return true;
    }
    return false;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.unshift(3);

newDoubly.unshift(4);

newDoubly.unshift(5);
console.log(newDoubly);
console.log("==============");
console.log(newDoubly.set(2, 6));
console.log("==============");
console.log(newDoubly);
```

### Insert

Adding a node in a Doubly Linked List by a certain position

### Insert pseudocode

- If the index is less than zero or greater than or equal to the length return false
- If the index is 0, **unshift**
- If the index is the same as the length, **push**
- Use the **get** method to access the index - 1
- Set the next and prev properties on the correct nodes to link everything together
- Increment the length
- Return true

### Insert Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let poppedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let countIndex, currentNode;
    if (index <= this.length / 2) {
      console.log("WORKING FROM START");
      countIndex = 0;
      currentNode = this.head;
      while (index !== countIndex) {
        countIndex++;
        currentNode = currentNode.next;
      }
    } else {
      console.log("WORKING FROM END");
      countIndex = this.length - 1;
      currentNode = this.tail;
      while (index !== countIndex) {
        countIndex--;
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }
  set(index, val) {
    let validNode = this.get(index);
    if (validNode) {
      validNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) !!return this.push(val);

    let newNode = new Node(val);
    let foundNode = this.get(index - 1);

    foundNode.next.prev = newNode;
    newNode.next = foundNode.next;

    foundNode.next = newNode;
    newNode.prev = foundNode;

    this.length++;
    return true;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.push(3);

newDoubly.push(4);

newDoubly.push(5);
console.log(newDoubly);
console.log("==============");
console.log(newDoubly.insert(1, 2));
console.log("==============");
console.log(newDoubly);
```

### Remove

Removing a node in a Doubly Linked List by a certain position

### Remove pseudocode

- If the index is less than zero or greater than or equal to the length return undefined
- If the index is 0, **shift**
- If the index is the same as the length - 1, **pop**
- Use the **get** method to retrieve the item to be removed
- Update the next and prev properties to remove the found node from the list
- Set next and prev to null on the found node
- Decrement the length
- Return the removed node

### Remove Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let poppedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let countIndex, currentNode;
    if (index <= this.length / 2) {
      console.log("WORKING FROM START");
      countIndex = 0;
      currentNode = this.head;
      while (index !== countIndex) {
        countIndex++;
        currentNode = currentNode.next;
      }
    } else {
      console.log("WORKING FROM END");
      countIndex = this.length - 1;
      currentNode = this.tail;
      while (index !== countIndex) {
        countIndex--;
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }
  set(index, val) {
    let validNode = this.get(index);
    if (validNode) {
      validNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let foundNode = this.get(index - 1);

    foundNode.next.prev = newNode;
    newNode.next = foundNode.next;

    foundNode.next = newNode;
    newNode.prev = foundNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let foundNode = this.get(index);
    let beforeNode = foundNode.prev;
    let afterNode = foundNode.next;

    beforeNode.next = foundNode.next;
    afterNode.prev = foundNode.prev;
    // foundNode.prev.next = foundNode.next;
    // foundNode.next.prev = foundNode.prev;

    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.push(3);

newDoubly.push(4);

newDoubly.push(5);
console.log(newDoubly);
console.log("==============");
console.log(newDoubly.remove(1));
console.log("==============");
console.log(newDoubly);
console.log(newDoubly.remove(1));
console.log("==============");
console.log(newDoubly);
```

### Big O of Doubly Linked Lists

Insertion - **O(1)**

Removal - **O(1)**

Searching - **O(N)**

Access - **O(N)**

Technically searching is **O(N/2)**, but that's **still O(N)**

### Recap

- Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
- Better than Singly Linked Lists for finding nodes and can be done in half the time!
- However, they do take up more memory considering the extra pointer

