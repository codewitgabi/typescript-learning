"use strict";
/**
 * RULES FOR TYPEHINTING
 * Where the type is obvious, type annotation is not necessary.
 * const age: number = 20; ❌
 * const age = 20; ✅
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function greet(person, date) {
    return `Hello ${person} today is ${date.toDateString()}`;
}
console.log(greet("Michael", new Date()));
/**
 * The primitives (string, number, boolean)
 */
let str = "Hello world";
let int = 20;
let truthy = false;
/**
 * Arrays
 */
let numArr = [1, 2, 3, 6];
// or
let numArr2 = [1, 2, 3, 6];
let strArr = ["one", "two"];
// or
let strArr2 = ["one", "two"];
let boolArr = [true, false, true];
// or
let boolArr2 = [true, false, true];
let numOrStrArr = [2, 7, "one", 8];
// or
let numOrStrArr2 = ["one", 7, 0];
/**
 * Any
 * Using `any` disables all further type checking, and it is assumed
 * you know the environment better than TypeScript.
 */
const dict = {
    a: 6,
    call: () => {
        console.log("Call");
    }
};
dict.call();
console.log(dict.name);
/**
 * Return type annotations.
 **/
function foo() {
    return __awaiter(this, void 0, void 0, function* () {
        return 15;
    });
}
/**
 * Contextual typing
 **/
const names = ["Gabi", "Mike", "Eze"];
names.forEach((name) => {
    // typescript already knows the type of the the items. No need to annotate.
    console.log(name.toUpperCase());
});
/**
 * Object Types
 **/
function printCoord(pt) {
    // `;` or `,` can be used to separate values.
    // ? shows that it is an optional value
    console.log(`Value for x coordinate is ${pt.x}`);
    console.log(`Value for y coordinate is ${pt.y}`);
    console.log(`Value for z coordinate is ${pt === null || pt === void 0 ? void 0 : pt.z}`);
}
printCoord({ x: 6, y: 2 });
printCoord({ x: 6, y: 2, z: 9 });
/**
 * Union Types
 **/
let ids = ["12", 76, 5, "10"];
//ids.push(true); // throws an error. Annotation for ids is (string | number)
const printId = (id) => {
    // console.log(id.toLowerCase()); // throws an error
    console.log(typeof id === "string" ? id.toLowerCase() : id);
};
const printStudents = (students) => {
    console.log(Array.isArray(students) ? students : students.split(", "));
};
printStudents(["Gabi", "Jennifer", "Jane"]);
printStudents("Gabi, Jennifer, Jane");
const printCoord2 = (point) => {
    console.log("x", point.x);
    console.log("x", point.y);
    if (point.z) {
        console.log("z", point.z);
    }
};
;
let a = 12;
let b = "hello";
let c = "Howdy";
let d = a; // d can now take both string and number types.
d = 5;
d = "5";
let e = b; // will take default b but can only be modified to `Howdy`
console.log("e is", e);
let repoLink = document.querySelector("#repo-link");
repoLink.href = "https://github.com/codewitgabi/TypeScript";
let randomLink = document.getElementById("null-link");
randomLink.href = "#!";
/**
 * Literal Types
 * Similar to const in that the values cannot be changed.
 * Act like enums.
 * Can be of type number or string or boolean
 * These types can be mixed.
 */
let fixedVar = "fixed";
// fixedVar = "unfixed"; // throws an error.
function fontWeight(weight) {
    return weight;
}
console.log(fontWeight("700"));
// console.log(fontWeight("900")) // throws am error.
function fontSize(size) {
    return size;
}
console.log(fontSize(20));
console.log(fontSize(true));
let tup = [true, 12, "mickey"];
let tup2 = [true, 12, "10"];
/**
 * Enums
 */
var Calendar;
(function (Calendar) {
    Calendar[Calendar["Jan"] = 31] = "Jan";
    Calendar[Calendar["Feb"] = 28] = "Feb";
    Calendar[Calendar["Mar"] = 31] = "Mar";
    Calendar[Calendar["Apr"] = 30] = "Apr";
    Calendar[Calendar["May"] = 31] = "May";
    Calendar[Calendar["Jun"] = 30] = "Jun";
    Calendar[Calendar["Jul"] = 31] = "Jul";
    Calendar[Calendar["Aug"] = 31] = "Aug";
    Calendar[Calendar["Sep"] = 30] = "Sep";
    Calendar[Calendar["Oct"] = 31] = "Oct";
    Calendar[Calendar["Nov"] = 30] = "Nov";
    Calendar[Calendar["Dec"] = 31] = "Dec";
})(Calendar || (Calendar = {}));
;
console.log(Calendar);
console.log(`The month of January has ${Calendar.Jan} days.`);
/**
 * Never Type
 * Returned when a function will never return a type.
 * Say you throw an error or an infinite loop.
 * Remember a function returns void when it doesn't explicitly return a value.
 */
function neverFunc() {
    throw new Error("A never func");
}
function infiniteLoop() {
    let i = 0;
    while (true) {
        i++;
        console.log(i);
    }
}
