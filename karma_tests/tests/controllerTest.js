describe('calculator', function () {
  beforeEach(module('calculatorApp'));
  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  describe('sum', function () {
    it('9 + 9 should equal 18', function () {
      var $scope = {};
      var controller = $controller('myCtrl', { $scope: $scope });
      $scope.a = 9;
      $scope.b = 9;
      //$scope.sum();
      console.log('returned sum result :',$scope.sum());
      expect($scope.sum()).toBe(19);
    });
  });
});
