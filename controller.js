var app = angular.module('calculatorApp', []);
app.controller('myCtrl', function($scope) {
  $scope.sum = function(){
    console.log('sum');
    var result =  $scope.a + $scope.b;
    console.log('result of adding a and b :', result);
    alert('result :'+result);
    return result;
  }
});
