"use strict";
function greetUser(cb) {
    cb("coder");
}
function greetTool(userName) {
    console.log(`Good morning ${userName}`);
}
;
function doSomething(fn) {
    return fn.desc + " returned " + fn(8);
}
function inFunc(arg) {
    return arg > 10;
}
inFunc.desc = "Inner func";
console.log(doSomething(inFunc));
/**
 * Generic Functions
 * Used when the return type relates to the variable type passed to a function.
 * Type parameters should be used at least twice.
 */
function firstElem(arr) {
    return arr[0];
}
console.log(typeof firstElem([2, true, "any", 9]));
console.log(typeof firstElem([false, true, "any", 9]));
function map(arr, fn) {
    return arr.map(fn);
}
console.log(map(["1", "2", "4"], (n) => parseInt(n)));
function findLongest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
console.log(findLongest("Hello", "Hell"));
console.log(findLongest([0, 9, 8, 6, 5, 8], []));
function goodGen(name) {
    return "Hello " + name;
}
// Only one param, no need for a generic function
function badGen(name) {
    return "Hello " + name;
}
function sumNumbers(a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}
console.log(sumNumbers(7, 5));
console.log(sumNumbers(8, 9, 12));
const restSum = (a, b, ...nums) => {
    if (nums.length > 0) {
        return a + b + nums.reduce((i, j) => i + j);
    }
    return a + b;
};
console.log(restSum(2, 6, 8, 3));
console.log(restSum(2, 8));
