//  label:
//   statement

loop1: for (let i = 0; i < 3; i++) {
    loop2: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            continue loop1;
        } else if (i === 1) break loop2;
        console.log(`i = ${i}, j = ${j}`);
    }
}

// labeled block
foo: {
    console.log("face");
    break foo;
    console.log("this will not be executed");
}