angular
  .module('TodoApp')
  .service('TodoService', ['$http', function($http) {

    this.list = function() {
      return $http.get('/api');   
    };

    this.create = function( todo ) {
//      console.log(todo);
      return $http.post('/api', todo);
    }

  }])