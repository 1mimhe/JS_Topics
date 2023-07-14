
function a() {
    try {
        let x = 1;
        console.log('exe1');
        if (x === 1) {
            console.log("exe2");
            // The code is executed until return 1;
            // But first it executes finally and then returns to execute return 1;
            return 1;
        }
    } finally {
        return 2;
    }
}
console.log(a());

// we can throw a string
// typeof e: string
try {
    throw "Oops; this is not an Error object";
} catch (e) {
    if (!(e instanceof Error)) {
        e = new Error(e);
    }
    console.error(e.message);
    console.log(e); // throw the exception
}