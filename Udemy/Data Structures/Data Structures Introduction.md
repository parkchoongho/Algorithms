# Data Structures Introduction

### What Do They Do?

Data Structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

### Why Care?

The more time you spend as a developer, the more likely you'll need to use one of these data structures. You've already worked with many of them unknowingly! 

And of course.... **INTERVIEWS**

There is no **"BEST"** Data Structure. They all excel in different situations. Otherwise why bother learning them all?

Ex) 

Working with map/location data? **Graph**

Need an ordered list with fast inserts/removals at the beginning and end? **Linked List**

Web scraping nested HTML? **Tree**

Need to write a scheduler? **Binary Heap**

#### There is a tone of contents to take in here.... Don't get overwhelmed trying to master it all at once.

### ES2015 Class Syntax

#### Objectives

- Explain what a class is
- Understand how JavaScript implements the **idea** of classes
- Define terms like abstraction, encapsulation and polymorphism
- Use ES2015 classes to implement data structures

#### What is a Class?

A blueprint for creating objects with pre-defined properties and methods

#### Why do we need to learn class?

We're going to implement **data structures** as **classes!**

### Class

The Syntax

```javascript
class Student{
    constructor(firstName, lastName){
		this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

The method to create new objects **must** be called constructor. The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well! (This refers to the individual instance.)

When we create objects from classes, use the **new** keyword.

```javascript
class Student{
    constructor(firstName, lastName){
		this.firstName = firstName;
        this.lastName = lastName;
    }
}	

let firstStudent = new Student("Choong Ho", "Park");
```

### Instance Methods

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
  }
  fullName() {
    return `My Full Name is ${this.lastName} ${this.firstName}`;
  }
  late() {
    this.tardies++;
    if (this.tardies >= 3) return "Go to Hell!!!";
    return `${this.lastName} ${this.firstName} has been late ${this.tardies} times`;
  }
}

let firstStudent = new Student("Choong Ho", "Park");

console.log(firstStudent.late());
console.log(firstStudent.late());
console.log(firstStudent.late());
```

### Class Methods

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
  }
  fullName() {
    return `My Full Name is ${this.lastName} ${this.firstName}`;
  }
  late() {
    this.tardies++;
    if (this.tardies >= 3) return "Go to Hell!!!";
    return `${this.lastName} ${this.firstName} has been late ${this.tardies} times`;
  }
  static enrollStudents(...students){
      
  }
}

let firstStudent = new Student("Choong Ho", "Park");

console.log(firstStudent.late());
console.log(firstStudent.late());
console.log(firstStudent.late());
```

The enrollStudents method is not related to instance. It is related to the Class itself.

```javascript
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        
        return Math.hypot(dx, dy);
    }
}
```

This is a MDN example of class method.

=> We will be using the **constructor** and **instance methods** quite a bit! We will almost **never** be using **static** methods.

cf) Inside all of our **instance** methods and **constructor**, the keyword 'this' refers to the object created from that class (also known as an **instance**)

### Recap

- Classes are blueprints that when created make objects known as **instances**
- Classes are created with the **new** keyword
- The **constructor** function is a special function that gets run when the class is instantiated
- Instance methods can be added to classes similar to methods in objects
- Class methods can be added using the **static** keyword