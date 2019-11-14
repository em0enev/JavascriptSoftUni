(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        return this.reduce((res, x) => {
            return res += x;
        }, 0);
    };

    Array.prototype.average = function () {
        let sum = this.reduce((res, x) => {
            return res += x;
        }, 0);

        return sum / this.length;
    };

}())


let testArray = [1, 2, 3];

console.log(testArray.skip(1)[0])