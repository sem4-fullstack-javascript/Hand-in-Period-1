https://sem4-fullstack-javascript.github.io/Hand-in-Period-1/

# Hand-in-Period-1

https://docs.google.com/document/d/1bAbO2EheHi0F3VN76vawukiCL5hxEydSfuq9vo-Bbgk/edit

## Explain and Reflect

### Explain the differences between Java and JavaScript. 
*You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.*

||Java|JavaScript|
|-|-|-|
|Compiled vs Interpreted|Java is considered a compiled programming language.<br>Java is compiled into bytecode and run on a virtual machine|JavaScript is considered an interpreted scripting language.<br>JavaScript can be interpreted directly by a browser in the syntax it is written.|
|Static vs Dynamic Type Checking|Java uses static type checking, where the type of a variable is checked at compile-time. The programmer must specify the type (integer, double, string, etc.) of any variable they create.|JavaScript, like most scripting languages, uses dynamic typing, where type safety is verified at runtime. It is not required for a programmer to specify the type of any variable they create.|
|Concurrency|Java makes use of multiple threads to perform tasks in parallel.|JavaScript, particularly as it exists as Node.js in server-side applications, handles concurrency on one main thread of execution via a queue system called the event loop, and a forking system called Node Clustering.|
|Class Based vs Prototype Based|Java follows class based inheritance—a top down, hierarchical, class-based relationship whereby properties are defined in a class and inherited by an instance of that class.|In JavaScript, inheritance is prototypal—all objects can inherit directly from other objects. Hierarchy is accomplished in JavaScript by assigning an object as a prototype with a constructor function.|

### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript.
*What does it require to use these technologies: In our backend with Node and in (many different) browsers*

#### ES6 (es2015) + ES7

ES6 and ES7 is newer implementations of JavaScript, which implements some new features, like async/await. Our browsers don't understand these new implementations, which means that in order for the browser to understand our code, it has to be transpiled into ES5, which all modern browser understand. The most used transpilers for JavaScript is Babel or Webpack.

#### TypeScript

TypeScript is a strict syntactical superset of JavaScript, and adds optional static typing to the language. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution. TypeScript supports definition files that can contain type information of existing JavaScript libraries, this enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. The TypeScript compiler, named `tsc`, is written in TypeScript. As a result, it can be compiled into regular JavaScript and can then be executed in any JavaScript engine (e.g. a browser). The compiler package comes bundled with a script host that can execute the compiler. It is also available as a Node.js package that uses Node.js as a host.

### Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.



### Explain about the Event Loop in Node.js

### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

### Explain the purpose of “use strict” and Linters, exemplified with ESLint

## Explain using sufficient code examples the following features in JavaScript

### Variable/function-Hoisting

Hoisting means lifting up. In JavaScript a `var` declaration is hoisted to the top of its scope.
```js
console.log(x)
var x = 10
```
is equivalent to
```js
var x
console.log(x)
x = 10
```
output
```js
undefined
```
The declaration is hoisted not the assignment.  
Function declarations is also hoisted to the top of its scope
```js
sayHi()
function sayHi(){
    console.log('Hi')
}
```
is equivalent to
```js
function sayHi(){
    console.log('Hi')
}
sayHi()
```
output
```js
Hi
```

### this in JavaScript and how it differs from what we know from Java/.net.

### Function Closures and the JavaScript Module Pattern

### Immediately-Invoked Function Expressions (IIFE)

Immediately-Invoked Functions are functions that are invoked when the script reaches that part of the code.
```js
(function iife(){
    console.log('I am an Immediately-Invoked Function Expression')
})()

(() => {
 console.log('I too am an Immediately-Invoked Function Expression')
})()
```

### JavaScripts Prototype

### User-defined Callback Functions (writing your own functions that take a callback)

### Explain the methods map, filter and reduce

`Array.prototype.map()`: The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.
```js
const numbers = [2, 3, 4, 5]
const mappedNumbers = numbers.map((e) => e * 2)
console.log(mappedNumbers);
```
output
```js
[4, 6, 8, 10]
```

`Array.prototype.filter()`: The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
```js
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']
const filteredNames = names.filter(name => name.length <= 3)
console.log(filteredNames)
```
output
```js
["Jan", "Bo"]
```

`Array.prototype.reduce()`: The `reduce()` method executes a reducer function (that you provide) on each member of the array resulting in a single output value.  

The reducer function takes four arguments:

1. Accumulator (acc)
2. Current Value (cur)
3. Current Index (idx)
4. Source Array (src)

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.
```js
const numbers = [2, 3, 4, 5]
const reducer = (acc, cur, idx, src) => accumulator + currentValue)
console.log(numbers.reduce(reducer);
```
output
```js
14
```

### Provide examples of user-defined reusable modules implemented in Node.js

## ES6,7,8... and TypeScript

### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

### Provide examples with es-next, running in a browser, using Babel and Webpack

### Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

### Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)

## Callbacks, Promises and async/await

### Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:

#### Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")

#### Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

#### Example(s) that demonstrate how to implement our own promise-solutions.

#### Example(s) that demonstrate error handling with promises

### Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.

### Provide examples to demonstrate:

#### Why this often is the preferred way of handling promises

#### Error handling with async/await

#### Serial or parallel execution with async/await.
