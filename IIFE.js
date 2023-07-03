// (Immediately Invoked Function Expression)

// 1. avoid polluting the global scope.
(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
})();
// firstVariable and secondVariable will be discarded after the function is executed.

// 2. private variable:
const makeWithdraw = (balance) =>
    ((copyBalance) => {
        let balance = copyBalance; // This variable is private
        const doBadThings = () => {
            console.log("I will do bad things with your money");
        };
        doBadThings();
        return {
            withdraw(amount) {
                if (balance >= amount) {
                    balance -= amount;
                    return balance;
                }
                return "Insufficient money";
            },
        };
    })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined; this variable is private
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(90)); // "Insufficient money"
console.log(firstAccount.doBadThings); // undefined; this method is private