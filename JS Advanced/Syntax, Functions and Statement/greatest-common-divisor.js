function gcd(x, y) {
  while (y) {
    var temp = y;
    y = x % y;
    x = temp;
  }

  return x;
}

console.log(gcd(15, 5))
console.log(gcd(2154, 458))