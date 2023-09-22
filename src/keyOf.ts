/**
 * Keyof Type Operator 
 * The keyof operator takes an object type and produces a string or numeric literal union of its keys. 
 * I.e uses the keys of JavaScript objects to form `literal types`.
 */

interface Point3 {
  x: number;
  y: number;
  z?: number;
  7: number
}

type pointKeyLiteral = keyof Point3;
// similar to 
type pointKeyLiteral2 = "x" | "y" | "z" | 7;

let k: pointKeyLiteral;

k = "x";
k = "y";
k = 7;
k = "z";

// k can only have the above values.