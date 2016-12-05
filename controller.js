var app = angular.module('calculatorApp', []);


app.service('rihannaService', function() {

  this.getTopRatedAlbum = function() {
    return 'Monster ft eminem'
  }

});


app.factory('lucianaFactory', function() {
  var albums = {};

  albums.topRated = function() {
    return 'John Legend Cover'
  }
  return albums;
});

app.controller('myCtrl', function($scope) {
  $scope.sum = function() {
    var result = $scope.a + $scope.b;
    console.log('result of adding a and b :', result);
    //alert('result :' + result);
    $scope.sum = result;
  }
});

app.controller('lucianaCtrl', function($scope, lucianaFactory, rihannaService) {

  $scope.callLucianaFactory = function() {
    var topRated = lucianaFactory.topRated();
    console.log('top rated song is :', topRated);
  }

  $scope.callRihannaService = function() {
    var topRated = rihannaService.getTopRatedAlbum();
    console.log('Top rated rihanna service is :', topRated);
  }

});