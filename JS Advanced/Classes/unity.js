class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if (typeof otherRat === typeof this) {
            this.unitedRats.push(otherRat)
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        console.log(this.name)
        for (let rat of this.unitedRats) {
            console.log(`##${rat.name}`)
        }
    }
}
