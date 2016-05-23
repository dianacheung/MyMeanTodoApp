app.factory('todoService', ['$http', function($http) { 
			
	// when landing on the page, get all todos and show them
    return {
		get : function() {
			return $http.get('/api/todos');
		},
		create : function(todoData) {
			return $http.post('/api/todos', todoData);
		},
		delete: function(id) {
			return $http.delete('/api/todos/' + id);
		}
	}
}]);
/**
app.factory('todoService', ['$http', function($http) { 
			
	// when landing on the page, get all todos and show them
    return $http.get('/api/todos')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
*/