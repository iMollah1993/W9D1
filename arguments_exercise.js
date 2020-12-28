function sum(...callArgs) {
    // let nums = [];

    // return function accumulator(num) {
        // nums.push(num);
        // console.log(nums.reduce((acc, ele) => acc + ele));
    // }

    return callArgs.reduce((acc, ele) => acc + ele);
}


Function.prototype.myBind = function (ctx, ...bindArgs) {
    const fn = this;

    return function (...callArgs) {
        return fn.apply(ctx, bindArgs.concat(callArgs));
    };
};