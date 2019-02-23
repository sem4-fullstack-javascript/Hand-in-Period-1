# Hand-in-Period-1

[Hand-in](https://docs.google.com/document/d/1bAbO2EheHi0F3VN76vawukiCL5hxEydSfuq9vo-Bbgk/edit)

## Explain and Reflect

### Explain the differences between Java and JavaScript. 
*You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.*

||Java|JavaScript|
|-|-|-|
|Compiled vs Interpreted|Java is a compiled programming language.<br>Java is compiled into bytecode and run on a virtual machine|JavaScript is an interpreted scripting language.<br>JavaScript can be interpreted directly by a browser in the syntax it is written.|
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

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.  
It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Node vs Java - similarities
- Runs on a Virtual Machine
- Runs on multiple platforms
- You must include packages before you can use them
- You must obtain packages not included in the base installation before you can use them

npm (short for Node.js package manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.

Many modules is designed to do one thing, the Node echo system encourages to use such modules instead of one module that does everything

### Explain about the Event Loop in Node.js

Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for the event to occur.

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

Although events look quite similar to callbacks, the difference lies in the fact that callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. The functions that listen to events act as Observers. Whenever an event gets fired, its listener function starts executing.

### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

#### Babel

Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).

It makes available all the syntactical sugar that was added to JavaScript with the new ES6 specification, including classes, fat arrows and multiline strings.

#### WebPack

ES6 modules allow the JavaScript developer to break their code up into manageable chunks, but the consequence of this is that those chunks have to be served up to the requesting browser, potentially adding dozens of additional HTTP requests back to the server — something we really ought to be looking to avoid. This is where webpack comes in.

Webpack is a module bundler. Its primary purpose is to process your application by tracking down all its dependencies, then package them all up into one or more bundles that can be run in the browser.

### Explain the purpose of “use strict” and Linters, exemplified with ESLint

The "use strict" directive was new in ECMAScript version 5. It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.

"Use strict" and linters are tools to protect us form ourselves. They warn us when our code contains a syntax error, and tells us if the variable we defined or assigned a value isn't being used. This improves the quality of our code, and may save time we would have use on debuging.

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
```
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
```
Hi
```

### this in JavaScript and how it differs from what we know from Java/.net.

`this` in JavaScript typically refers to the function it is called in, while in Java it refers to the class.

```js
function Car(make,model) {
    this.make = make;
    this.model = model;
    this.show = function(){setTimeout(function(){ //This function gets it's own "this"
        console.log(this.make + ", " + this.model);
    },0)};
}
var car = new Car("Volvo","V70");
car.show();
```
output
```
undefined, undefined
```
if a function is defined as a arrow function it does not get its own `this`
```js
function Car(make,model) {
    this.make = make;
    this.model = model;
    this.show = function(){setTimeout(()=>{ //This function doesn't gets it's own "this"
        console.log(this.make + ", " + this.model);
    },0)};
}
var car = new Car("Volvo","V70");
car.show();
```
output
```
Volvo, V70
```

### Function Closures and the JavaScript Module Pattern

#### Closures

A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.  
The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.

```js
function showName (firstName, lastName) {
    var nameIntro = "Your name is ";
        // this inner function has access to the outer function's variables, including the parameter
    function makeFullName () {
        return nameIntro + firstName + " " + lastName; 
    }
    return makeFullName ();
}
showName ("Michael", "Jackson");
```
output
```
Your name is Michael Jackson
```

#### Module Pattern

The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.  
In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope. What this results in is a reduction in the likelihood of our function names conflicting with other functions defined in additional scripts on the page.

```js
var modularpattern = (function() {
    // your module code goes here
    var sum = 0 ;

    return {
        add:function() {
            sum = sum + 1;
            return sum;
        },
        reset:function() {
            return sum = 0;    
        }  
    }   
}());
console.log(modularpattern.add())
console.log(modularpattern.add())
console.log(modularpattern.reset())
```
output
```
1
2
0
```

### Immediately-Invoked Function Expressions (IIFE)

Immediately-Invoked Functions are functions that are invoked when the script reaches that part of the code.
```js
(function iife(){
    console.log('I am an Immediately-Invoked Function Expression')
})()

!(() => {
 console.log('I too am an Immediately-Invoked Function Expression')
})()
```
output
```
I am an Immediately-Invoked Function Expression
I too am an Immediately-Invoked Function Expression
```

### JavaScripts Prototype

```js
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']
names.prototype.myMap = function(callback){
    let arr = []
    for(let i = 0; i < this.length; i++){
            arr.push(callback(this[i]))
    }
    return arr
}
```
```js
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']
names.prototype.myFilter = function(callback){
    let arr = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}
```

### User-defined Callback Functions (writing your own functions that take a callback)

```js
function myFilter(callback){
    let arr = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}
```
```js
function myMap(callback){
    let arr = []
    for(let i = 0; i < this.length; i++){
            arr.push(callback(this[i]))
    }
    return arr
}
```

### Explain the methods map, filter and reduce

`Array.prototype.map()`: The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.
```js
const numbers = [2, 3, 4, 5]
const mappedNumbers = numbers.map((e) => e * 2)
console.log(mappedNumbers);
```
output
```
[4, 6, 8, 10]
```

`Array.prototype.filter()`: The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
```js
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']
const filteredNames = names.filter(name => name.length <= 3)
console.log(filteredNames)
```
output
```
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
```
14
```

### Provide examples of user-defined reusable modules implemented in Node.js

```js
module.exports.makeCounter = function(){
    let privateCounter = 0
    function changeBy(val){
        privateCounter += val
    }
    return {
        increment: function(){
            changeBy(1)
        },
        decrement: function(){
            changeBy(-1)
        },
        value: function(){
            return privateCounter
        }
    }
}
```

## ES6,7,8... and TypeScript

### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

#### let and const

With ES6 it is now possible to declare a variable that behaves more like we expect them to behave. While a `var` declaration is hoisted to the top of its scope a `let` or a `const` declaration is not hoisted and behaves like we know variable declarations from Java. The difference between a `let` and a `const` is that the `let` can be assigned a new value and the `const` can't.

#### arrow functions

```js
// Defining a function
function addNumbers(a, b) {
    return a + b;
}
// Using anonymous function
var addNumbers = function(a, b) {
    return a + b;
}
// using Arrow Functions with return statement
var addNumbers = (a, b) => {
    return a + b;
}
// Using Arrow Functions without return statements and without curly braces
var addNumbers = (a, b) => a + b; // implicit return statement
```

#### `this`

`this`is a unique keyword whose value changes depending on how it is called. When it is called outside a function, `this` refers to the `Window` object in the browser.
```js
console.log(this) // Window
```
When `this` is called in a function, `this` is set to the global object.
```js
function hello () {
    console.log(this)
}
hello() // Window
```
When `this` is called in an object method, `this` would be the object itself.
```js
let o = {
    sayThis: function() {
        console.log(this)
    }
}

o.sayThis() // o
```
When the function is called as a constructor, `this` refers to the newly constructed object.
```js
function Person (age) {
    this.age = age
}
let greg = new Person(22)
let thomas = new Person(24)
console.log(greg) // this.age = 22
console.log(thomas) // this.age = 24
```
When used in an event listener, `this` is set to the element that fired the event.
```js
let button = document.querySelector('button')
button.addEventListener('click', function() {
    console.log(this) // button
})
```
In arrow functions, `this` never gets bound to a new value, no matter how the function is called. `this` will always be the same `this` value as its surrounding code.

#### rest parameters

```js
function f (x, y, ...rest) {
    return (x + y) * rest.length
}
f(1, 2, "hello", true, 7) === 9
```

#### destructuring

Array Matching
```js
var list = [ 1, 2, 3 ]
var [ a, , b ] = list // a === 1, b === 3
[ b, a ] = [ a, b ] // b === 1, a === 3
```
Object Matching, Shorthand Notation
```js
var { op, lhs, rhs } = getASTNode()
```
Object and Array Matching, Default values
```js
var obj = { a: 1 }
var list = [ 1 ]
var { a, b = 2 } = obj // a === 1, b === 2
var [ x, y = 2 ] = list // x === 1, y === 2
```

#### sets

```js
let s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 2 // no duplicate entries
s.has("hello") === true
for (let key of s.values()) // insertion order
    console.log(key)
```

#### maps

```js
let m = new Map()
let s = Symbol()
m.set("hello", 42)
m.set(s, 34)
m.get(s) === 34
m.size === 2
for (let [ key, val ] of m.entries())
    console.log(key + " = " + val)
```

### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

```js
//  lib/math.js
export function sum (x, y) { return x + y }
export var pi = 3.141593

//  someApp.js
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))

//  otherApp.js
import { sum, pi } from "lib/math"
console.log("2π = " + sum(pi, pi))
```

### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

```js
class Shape {
    color;
    constructor(color) {
        this.color = color
    }
}

class square extends Shape {
    length;
    constructor(color, length) {
        super(color)
        this.length = length
    }
}
```

JavaScript Object inheritance is Prototype based. ES6 classes are just syntactic sugar to make it look similar to OOP languages like Java. Behind the scene, no Class based inheritance but Prototype based inheritance.

### Provide examples with es-next, running in a browser, using Babel and Webpack

[/TODO/](TODO.md)

### Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

Examples can be found [here](https://github.com/sem4-fullstack-javascript/Hand-in-Period-1/tree/master/TypeScriptExercises)

### Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)

Each proposal for an ECMAScript feature goes through the following maturity stages, starting with stage 0. The progression from one stage to the next one must be approved by TC39.

#### Stage 0: strawman

**What is it?** A free-form way of submitting ideas for evolving ECMAScript. Submissions must come either from a TC39 member or a non-member who has registered as a TC39 contributor.

**What’s required?** The document must be reviewed at a TC39 meeting (source) and is then added to the page with stage 0 proposals.

#### Stage 1: proposal

**What is it?** A formal proposal for the feature.

**What’s required?** A so-called champion must be identified who is responsible for the proposal. Either the champion or a co-champion must be a member of TC39 (source). The problem solved by the proposal must be described in prose. The solution must be described via examples, an API and a discussion of semantics and algorithms. Lastly, potential obstacles for the proposal must be identified, such as interactions with other features and implementation challenges. Implementation-wise, polyfills and demos are needed.

**What’s next?** By accepting a proposal for stage 1, TC39 declares its willingness to examine, discuss and contribute to the proposal. Going forward, major changes to the proposal are expected.

#### Stage 2: draft

**What is it?** A first version of what will be in the specification. At this point, an eventual inclusion of the feature in the standard is likely.

**What’s required?** The proposal must now additionally have a formal description of the syntax and semantics of the feature (using the formal language of the ECMAScript specification). The description should be as complete as possible, but can contain todos and placeholders. Two experimental implementations of the feature are needed, but one of them can be in a transpiler such as Babel.

**What’s next?** Only incremental changes are expected from now on.

#### Stage 3: candidate

**What is it?** The proposal is mostly finished and now needs feedback from implementations and users to progress further.

**What’s required?** The spec text must be complete. Designated reviewers (appointed by TC39, not by the champion) and the ECMAScript spec editor must sign off on the spec text. There must be at least two spec-compliant implementations (which don’t have to be enabled by default).

**What’s next?** Henceforth, changes should only be made in response to critical issues raised by the implementations and their use.

#### Stage 4: finished

**What is it?** The proposal is ready to be included in the standard.

**What’s required?** The following things are needed before a proposal can reach this stage:

- Test 262 acceptance tests (roughly, unit tests for the language feature, written in JavaScript).
- Two spec-compliant shipping implementations that pass the tests.
- Significant practical experience with the implementations.
- The ECMAScript spec editor must sign off on the spec text.

**What’s next?** The proposal will be included in the ECMAScript specification as soon as possible. When the spec goes through its yearly ratification as a standard, the proposal is ratified as part of it.

## Callbacks, Promises and async/await

### Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.  
A `Promise` is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.  
A `Promise` is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.

A pending promise can either be *fulfilled* with a value, or *rejected* with a reason (error). When either of these options happens, the associated handlers queued up by a promise's `then` method are called.  
If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

As the `Promise.prototype.then()` and `Promise.prototype.catch()` methods return promises, they can be chained.

#### Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")

**Pyramid of Doom**
```js
doSomething(function(responseOne) {
    doSomethingElse(responseOne, function(responseTwo, err) {
        if (err) { handleError(err); }
        doMoreStuff(responseTwo, function(responseThree, err) {
            if (err) { handleAnotherError(err); }
            doFinalThing(responseThree, function(err) {
                if (err) { handleAnotherError(err); }
                // Complete
            }); // end doFinalThing
        }); // end doMoreStuff
    }); // end doSomethingElse
}); // end doSomething
```
**Solution**
```js
doSomething()
.then(doSomethingElse)
.catch(handleError)
.then(doMoreStuff)
.then(doFinalThing)
.catch(handleAnotherError)
```

#### Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

[/TODO/](TODO.md)

#### Example(s) that demonstrate how to implement our own promise-solutions.

```js
function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) { 
          resolve(req.response); /* PROMISE RESOLVED */
      } else { 
          reject(Error(req.statusText)); /* PROMISE REJECTED */
      }
    };
    req.onerror = function() { reject(Error("Network Error")); };
    req.send();
  });
}
```

#### Example(s) that demonstrate error handling with promises

Since both the success and error functions are optional, we can split them into two `.then()`s for better readability.

```js
get(url)
.then(function(response) {
    /* successFunction */
}, undefined)
.then(undefined, function(err) {
    /* errorFunction */
})
```
To make things even more readable, we make use of the `.catch()` method, which is a shorthand for a `.then(undefined, errorFunction)`.
```js
get(url)
.then(function(response) {
    /* successFunction */
})
.catch(function(err) {
    /* errorFunction */
})
```

### Explain about JavaScripts async/await
*How it relates to promises and reasons to use it compared to the plain promise API.*

Async Await is syntactic sugar that changes the .then notation to more readable syntax. Instead of making a . connection between the promises the keyword awaitcan be used instead.

### Provide examples to demonstrate:

#### Why this often is the preferred way of handling promises

```js
function async myFunc() {
    const res = await fetch(...)
    const json = res.json()
    // ...
}
```

#### Error handling with async/await

```js
function async myFunc() {
    try {
        const res = await fetch(...)
        const json = res.json()
        // ...
    } catch (err) {
        new Error(err)
    } 
}
```

#### Serial or parallel execution with async/await.

[/TODO/](TODO.md)