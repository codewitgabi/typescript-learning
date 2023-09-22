/**
 * Hello world of `Generics`
 */

const identity = <Type>(arg: Type): Type => {
  return arg;
}

console.log(identity<string>("Hello world"))
console.log(identity<number>(1))
console.log(identity<boolean[]>([true, false]))

/**
 * Generic constraints.
 */

interface Lengthconstraint {
  length: number;
}

const getObjectLength = <Type extends Lengthconstraint>(arg: Type): number => {
  return arg.length
}

console.log(getObjectLength("Hello"))
console.log(getObjectLength([1, 2, 3, 5]))