var expect = require('chai').expect;

var store = require ('../src/store').store;

describe('Store', function() {

    
  it('with toString() should return a string', function() {
    expect(store.toString()).to.be.a('string');
  });

  it('should return all these products', function() {
    expect(store.products).to.have.lengthOf(14);
  });

  it('with belowCost criteria should return right products', function() {
      var criterias = {belowCost : 20, belowDuration : 150};
    expect(store.findProducts(criterias)).to.have.lengthOf(5);
  });

  it('with asket should return right price', function() {
    expect(store.calculateTotalprice([
      store.products[3],
      store.products[5],
      store.products[6],
      store.products[10]])).to.be.equal(99.22);
  });

  it('with asket should return right duration', function() {
    expect(store.calculateTotalDuration([
      store.products[0],
      store.products[4],
      store.products[11]])).to.be.equal(1318);
  });

});
