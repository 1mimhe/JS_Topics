// Implementation Details
let privately = 5;

// Public interface => because we export those
let publicly = 3;

class Class1 {
    static method1() {
        console.log('method1');
    }
}

// Public interface => because we export that
class Class2 {
    static method2() {
        console.log('method2');
    }
}

// module.exports is the keyword we use to declare all we want to export from that file.
// module.exports.Class1 = Class1;
// module.exports.Class2 = Class2;
// or
module.exports = {Class1, Class2, publicly};

// if we have just one module, we can do it => module.exports = Class1;