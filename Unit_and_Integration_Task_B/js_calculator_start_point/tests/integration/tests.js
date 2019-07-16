var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have buttons which update the display', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number4')).click();
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('741')
  })

  it('should have arithmetical operations which update the display with the result of the operation', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('should have arithmetical operations which chain together', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12')
  })

  it('should output long numbers', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('777777777777777')
  })

  it('should calculate with negative numbers', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-84')
  })

  it('should return decimals', function () {
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3.5')
  })

  it('should output not a number, when a number is divided by 0', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not a number')
  })

});