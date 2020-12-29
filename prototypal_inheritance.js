// function Surrogate() {};
// Surrogate.prototype = SuperClass.prototype;
// Subclass.prototype = new Surrogate();
// // constructor looks as the subclass constructor
// Subclass.prototype.constructor = Subclass;


Function.prototype.inherits = function(Parent) {
    const fn = this;

    // define surrogate function
    function Surrogate() {};
    // 
    Surrogate.prototype = Parent.prototype;
    fn.prototype = new Surrogate();
    fn.prototype.constructor = fn;
}