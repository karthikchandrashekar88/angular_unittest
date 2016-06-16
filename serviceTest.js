describe('lucianaFactory test suite', function() {
  var lucianaFactory;

  beforeEach(function() {

    module('calculatorApp');

    inject(function(_lucianaFactory_) {
      lucianaFactory = _lucianaFactory_;
    });

  });

  it('Should return an album', function() {
    expect(lucianaFactory.topRated()).toBe('John Legend Cover');
  });

});
