class Product {
    constructor(name, quantity, price) {
        this.name = name,
            this.quantity = Number(quantity),
            this.price = price
    }
}

let products = [];

function add(input) {
    for (let line of input) {
        let [name, q, price] = line.split(" ");
        let product = products.find(p => p["name"] === name)

        if (product) {
            product.quantity += Number(q)
        } else {
            products.push({
                "name": name,
                "quantity": Number(q)
            })
        }
    }
    console.log(Object.values(products))
}

add(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50'])