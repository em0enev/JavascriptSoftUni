let SkiResort = require('../solution');
let expect = require("chai").expect;
let assert = require("chai").assert;

describe('SkiResort', function () {
    it("instance of Sb with wrong arg", function () {
        let obj = new SkiResort("name")
        expect(obj.voters).to.equal(0)
        expect(obj.hotels).to.have.length(0)

    })
    it("besthotel prop", function () {
        let obj = new SkiResort("name")
        let a = obj.bestHotel
        expect(a).to.equal("No votes yet")
    })
    it("build() test", function () {
        let obj = new SkiResort("name")
        let a = obj.build("hotel", 10)
        expect(a).to.equal(`Successfully built new hotel - hotel`)
    })
    it("build() test", function () {
        let obj = new SkiResort("name")
        let a = function () {
            obj.build("hotel", -1)
        }
        expect(a).to.throw(Error, "Invalid input")
    })
    it("build() test", function () {
        let obj = new SkiResort("name")
        let a = function () {
            obj.build("", 1)
        }
        expect(a).to.throw(Error, "Invalid input")
    })
    it("book() test", function () {
        let obj = new SkiResort("name")
        let a = function () {
            obj.book("", 1)
        }
        expect(a).to.throw(Error, "Invalid input")
    })
    it("book() test", function () {
        let obj = new SkiResort("name")
        obj.build("hotel", 10)
        let a = function () {
            obj.book("ds", 11)
        }

        expect(a).to.throw(Error, "There is no such hotel")
    })
    it("book() test", function () {
        let obj = new SkiResort("name")
        obj.build("hotel", 1)
        let a = function () {
            obj.book("hotel", 2)
        }

        expect(a).to.throw(Error, "There is no free space")
    })
    it("book() test", function () {
        let obj = new SkiResort("name")
        obj.build("hotel", 5)

        expect(obj.book("hotel", 2)).to.equal("Successfully booked")
    })
    it("leave() test", function () {
        let obj = new SkiResort("name")
        obj.build("hotel", 5)
        obj.book("hotel", 5)
        let a = obj.leave("hotel", 5, 10)
        // let hotel = obj.hotels.find(hotel => hotel.name === "hotel");
        // let points = hotel.points += 5 * 10
        // let beds = hotel.beds += 5;
        // let voters = hotel.voters += 5;

        // expect(points).to.equal(100)
        // expect(beds).to.equal(5)
        expect(a).to.equal("5 people left hotel hotel")
    })
    it("leave() test a ", function () {
        let obj = new SkiResort("name")
        obj.build("hotel", 5)
        obj.book("hotel", 1)
        let a = function () {
            obj.leave("",1,1)
        }
        expect(a).to.throw(Error, "Invalid input")
    })
    it("leave() test a ", function () {
        let obj = new SkiResort("name")
        obj.build("hotel", 5)
        obj.book("hotel", 1)
        let a = function () {
            obj.leave("hotel",0,1)
        }
        expect(a).to.throw(Error, "Invalid input")
    })
    it("leave() test a ", function () {
        let obj = new SkiResort("name")
        obj.build("hotel", 5)
        obj.book("hotel", 1)
        let a = function () {
            obj.leave("as",1,1)
        }
        expect(a).to.throw(Error, "There is no such hotel")
    })
    it("book() test", function () {
        let obj = new SkiResort("name")
        obj.build("hotel", 5)
        obj.book("hotel", 5)
        obj.leave("hotel", 5, 10)
        let a = obj.averageGrade()
        expect(a).to.equal("Average grade: 10.00")
    })
    it("book() test", function () {
        let obj = new SkiResort("name")

        let a = obj.averageGrade()
        expect(a).to.equal("No votes yet")
    })
    // it("instance of Sb with wrong arg", function () {
    //     let obj = new SkiResort("name")
    //     let a = obj.bestHotel
    //     expect(a).to.equal("No votes yet")
    // })
});
