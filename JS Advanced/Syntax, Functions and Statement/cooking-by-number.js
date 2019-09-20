function solve(arr) {
    let number = Number(arr.shift());

    const commands = {
        "chop": (num) => num / 2,
        "dice": (num) => Math.sqrt(num),
        "spice": (num) => num + 1,
        "bake": (num) => num * 3,
        "fillet": (num) => num - (num * 0.2)
    }

    for (let i = 0; i < arr.length; i++) {
        number = commands[arr[i]](number)
        console.log(number)
    }
}

// •	chop - divide the number by two
// •	dice - square root of number
// •	spice - add 1 to number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from number

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);