const phones = [
    { name: 'Samsung', camera: 12, storage: '32g', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32g', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 10, storage: '32g', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 10, storage: '32g', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 10, storage: '32g', price: 20000, color: 'silver' },
    { name: 'Nokia', camera: 10, storage: '32g', price: 44000, color: 'silver' },
    { name: 'HTC', camera: 10, storage: '32g', price: 62000, color: 'silver' },
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }

    }
    return cheapest;
}

const mySeclection = cheapestPhone(phones);
console.log(mySeclection);