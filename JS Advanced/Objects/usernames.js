function solve(input) {
    input.sort((a, b) => a.length - b.length !== 0 ? a.length - b.length : a.localeCompare(b))

    let set = new Set(input);
    
    for (const name of set) {
        console.log(name);
    }
}


solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']

);