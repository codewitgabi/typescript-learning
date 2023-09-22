"use strict";
/**
 * Hello world of `Generics`
 */
const identity = (arg) => {
    return arg;
};
console.log(identity("Hello world"));
console.log(identity(1));
console.log(identity([true, false]));
const getObjectLength = (arg) => {
    return arg.length;
};
console.log(getObjectLength("Hello"));
console.log(getObjectLength([1, 2, 3, 5]));
