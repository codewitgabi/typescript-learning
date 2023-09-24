"use strict";
/**
 * `public`: used to define attributes that can be accessed outside the class.
 * `private`: used to define attributes that can only be accessed within the main class.
 * `protected`: used to define attributes that can only be accessed wihin the main class and subclasses.
 */
class Human {
    //name: string;
    //age: number;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.name = name;
        this.age = age;
        this.email = email;
    }
    detail() {
        return `${this.name} is ${this.age} and you can contact me on ${this.email}`;
    }
}
const human = new Human("codewitgabi", 20, "codewitgabi222@gmail.com");
// console.log(human.email) // not possible.
// console.log(human.stack) // not possible.
// human.name = "new Name"; // not possible, name is `readonly`.
console.log(human.detail());
class Subclass {
    constructor(canFly, lrSight, others) {
        this.canFly = canFly;
        this.lrSight = lrSight;
        this.others = others;
        this.canFly = canFly;
        this.lrSight = lrSight;
    }
    getMemories(memories) {
        return memories;
    }
}
