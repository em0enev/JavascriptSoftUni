function solve(input) {
    let catalogue = {}

    for(let line of input.sort()){
        let firstCharacter = line[0] 

        if (!catalogue.hasOwnProperty(firstCharacter)) {
            catalogue[firstCharacter] = []
        }
        catalogue[firstCharacter].push(line)
    }

    for(let key in catalogue){
        console.log(key);
            for (let val of catalogue[key]) {
                console.log(`  ${val}`);
            }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)