const products = [{ name: 'shoe', price: 1200, quantity: 2 }, { name: 'shirt', price: 2200, quantity: 3 }, { name: 'pant', price: 3700, quantity: 5 }, { name: 'belt', price: 600, quantity: 4 },];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const producttotal = product.price * product.quantity;
        sum = sum + producttotal;
    }
    return sum;
}

const cost = totalCost(products);
console.log(cost);