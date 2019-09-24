function solve(input) {
    let arr = [];
    arr.push("<table>")

    for (let i = 0; i < input.length; i++) {
        let obj = JSON.parse(input[i])
        let values = Object.values(obj)

        arr.push("  <tr>")
        for (let j = 0; j < values.length; j++) {
            arr.push(`      <td>${values[j]}</td>`)
        }
        arr.push("  </tr>")
    }

    arr.push("</table>")

    console.log(arr.join("\n"))
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
)