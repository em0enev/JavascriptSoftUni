function sameNumber(number) {
    let numsArr = number.toString().split("");

    console.log(numsArr.every(x => x === numsArr[0]))
    console.log(numsArr.reduce((x, y) => x + +y, 0))
}


sameNumber(22222);
sameNumber(1234);
