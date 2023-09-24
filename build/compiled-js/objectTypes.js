"use strict";
function greetPerson(person) {
    // person.name = "Mike" // not possible
    return `Hello ${person.name}`;
}
console.log(greetPerson({ name: "michael", age: 12 }));
function contactModifier(contact) {
    contact.home.address = "Modified Address";
    return contact.home.address;
}
console.log(contactModifier({ home: { address: "My street", phoneNo: "09020617734" } }));
const dog = {
    name: "Dog",
    age: 5,
    maxAge: 15,
    types: ["Rottweiler", "Bull", "Dalmatian"],
    kind: "Low Intelligence"
};
console.log(dog);
let digit;
digit = {
    kind: 1,
    id: "Hn6"
};
let box;
box = { contents: "Hello world" };
console.log(box);
let box2;
box2 = { contents: ["Hello", "World"] };
console.log(box2);
let g = "12";
let h;
h = 10;
h = "10";
/**
 * ReadonlyArray Type
 * Similar to the below syntax
 * let a: readonly Array<Type>
 */
let roa;
roa = [1, 7, 8, 9];
/**
 * Tuples
 * Refer to types.ts for basic tuples
 */
function readOnlyTuple(tup) {
    return tup;
}
console.log(readOnlyTuple([2, 6, 8, 9, "str", true]));
let sig;
sig = {
    name: "codewitgabi",
    age: 10,
    stack: [
        "Python", "JavaScript", "Django", "TypeScript", "Nodejs", "TailwindCSS", "etc"
    ]
}; // valid
for (let data in sig) {
    console.log(data, sig[data]);
}
