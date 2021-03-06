function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex() {
            return this.weight * (this.melonSort.length)
        }
    }

    Melon.prototype.toString = function () {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = "Water"
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = "Fire"
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = "Earth"
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = "Air"
        }
    }

    class Melolemonmelon extends Firemelon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.element = "Water"
            this.elementOrder = ["Fire", "Earth", "Air", "Water"]
        }

        morph() {
            let index = this.elementOrder.indexOf(this.element) + 1 >= this.elementOrder.length ? 0 : this.elementOrder.indexOf(this.element) + 1
            this.element = this.elementOrder[index]
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}