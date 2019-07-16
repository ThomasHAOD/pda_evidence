var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function () {
    assert.equal(true, true)
  })

  it('adds 1 to 4 and gets 5', function () {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.add(4)
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('subtracts 4 from 7 and gets 3', function () {
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('multiplies 3 by 5 and gets 15', function () {
    calculator.numberClick(3)
    calculator.operatorClick("*")
    calculator.multiply(5)
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('divides 21 by 7 and gets 3', function () {
    calculator.numberClick(2)
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('concatenates multiple button clicks', function () {
    calculator.numberClick(3)
    calculator.numberClick(3)
    calculator.numberClick(3)
    assert.strictEqual(calculator.runningTotal, 333)
  })

  it('chains multiple operator clicks', function () {
    calculator.numberClick(3)
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    assert.strictEqual(calculator.runningTotal, 12)
  })

  it('clears the running total without affecting the calculation', function () {
    calculator.numberClick(3)
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    calculator.clearClick()
    assert.strictEqual(calculator.runningTotal, 0)
    assert.strictEqual(calculator.previousTotal, 12)
  })

});
