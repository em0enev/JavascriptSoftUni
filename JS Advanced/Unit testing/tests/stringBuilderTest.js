// const StringBuilder = require("../stringBuilder.js")
// let expect = require("chai").expect;
// let assert = require("chai").assert;

// // describe("sb func function", function () {
// //     it("instance of Sb with wrong arg", function () {
// //         let result = function () {
// //             return new StringBuilder(1)
// //         }
// //         expect(result).to.throw(TypeError, "Argument must be string")
// //     })
// //     it("func append() work correctly", function () {
// //         let obj = new StringBuilder("a")
// //         obj.append("b")
// //         expect(obj._stringArray[obj._stringArray.length - 1]).to.be.equal("b")
// //     })
// //     it("func prepend() work correctly", function () {
// //         let obj = new StringBuilder("bc")
// //         expect(obj._stringArray.toString()).to.equal(Array.from("bc").toString())
// //         obj.prepend("a")
// //         expect(obj._stringArray.toString()).to.equal(Array.from("abc").toString())
// //     })
// //     it("func insertAt() work correctly", function () {
// //         let obj = new StringBuilder("bc")
// //         let index = 0;
// //         obj.insertAt("ab", index);
// //         expect(obj._stringArray.indexOf('a')).to.equal(0)
// //         expect(obj._stringArray.indexOf('b')).to.equal(1)
// //     })
// //     it("func remove() work correctly", function () {
// //         let obj = new StringBuilder("abcde")
// //         obj.remove(0, 2);
// //         expect(obj._stringArray.toString()).to.equal(Array.from("cde").toString())
// //     })
// //     it("func toString() work correctly", function () {
// //         let obj = new StringBuilder("abcde")
// //         expect(obj.toString()).to.equal(Array.from("abcde").join(""))
// //     })
// //     it("static func _verfyParam should throw error if param is not string", function () {
// //         let result = function () {
// //             return StringBuilder._vrfyParam(1)
// //         }
// //         expect(result).to.throw(TypeError, "Argument must be string")
// //     })
// // })