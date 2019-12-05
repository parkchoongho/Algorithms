# Hash Tables

### Objectives

- Explain what a hash table is
- Define what a hashing algorithm
- Discuss what makes a good hashing algorithm
- Understand how collisions occur in a hash table
- Handle collisions using separate chaining or linear probing

### What is a Hash Table?

Hash tables are used to store *key-value* pairs. They are like arrays, but the keys are not ordered.

Unlike arrays, hash tables are *fast* for all of the following operations: finding values, adding new values, and removing values!

### Why should I care?

Nearly every programming language has some sort of hash table data structure. Because of their speed, hash tables are very commonly used!

### Hash Tables in the wild

**Python** has **Dictionaries** 

**JS** has **Objects** and **Maps***

**Java**, **Go**, & **Scala** have **Maps**

**Ruby** has **Hashes**

*Objects have some restrictions, but  are basically hash tables.

=> Let's pretend existing implementation mysteriously disappear, **How would we implement our own version??**

### Introductory Example

Imagine we want to store some colors We could just use an array/list:

["#ff69b4", "#ff4500", "#00ffff"]

Not super readable! What do these colors correspond to?

**It would be nice if instead of using indices to access the colors, we could use more human-readable keys.**

pink -----------------------> #ff69b4

orangered --------------> #ff4500

cyan ----------------------> #00ffff 

#### The problem is.....

How can we get human-readability and computer-readability?

Computer don't know how to find an element at index pink!

#### But Hash Tables to the rescue!!

### The Hash Part

To implement a hash table, we'll be using an array. 

In order to look up values by key, we need a way to **convert keys into valid array indices**.

A function that performs this task is called a ***hash function***

### Hash Function

#### What makes a good hash? (not a cryptographically secure one)

1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

#### Basic Hash Function

```javascript
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}
```

#### Refining our Hash (Problems with our current hash)

1. Only hashes strings (we won't worry about this)
2. Not constant time - linear in key length
3. Could be a little more random

### Improving our Hash function

```javascript
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
```

### Prime numbers?

The prime number in the hash is helpful in spreading out the keys more uniformly.

It's also helpful if the array that you're putting values into has a prime length.

You don't need to know why. (Math is complicated!) But here are some links if you're curious.

**[Why do hash functions use prime numbers?](https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/)**

**[Does making array size a prime number help in hash table implementation?](https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why)**

### Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two:

1. **Separate Chaining**
2. **Linear Probing**

#### Separate Chaining

With *separate chaining*, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

This allows us to store multiple key-value pairs at the same index.

#### Linear Probing

With *linear probing*, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index.

### Hash Table Set and Get

#### Set

1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

#### Get

1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found, returns undefined

