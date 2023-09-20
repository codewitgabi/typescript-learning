/**
 * RULES FOR TYPEHINTING
 * Where the type is obvious, type annotation is not necessary.
 * const age: number = 20; ❌
 * const age = 20; ✅ 
 */

function greet(person: string, date: Date): string {
  return `Hello ${person} today is ${date.toDateString()}`;
}

console.log(greet("Michael", new Date()));

/**
 * The primitives (string, number, boolean)
 */

let str: string = "Hello world";
let int: number = 20;
let truthy: boolean = false;

/**
 * Arrays
 */

let numArr: Array<number> = [1, 2, 3, 6];
// or
let numArr2: number[] = [1, 2, 3, 6];

let strArr: Array<string> = ["one", "two"];
// or
let strArr2: string[] = ["one", "two"];

let boolArr: Array<boolean> = [true, false, true];
// or
let boolArr2: boolean[] = [true, false, true];

let numOrStrArr: Array<(number | string)> = [2, 7, "one", 8];
// or
let numOrStrArr2: (number | string)[] = ["one", 7, 0];


/**
 * Any
 * Using `any` disables all further type checking, and it is assumed
 * you know the environment better than TypeScript.
 */

const dict: any = {
  a: 6,
  call: () => {
    console.log("Call");
  }
};

dict.call()
console.log(dict.name)


/**
 * Return type annotations.
 **/

async function foo(): Promise<number> {
  return 15;
}

/**
 * Contextual typing
 **/

const names = ["Gabi", "Mike", "Eze"];
names.forEach((name) => {
  // typescript already knows the type of the the items. No need to annotate.
  console.log(name.toUpperCase())
})

/**
 * Object Types
 **/

function printCoord(pt: { x: number; y: number; z?: number}) {
  // `;` or `,` can be used to separate values.
  // ? shows that it is an optional value
  console.log(`Value for x coordinate is ${pt.x}`)
  console.log(`Value for y coordinate is ${pt.y}`)
  console.log(`Value for z coordinate is ${pt?.z}`)
}

printCoord({ x: 6, y: 2 });
printCoord({ x: 6, y: 2, z: 9 });

/**
 * Union Types
 **/

let ids = ["12", 76, 5, "10"];

//ids.push(true); // throws an error. Annotation for ids is (string | number)

const printId = (id: number | string) => {
  // console.log(id.toLowerCase()); // throws an error
  console.log(typeof id === "string" ? id.toLowerCase() : id);
}

const printStudents = (students: Array<string> | string) => {
  console.log(Array.isArray(students) ? students : students.split(", "))
}

printStudents(["Gabi", "Jennifer", "Jane"]);
printStudents("Gabi, Jennifer, Jane");

/**
 * Type Aliases and Interfaces
 * Types cannot be redeclared but an Interface can. 
 * Types use & to extend 
 * Interfaces use the `extends` keyword.
 */

type Point = {
  x: number,
  y: number,
  z?: number
};

const printCoord2 = (point: Point) => {
  console.log("x", point.x)
  console.log("x", point.y)
  if (point.z) {
    console.log("z", point.z)
  }
};

type ID = string | number;
type anyType = any;

interface AnimalInterface {
  name: string
};

type AnimalType = {
  name: string
};

// Extending types and interfaces

interface BearInterface extends AnimalInterface {
  age: number,
  kids: Array<string>
}

type BearType = AnimalType & {
  age: number,
  kids: string[]
}

// Redeclaration
interface Animal {
  isMammal: boolean,
  maxAge: number
}

/*
type Animal = {
  isMammal: boolean,
  maxAge: number
};
*/ // produces an error.

/**
 * Type Assertions 
 * In some occasions where certain types cannot be used with other types; say string and integer addition, the `as` keyword is used to `assert` to that type. 
 * Where they cannot be changed directly, double assertion is used.
 */

type num = number;
type strOrNum = string | number;
type strLit = "Howdy";

let a: num = 12;
let b: strOrNum = "hello";
let c: strLit = "Howdy";

let d = a as strOrNum // d can now take both string and number types.
d = 5;
d = "5"

let e = b as strLit // will take default b but can only be modified to `Howdy`
console.log("e is", e)

let repoLink = document.querySelector("#repo-link") as HTMLAnchorElement;

repoLink.href = "https://github.com/codewitgabi/TypeScript";

let randomLink = <HTMLAnchorElement>document.getElementById("null-link");
randomLink.href = "#!";
/**
 * Literal Types 
 * Similar to const in that the values cannot be changed.
 * Act like enums. 
 * Can be of type number or string or boolean 
 * These types can be mixed.
 */

let fixedVar: "fixed" = "fixed";
// fixedVar = "unfixed"; // throws an error.

function fontWeight(weight: "100" | "200" | "300" | "400" | "500" | "600" | "700") {
  return weight;
}

console.log(fontWeight("700"))
// console.log(fontWeight("900")) // throws am error.

function fontSize(size: 10 | 20 | 30 | true) {
  return size
}

console.log(fontSize(20))
console.log(fontSize(true))

/**
 * Tuples 
 * They are fixed types. 
 * Datasets must take the order and length of types specified.
 */

type Tuple = [boolean, number, string];
let tup: Tuple = [true, 12, "mickey"];
let tup2: Tuple = [true, 12, "10"];

/**
 * Enums
 */

enum Calendar {
  Jan = 31,
  Feb = 28,
  Mar = 31,
  Apr = 30,
  May = 31,
  Jun = 30,
  Jul = 31,
  Aug = 31,
  Sep = 30,
  Oct = 31,
  Nov = 30,
  Dec = 31
};

console.log(Calendar)
console.log(`The month of January has ${Calendar.Jan} days.`)

/**
 * Never Type 
 * Returned when a function will never return a type.
 * Say you throw an error or an infinite loop. 
 * Remember a function returns void when it doesn't explicitly return a value.
 */

function neverFunc(): never {
  throw new Error("A never func")
}


function infiniteLoop(): never {
  let i = 0;
  while (true) {
    i++;
    console.log(i)
  }
}