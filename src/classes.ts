/**
 * `public`: used to define attributes that can be accessed outside the class. 
 * `private`: used to define attributes that can only be accessed within the main class. 
 * `protected`: used to define attributes that can only be accessed wihin the main class and subclasses.
 */

class Human {
  //name: string;
  //age: number;
  
  constructor(
    public readonly name: string,
    public age: number,
    private email: string
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  public detail(): string {
    return `${this.name} is ${this.age} and you can contact me on ${this.email}`
  }
}


const human = new Human("codewitgabi", 20, "codewitgabi222@gmail.com");

// console.log(human.email) // not possible.
// console.log(human.stack) // not possible.

// human.name = "new Name"; // not possible, name is `readonly`.


console.log(human.detail());

/**
 * Class Heritage 
 * `implements` clause is used for inheriting `interface`s.
 * All the properties of the interface must be in the class. Except it is optional.
 * Other JavaScript clauses like `extends`, `static`, `get` and `set` remains the same.
 */
interface Abilities {
  canFly: boolean;
  lrSight: boolean;
  others?: string[];
  getMemories(memories: string[]): string[];
}

class Subclass implements Abilities {
  constructor(
    public canFly: boolean,
    public lrSight: boolean,
    public others: string[]
  ) {
    this.canFly = canFly;
    this.lrSight = lrSight;
  }
  
  public getMemories(memories: string[]): string[] {
    return memories;
  }
}
