// function sumFourNumbers(a, b, c, d) {
//     console.log(a + b + c + d)
// }

function sumFourNumberssssssssssssss(a, b, c, d) {
    console.log(a + b + c + d)
}


function result(someFunc) {
    console.log(someFunc === sumFourNumberssssssssssssss)
    return (last) => {
  return someFunc(1, 2, 3, last)
    }
}



let lastFunc = result(sumFourNumberssssssssssssss)

lastFunc(10)
