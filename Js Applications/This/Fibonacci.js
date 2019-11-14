function getFibonator() {
    let x = 0;
    let y = 1;
    let n = 0;

    return function fib() {
        if (n === 0) {
            n++
            return 1
        }
        let z = x + y
        x = y
        y = z
        return y
    }

}
let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13



// int fib(int n)
//     {
//     if (n <= 2) return 1
//     else return fib(n-1) + fib(n-2)
//     }