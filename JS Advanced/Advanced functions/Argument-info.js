function solve(...input) {
    Object.entries(input.reduce((prev, current) => {
        let typeOfArg = typeof current
        console.log(`${typeOfArg}: ${current}`)
        if (!prev.hasOwnProperty(typeOfArg)) {
            prev[typeOfArg] = 0
        }
        prev[typeOfArg]++;
        // console.log("ot reduce", prev)
        return prev;
    }, {}))
        .map(([type, count]) => `${type} = ${count}`)
        .forEach(el => console.log(el))
}


solve(42, 'cat', 15, 'kitten', 'tomcat')