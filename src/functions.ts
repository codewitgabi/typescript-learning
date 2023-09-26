type voidFunction = (a: string) => void;

function greetUser(cb: voidFunction) {
  cb("coder");
}

function greetTool(userName: string) {
  console.log(`Good morning ${userName}`);
}

/**
 * Call Signatures. 
 * They allow you to add properties to functions.
 */

interface DescribeableFunc {
  desc: string;
  (arg: number): boolean
};

function doSomething(fn: DescribeableFunc) {
  return fn.desc + " returned " + fn(8);
}

function inFunc(arg: number) {
  return arg > 10;
}

inFunc.desc = "Inner func"

console.log(doSomething(inFunc))

/**
 * Generic Functions 
 * Used when the return type relates to the variable type passed to a function. 
 * Type parameters should be used at least twice.
 */

function firstElem<Type>(arr: Type[]): Type {
  return arr[0];
}

console.log(typeof firstElem([2, true, "any", 9]))
console.log(typeof firstElem([false, true, "any", 9]))


function map<Input, Output>(arr: Input[], fn: (arg: Input) => Output): Output[] {
  return arr.map(fn);
}

console.log(map(["1", "2", "4"], (n) => parseInt(n)))


function findLongest<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length > b.length) {
    return a;
  } else {
    return b
  }
}

console.log(findLongest("Hello", "Hell"))
console.log(findLongest([0, 9, 8, 6, 5, 8], []))

function goodGen(name: string): string {
  return "Hello " + name;
}
// Only one param, no need for a generic function
function  badGen<Str extends string>(name: Str) {
  return "Hello " + name;
}


/**
 * Function Overloading 
 * Where a function can be used in various forms, depending on mumber of arguments passed.
 * Similar to passing optional parameters cause workflow is the same.
 */

function sumNumbers(a: number, b:number): number;
function sumNumbers(a: number, b:number, c:number): number;

function sumNumbers(a: number, b: number, c?:number): number {
  if (c !== undefined) {
    return a + b +c;
  }
  return a + b;
}

console.log(sumNumbers(7, 5))
console.log(sumNumbers(8, 9, 12))


const restSum = (a: number, b: number, ...nums: Array<number>) => {
  if (nums.length > 0) {
    return a + b + nums.reduce((i, j) => i + j)
  }
  return a + b
}

console.log(restSum(2, 6, 8, 3))
console.log(restSum(2, 8))