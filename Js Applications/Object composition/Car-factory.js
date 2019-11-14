function solve(obj) {
    const { model } = obj;
    const { power } = obj;
    const { color } = obj;
    const { carriage } = obj;
    const { wheelsize } = obj;

    const engineMap = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    const carriageMap = {
        hatchback: { type: 'hatchback', color: "" },
        coupe: { type: 'coupe', color: "" }
    }

    function getCarriage(type) {
        let x = Object.values(carriageMap).filter(x => x.type === type)[0]
        x.color = color;
        return x
    }

    return {
        model: model,
        engine: Object.values(engineMap).filter(x => x.power >= power)[0],
        carriage: getCarriage(carriage),
        wheels: Array(4).fill(wheelsize % 2 !== 0 ? wheelsize : wheelsize - 1)
    }
}

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 15

}))