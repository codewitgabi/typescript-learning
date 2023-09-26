/**
 * Typeof Type Operator 
 * 
 */

let m = "hello";
let n: typeof m; // n is of type `string`

n = "world";
console.log(n)

const square = (arg: number): number => {
  return arg ** 2
}

console.log(square(4))
console.log(square(8))
console.log(square(10))
console.log(square(19))

/**
 * ReturnType 
 * Gets the actual return type for a function
 */

let SVal: ReturnType<typeof square>;
// SVal = "Hello" // string cannot be assigned to a number type
SVal = 12;