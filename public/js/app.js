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

    $scope.enter_saves = function ($event) {
      console.log($event);

      if ( $event.keyCode == 13) {
        $scope.save_todo( $scope.new_todo );
      }
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
