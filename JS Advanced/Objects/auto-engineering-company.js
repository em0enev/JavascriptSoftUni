function solve(input) {
    let producedCars = {}

    for (let line of input) {
        let [brand, model, quantity] = line.split(" | ");
        quantity = Number(quantity);

        if (!producedCars.hasOwnProperty(brand)) {
            producedCars[brand] = {}
        }

        if (!producedCars[brand].hasOwnProperty(model)) {
            producedCars[brand][model] = 0;
        }

        producedCars[brand][model] += quantity;
    }

    for (const keys in producedCars) {
        console.log(keys);
        for (let [key, val] of Object.entries(producedCars[keys])) {
            console.log(`###${key} -> ${val}`);
        }
    }
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)