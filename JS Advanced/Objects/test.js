function solve2(input) {
    return JSON.stringify(input
        .map(x => x.split(" / "))
        .map(x => x.reduce(hero => {
            let i = 0;
            hero = {
                name: x[i++],
                level: Number(x[i++]),
                items: x.length > 2 ? x[i].split(", ") : []
            }
            return hero
        }, {})))
}

console.log((solve2(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 ',
    'Hes / 1 / Desolator, Sentinel, Antara']))
);