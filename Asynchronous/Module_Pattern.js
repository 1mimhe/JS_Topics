// with IIFE and Closures
const ShoppingCart = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(
            `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
        );
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    // stuff we want public them.
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

console.log(ShoppingCart);
console.log(ShoppingCart.shippingCost); // shippingCost is private.