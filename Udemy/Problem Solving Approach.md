# Problem Solving Approach

### Introduction to Problem Solving

#### Objectives

- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

#### What is an algorithms?

A **process** or **set of steps** to accomplish a certain task

#### How do you improve?

1. **Devise** a plan for solving problems
2. **Mater** common problem solving patterns

#### Problem Solving

1. Understand The Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve / Simplify
5. Look Back and Refactor

<br>

### Step 1: Understand The Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving problem. That's okay; it's still worth considering the question at this early stage.)
5.  How should I label the important pieces of data that are a part of the problem?

<br>

### Step 2: Concrete Examples

Coming up with examples can help you understand the problem better

Examples also provide sanity checks that your eventual solution works how it should

#### Explore Examples

- Start with Simple Examples
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs

<br>

### Step3: Break It Down

Explicitly write out the steps you need to take. This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

ex> **Write a function which takes in a string and returns couts of each character in the string**

```javascript
function charCount(str){
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters in the string
}

function charCount(str){
    // make object to return at the end
    // loop over string, for each character...
    	// if the char is a number/letter AND is a key in object, add one to count
    	// if the char is a number/letter AND not in object, add it to object and set value to 1
    	// if the char is something else (space, period, etc.) don't do anything
    // return object at the end
}
```

<br>

### Solve Or Simplify

**Solve the problem**! And if you can't, **solve a simpler problem**.

**Simplify**

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty 
- Write a simplified solution
- Then incorporate that difficulty back in

ex> **Write a function which takes in a string and returns couts of each character in the string**

```javascript
function charCount(str){
    // make object to return at the end
    let result = {};
    // loop over string, for each character...
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0){
			result[char]++;
        }
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        else{
            result[char] = 1;
        }
    }
    	// if the char is something else (space, period, etc.) don't do anything
    // return object at the end
    return result
}
```

<br>

### Look Back & Refactor

It is really important to look back your code after the work done! There are some refactoring questions you need to ask yourself.

**Refactoring Questions**

- Can you check the results?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

ex> **Write a function which takes in a string and returns couts of each character in the string**

```javascript
function charCount(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(obj[char] > 0){
                obj[char]++;
            }else{
                obj[char] = 1;
            }
        }
    }
    return obj;
}
```

Refactoring the above code.

```javascript
function charCount(str){
    let obj = {};
    for(let char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
        	obj[char] = ++obj[char] || 1
        }
    }
    return obj;
}
```

Refactoring the above code. (For the situation you don't know the regular expressions)

```javascript
function isAlphaNumber(char){
    let code = char.charCodeAt(0);
    if((code > 47 && code < 58) ||
       (code > 64 && code < 91) ||
       (code > 96 && code < 123)){
      return true;
    }
    return false;
}


function charCount(str){
    let obj = {};
    for(let char of str){
        if(isAlphaNumber(char)){
            // after checking whether the character is alphanumeric, and then lower the character
            char = char.toLowerCase();
        	obj[char] = ++obj[char] || 1
        }
    }
    return obj;
}
```

