function solve(input) {
    let increasingSubsequence = [];
    let biggestNumber = input[0];
    increasingSubsequence.push(biggestNumber);

    for (let i = 1; i < input.length; i++) {
        if (input[i] >= biggestNumber) {
            biggestNumber = input[i];
            increasingSubsequence.push(biggestNumber);
        }
    }

    return increasingSubsequence.join("\n");
}


console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))