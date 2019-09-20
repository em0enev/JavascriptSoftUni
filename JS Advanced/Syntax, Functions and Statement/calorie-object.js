function solve(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i+=2) {
        let element = arr[i];
        let value = arr[i + 1]

        obj[element] = Number(value)
    }

    console.log(obj);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);