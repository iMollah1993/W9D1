function sum(...callArgs) {
    // let nums = [];

    // return function accumulator(num) {
        // nums.push(num);
        // console.log(nums.reduce((acc, ele) => acc + ele));
    // }

    return callArgs.reduce((acc, ele) => acc + ele);
}

//this is the bind function.
Function.prototype.myBind = function (ctx, ...bindArgs) {
    const fn = this;

    // // return function (...callArgs) {
    //     return fn.apply(ctx, bindArgs.concat(callArgs));
    // };\

    return fn.apply(ctx, ...bindArgs);
};

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");