function solve(input) {
    let juices = {}
    let bottles = {}

    for (let line of input) {
        let [name, quantity] = line.split(" => ")
        quantity = Number(quantity)

        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }
        juices[name] += quantity

        if (juices[name] >= 1000) {
            bottles[name] = Math.floor(juices[name] / 1000)
        }
    }

    for (let [key, val] of Object.entries(bottles)) {
        console.log(`${key} => ${val}`)
    }
}


solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)