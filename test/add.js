var add = require('../dist/dist.js').add;
var expect = require('chai').expect;

describe('add 函数测试', function () {
  it('1 + 1 = 2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });
});