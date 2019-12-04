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

