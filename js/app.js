angular
  .module('TodoApp', [])
  
  // dependency injection?                     v
  .controller('TodoController', ['$scope', function($scope) {

    $scope.name = "IS HOOKED UP";
  
  }]);
