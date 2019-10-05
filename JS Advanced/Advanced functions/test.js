function solve() {
    let obj = { a: 24, b: 12, c: 21, d: 15 };

    // Get an array of the keys:
    let keys = Object.keys(obj);

    // Then sort by using the keys to lookup the values in the original object:
    keys.sort(function (a, b) { return obj[a] - obj[b] });

    console.log(keys);
}

solve();