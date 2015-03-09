angular
  .module('TodoApp', [])
  
  // dependency injection?                     v
  .controller('TodoController', ['$scope', function($scope) {

    $scope.save_todo = function( new_title ) {
      $scope.todos.push({
          title: new_title,
          completed : false
      });
    }

//    $scope.name = "IS HOOKED UP";
    $scope.todos = [
      {
        title: "Fake Title",
        completed: false
      },
      {
        title: "Another Fake Title",
        completed: true
      }
    ]
  }]);
