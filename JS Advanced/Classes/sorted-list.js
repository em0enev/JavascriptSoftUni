class List {
    arr;
    size;

    constructor() {
        this.arr = [];
        this.size = 0;
    }

    add(element) {
        this.arr.push(element)
        this.size = this.arr.length;
        this.orderArr();
    }

    remove(index) {
        let element = this.arr[index];

        if (element !== undefined) {
            let i = this.arr.indexOf(element);
            this.arr.splice(i, 1);
        }
        this.size = this.arr.length;
        this.orderArr()
    }

    get(index) {
        return this.size !== 0 ? this.arr[index] : 0
    }

    orderArr() {
        this.arr.sort((a, b) => a - b)
    }
}