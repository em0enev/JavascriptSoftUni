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

    console.log(system.sort((a, b) => b - a));

    for (let sysName in system) {
        console.log(sysName);

        for (let compName in system[sysName]) {
            console.log(`|||${compName}`);

            for (const subcompName of system[sysName][compName]) {
                console.log(`||||||${subcompName}`);
            }
        }
    }
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