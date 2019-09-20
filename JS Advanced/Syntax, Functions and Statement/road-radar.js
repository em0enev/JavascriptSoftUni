function solve(arr) {
    let speed = Number(arr[0]);
    let area = arr[1];

    const areaLimitMap = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    let speedOverTheLimit = (speed - areaLimitMap[area]);

    if (speedOverTheLimit > 40) {
        console.log("reckless driving")
    } else if (speedOverTheLimit > 20 && speedOverTheLimit <= 40) {
        console.log("excessive speeding")
    } else if (speedOverTheLimit > 0 && speedOverTheLimit <= 20) {
        console.log("speeding")
    }
}

solve([40, 'city'])
solve([21, 'residential']) 