function solve(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let currHeroArg = input[i].split(" / ");

        let heroName = currHeroArg[0];
        let heroLevel = Number(currHeroArg[1]);
        let heroItems = [];

        if (currHeroArg.length > 2) {
            heroItems = currHeroArg[2].split(", ");
        }

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroData.push(hero);
    }
    console.log((heroData))
}

// solve(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara']
// );


function solve2(input) {
    let heroes = [];

    for (let line of input) {
        let [name, level, items] = line.split(" / ")

        level = Number(level);
        items = items ? items.split(", ") : []

        heroes.push({ name, level, items })
    }

    console.log(JSON.stringify(heroes))
}

(solve2((['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)));