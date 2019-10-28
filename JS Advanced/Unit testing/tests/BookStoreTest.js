// // const BookStore = require("../02. Book Store_Ресурси.js")
// // let expect = require("chai").expect;
// // let assert = require("chai").assert;
// // let should = require('chai').should()

// // describe("BookStore function", function () {
// //     it("instance of BookStore should be object", function () {
// //         let obj = new BookStore("name");
// //         obj.should.be.a("object");
// //     })
// //     it("BookStore property books should have default value empty arr", function () {
// //         let obj = new BookStore("name");
// //         expect(obj.books).to.have.lengthOf(0)
// //     })
// //     it("BookStore property workers should have default value empty arr", function () {
// //         let obj = new BookStore("name");
// //         expect(obj._workers).to.have.lengthOf(0)
// //     })
// //     it("stockBooks() test", function () {
// //         let obj = new BookStore("name");
// //         obj.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling'])
// //         expect(obj.books[0].toString()).to.equal({ title: "Inferno", author: "Dan Braun" }.toString())
// //         expect(obj.books[1].toString()).to.equal({ title: "Harry Potter", author: "J.Rowling" }.toString())
// //     }) // not work in judge
// //     it("hire() test", function () {
// //         let obj = new BookStore("name");
// //         let msg = obj.hire("some name", "some position")

// //         expect(msg).to.equal(`some name started work at name as some position`)
// //     })
// //     it("hire() test should throw error", function () {
// //         let obj = new BookStore("name");
// //         obj.hire("some name", "some position")
// //         let error = function () {
// //             obj.hire("some name", "some position")
// //         }
// //         expect(error).to.throw(Error, 'This person is our employee');
// //     })
// //     it("fire() test", function () {
// //         let obj = new BookStore("name");
// //         obj.hire("some name", "some position")
// //         let msg = obj.fire("some name")

// //         expect(msg).to.equal(`some name is fired`)
// //     })
// //     it("fire() test should throw error", function () {
// //         let obj = new BookStore("name");
// //         let error = function () {
// //             obj.fire("some name", "some position")
// //         }
// //         expect(error).to.throw(Error, `some name doesn't work here`);
// //     })
// //     it("sellBook() test", function () {
// //         let obj = new BookStore("name");
// //         obj.hire("some name", "some position")
// //         obj.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling'])
// //         let worker = obj.workers.filter((w) => w.name === "some name")[0]
// //         obj.sellBook("Inferno", "some name")
// //         expect(worker.booksSold).to.equal(1)
// //     })
// //     it("sellBook() test should throw error", function () {
// //         let obj = new BookStore("name");
// //         let error = function () {
// //             return obj.sellBook("Inferno", "some name")
// //         }
// //         expect(error).to.throw(Error, 'This book is out of stock')
// //     })
// //     it("sellBook() test should throw error", function () {
// //         let obj = new BookStore("name");
// //         obj.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling'])
// //         let error = function () {
// //             return obj.sellBook("Inferno", "some name")
// //         }
// //         expect(error).to.throw(Error, `some name is not working here`)
// //     })
// // })