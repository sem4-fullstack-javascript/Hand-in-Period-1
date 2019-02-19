# Hand-in-Period-1

## Explain and Reflect

- Explain the differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

    ||Java|JavaScript|
    |-|-|-|
    |Compiled vs Interpreted|Java is considered a compiled programming language.<br>Java is compiled into bytecode and run on a virtual machine|JavaScript is considered an interpreted scripting language.<br>JavaScript can be interpreted directly by a browser in the syntax it is written.|
    |Static vs Dynamic Type Checking|Java uses static type checking, where the type of a variable is checked at compile-time. The programmer must specify the type (integer, double, string, etc.) of any variable they create.|JavaScript, like most scripting languages, uses dynamic typing, where type safety is verified at runtime. It is not required for a programmer to specify the type of any variable they create.|
    |Concurrency|Java makes use of multiple threads to perform tasks in parallel.|JavaScript, particularly as it exists as Node.js in server-side applications, handles concurrency on one main thread of execution via a queue system called the event loop, and a forking system called Node Clustering.|
    |Class Based vs Prototype Based|Java follows class based inheritance—a top down, hierarchical, class-based relationship whereby properties are defined in a class and inherited by an instance of that class.|In JavaScript, inheritance is prototypal—all objects can inherit directly from other objects. Hierarchy is accomplished in JavaScript by assigning an object as a prototype with a constructor function.|

- Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) browsers
    - Babel: 
    - Webpack: 
- Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
- Explain about the Event Loop in Node.js
- Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
- Explain the purpose of “use strict” and Linters, exemplified with ESLint

## Explain using sufficient code examples the following features in JavaScript

- Variable/function-Hoisting
- this in JavaScript and how it differs from what we know from Java/.net.
- Function Closures and the JavaScript Module Pattern
- Immediately-Invoked Function Expressions (IIFE)
- JavaScripts Prototype
- User-defined Callback Functions (writing your own functions that take a callback)
- Explain the methods map, filter and reduce
- Provide examples of user-defined reusable modules implemented in Node.js

## ES6,7,8... and TypeScript

- Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.
- Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
- Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
- Provide examples with es-next, running in a browser, using Babel and Webpack
- Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
- Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)

## Callbacks, Promises and async/await

- Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:
    - Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")
    - Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel
    - Example(s) that demonstrate how to implement our own promise-solutions.
    - Example(s) that demonstrate error handling with promises
- Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
- Provide examples to demonstrate:
    - Why this often is the preferred way of handling promises
    - Error handling with async/await
    - Serial or parallel execution with async/await.