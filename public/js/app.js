angular
  .module('TodoApp', [])
  
  // dependency injection?                     v
  .controller('TodoController', ['$scope', 'TodoService', function($scope, TodoService) {

    TodoService.list().then(function(response) {
      $scope.todos = response.data;
    });

    $scope.save_todo = function( new_title ) {
      var newItem = {
          title: new_title,
          completed : false
      }

      $scope.todos.push(newItem);
      $scope.new_todo = "";

      TodoService.create({ title: new_title }).then(function(response) {
        newItem._id = response.data._id;

      });
    }

    $scope.enter_saves = function ($event) {
//      console.log($event);

      if ( $event.keyCode == 13) {
        $scope.save_todo( $scope.new_todo );
      }
    }

    $scope.check_changed = function ( $event, todo_id ) {
      console.log('$event', $event);

      if ($event.srcElement.checked) {
        TodoService.complete(todo_id);
      }
      else {
        TodoService.uncomplete(todo_id);
      }
    }

    $scope.remove = function( todo) {
//      console.log($scope.todos);
      TodoService.deleteItem(todo._id);
      $scope.todos.splice($scope.todos.indexOf(todo), 1  )

    }

  }]);
