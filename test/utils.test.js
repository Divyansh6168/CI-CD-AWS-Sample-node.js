// test/utils.test.js
const { expect } = require('chai');
const { add, subtract } = require('../utils');

describe('Utils', () => {
  it('should correctly add two numbers', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should correctly subtract two numbers', () => {
    const result = subtract(5, 2);
    expect(result).to.equal(3);
  });

  // Example of a failing test
  it('should return 5 when adding 2 and 2 (failing example)', () => {
    const result = add(2, 2);
    // This test will fail because 2+2 is 4, not 5
    // expect(result).to.equal(5); 
    expect(result).to.equal(4); // Correct assertion
  });
});
