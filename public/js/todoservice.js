angular
  .module('TodoApp')
  .service('TodoService', ['$http', function($http) {

    this.list = function() {
      return $http.get('/api');   
    };

    

  }])