/**
 * Indexed Access Types. 
 * We can use an indexed access type to look up a specific property on another type
 */

interface PersonI {
  age: number;
  name: string;
  alive: boolean;
};
type Age = PersonI["age"]; // has type `number`

// The indexing type is itself a type, so we can use `unions`, `keyof`, or other types entirely:

type Age2 = PersonI["age" | "name" | "alive"] // has type `number` | `string` | `boolean`
