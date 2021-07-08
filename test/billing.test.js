import chai from 'chai';
import {calculateCost} from '../libs/billing-lib.js'

var should = chai.should();

describe('Billing', function() {
  it('Lowest Tier', function() {
    const storage = 10;

    const expectedCost = 4000;
    const cost = calculateCost(storage);

    cost.should.equal(expectedCost);
  });
  it('Middle Tier', function() {
    const storage = 100;

    const expectedCost = 20000;
    const cost = calculateCost(storage);

    cost.should.equal(expectedCost);
  });
  it('Higest Tier', function() {
    const storage = 101;

    const expectedCost = 10100;
    const cost = calculateCost(storage);

    cost.should.equal(expectedCost);
  });
})