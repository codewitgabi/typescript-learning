interface Person {
  readonly name: string;
  age: number;
  email?: string;
}

function greetPerson(person: Person): string {
  // person.name = "Mike" // not possible
  return `Hello ${person.name}`;
}

console.log(greetPerson({ name: "michael", age: 12 }))

/**
 * Using the `readonly` modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed. It just means the property itself can’t be re-written to.
 */

interface Contact {
  readonly home: { address: string, phoneNo: string }
}

function contactModifier(contact: Contact): string {
  contact.home.address = "Modified Address";
  return contact.home.address;
}

console.log(contactModifier({ home: { address: "My street", phoneNo: "09020617734" }}))


/**
 * Extending Types 
 * I'll call it type inheritance.
 */

interface Animal2 {
  name: string;
  age: number;
  maxAge: number;
  types: string[];
}

interface Mammal extends Animal2 {
  kind: "High Intelligy" | "Low Intelligence";
}

const dog: Mammal = {
  name: "Dog",
  age: 5,
  maxAge: 15,
  types: ["Rottweiler", "Bull", "Dalmatian"],
  kind: "Low Intelligence"
}

console.log(dog);

/**
 * Intersection Types. (&)
 * Only allowed with interfaces and not type aliases. 
 * Similar to `extended types`. i.e joins two or more interfaces.
 */

interface One {
  kind: "One" | 1;
}
interface Two {
  id: string | number;
}

type OneAndTwo = One & Two;

let digit: OneAndTwo;
digit = {
  kind: 1,
  id: "Hn6"
}


/**
 * Generic Object Types. 
 * Where an object can hold different values but using the `any` or `unknown` keyword doesn't make sense, a `Generic` type is used.
 * Generic `X` helps to write reusable code.
 */

interface Box<Type> {
  contents: Type
}

let box: Box<string>;
box = { contents: "Hello world" }
console.log(box)

let box2: Box<string[]>;
box2 = { contents: ["Hello", "World"] }
console.log(box2)

type TypeOrNull<Type> = Type | null;

let g: TypeOrNull<string> = "12";
let h: TypeOrNull<string | number>;

h = 10;
h = "10";

/**
 * ReadonlyArray Type 
 * Similar to the below syntax 
 * let a: readonly Array<Type>
 */

let roa: ReadonlyArray<number>;

roa = [1, 7, 8, 9];
// roa[0] = 1; // roa is immutable.

type ReadonlyArrayofString = readonly string[];


/**
 * Tuples 
 * Refer to types.ts for basic tuples
 */

function readOnlyTuple(tup: readonly [...data: number[], string, boolean]) {
  return tup
}

console.log(readOnlyTuple([2, 6, 8, 9, "str", true]))

/**
 * Index Signatures. 
 * They are used to build dynamic objects where we don't know all the keys to be passed in our object.
 */

interface Signature {
  [index: string]: number | string | Array<any>;
  name: string;
  age: number;
}

let sig: Signature;
sig = {
  name: "codewitgabi",
  age: 10,
  stack: [
    "Python", "JavaScript", "Django", "TypeScript", "Nodejs", "TailwindCSS", "etc"
  ]
} // valid

for (let data in sig) {
  console.log(data, sig[data])
}