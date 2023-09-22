"use strict";
/**
 * Typeof Type Operator
 *
 */
let m = "hello";
let n; // n is of type `string`
n = "world";
console.log(n);
const square = (arg) => {
    return arg ** 2;
};
console.log(square(4));
console.log(square(8));
console.log(square(10));
console.log(square(19));
/**
 * ReturnType
 * Gets the actual return type for a function
 */
let SVal;
// SVal = "Hello" // string cannot ne assigned to a number type
SVal = 12;
