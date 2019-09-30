function solve(input) {
    let system = []

    for (let line of input) {
        let [systemName, componentName, subcomponentName] = line.split(" | ");

        if (!system.hasOwnProperty(systemName)) {
            system[systemName] = {}
        }

        if (!system[systemName].hasOwnProperty(componentName)) {
            system[systemName][componentName] = [];
        }

        system[systemName][componentName].push(subcomponentName);
    }

    Object.entries(system)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
        .forEach(system => {
            console.log(system[0]);
            Object.entries(system[1]).sort((a, b) => b[1].length - a[1].length)
                .forEach(component => {
                    console.log(`|||${component[0]}`);
                    component[1].forEach(e => console.log(`||||||${e}`));
                });
        });
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']

)