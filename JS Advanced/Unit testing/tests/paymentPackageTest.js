// const PaymentPackage = require("../paymentPackage.js")
// let expect = require("chai").expect;
// let assert = require("chai").assert;
// let should = require('chai').should()

// describe("PaymentPackage func function", function () {
//     it("instance of PayPack with two parameters", function () {
//         let obj = new PaymentPackage("name", 1);
//         obj.should.be.a("object");
//     })
//     it("get name should return PaymentPackage`s name", function () {
//         let obj = new PaymentPackage("name", 1);
//         expect(obj.name).to.equal("name");
//     })
//     it("set name should set name correctly", function () {
//         let obj = new PaymentPackage("name", 1);
//         obj.name = "new name";
//         expect(obj.name).to.equal("new name")
//     })
//     it("get value should return value correctly", function () {
//         let obj = new PaymentPackage("name", 1);

//         assert.equal(obj.value, 1)
//     })
//     it("set value should set value correctly", function () {
//         let obj = new PaymentPackage("name", 1);
//         expect(obj.value).to.equal(1)
//         obj.value = 2
//         expect(obj.value).to.equal(2)
//     })
//     it("value error", function () {
//         let result = function () {
//             let obj = new PaymentPackage("name", 1);
//             obj.value = "string"
//         }
//         expect(result).to.throw(Error, 'Value must be a non-negative number')
//     })
//     it("value error", function () {
//         let result = function () {
//             let obj = new PaymentPackage("name", 1);
//             obj.value = -1
//         }
//         expect(result).to.throw(Error, 'Value must be a non-negative number')
//     })
//     it("name error", function () {
//         let result = function () {
//             let obj = new PaymentPackage("string", 1);
//             obj.name = 1
//         }
//         expect(result).to.throw(Error, 'Name must be a non-empty string')
//     })
//     it("name error", function () {
//         let result = function () {
//             let obj = new PaymentPackage("", 1);

//         }
//         expect(result).to.throw(Error, 'Name must be a non-empty string')
//     })
//     it("VAT error", function () {
//         let result = function () {
//             let obj = new PaymentPackage("string", 1);
//             obj.VAT = "some string"
//         }
//         expect(result).to.throw(Error, 'VAT must be a non-negative number')
//     })
//     it("VAT error", function () {
//         let result = function () {
//             let obj = new PaymentPackage("string", 1);
//             obj.VAT = -1
//         }
//         expect(result).to.throw(Error, 'VAT must be a non-negative number')
//     })
//     it("active error", function () {
//         let result = function () {
//             let obj = new PaymentPackage("string", 1);
//             obj.active = 1
//         }
//         expect(result).to.throw(Error, 'Active status must be a boolean')
//     })
//     it("toString() test", function () {
//         let obj = new PaymentPackage("name", 1);
//         obj.active = false
//         let status = obj.active === false ? ' (inactive)' : ''

//         let msg = `Package: ${obj.name}${status}\n- Value (excl. VAT): ${obj.value}\n- Value (VAT 20%): ${1 + obj.VAT / 100}`
//         expect(obj.toString()).to.equal(msg)

//     })
// })