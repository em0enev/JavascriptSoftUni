class Stringer {
    initialLength;

    constructor(innerString, innerLength) {
        this.innerString = innerString,
            this.innerLength = Number(innerLength),
            this.initialLength = Number(innerLength)

    };

    increase(length) {
        this.innerLength += Number(length)
    }

    decrease(length) {
        this.innerLength -= Number(length)
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return "...";
        } this.innerString.substr(0, this.innerLength)

        if (this.innerLength + 3 <= this.initialLength) {
            return this.innerString.substr(0, this.innerLength) + "..."
        }
        if (this.innerLength <= this.initialLength && this.innerLength >= 3) {
            return this.innerString
        }
    }
}


let test = new Stringer("Viktor", 6);
console.log(test.toString()); // Test

// test.decrease(3)

// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.decrease(3)); // Te...

// test.decrease(5);
// console.log(test.increase(5)); // ...

