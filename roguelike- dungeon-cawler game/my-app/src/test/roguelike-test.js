var assert = require('assert');
var expect = require("chai").expect
var information = require("../information")
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

describe("information", function () {

  it("should return two random weapons ", function () {
    expect(information.enemiesAndHealth()).to.be.eql([]);
  });

});