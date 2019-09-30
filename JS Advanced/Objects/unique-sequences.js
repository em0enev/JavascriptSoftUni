function solve2(input) {
    let uniqueArrays = [];
    let regex = /[+-]?\d+(?:\.\d+)?/g

    for (let line of input) {
        let arr = []
        while (match = regex.exec(line)) {
            arr.push(match[0])
        }
        arr = arr.map(x => Number(x)).sort((a, b) => b - a)
        uniqueArrays.push(JSON.stringify(arr))
    }

    uniqueArrays.sort((a, b) => a.length - b.length)
    let set = new Set(uniqueArrays)

    for (const item of set) {

        console.log(JSON.parse(item))
    }
}

(solve2(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"]

))