angular
  .module('TodoApp', [])
  
  // dependency injection?                     v
  .controller('TodoController', ['$scope', 'TodoService', function($scope, TodoService) {

    TodoService.list().then(function(response) {
      $scope.todos = response.data;
    });

    $scope.save_todo = function( new_title ) {
      $scope.todos.push({
          title: new_title,
          completed : false
      });
    }

    $scope.enter_saves = function ($event) {
      console.log($event);

      if ( $event.keyCode == 13) {
        $scope.save_todo( $scope.new_todo );
      }
    }

  }]);
