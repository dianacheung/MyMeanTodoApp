app.controller('mainController', ['$scope', '$http', 'todoService', function($scope, $http, todoService) {

	$scope.formData = {};

    // when landing on the page, get all todos and show them
	todoService.get()
		.success(function(data) { 
		$scope.todos = data; 
		})
		.error(function(err) {
                console.log('Error: ' + err);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
		
		// use jquer to check that form input is not empty
		if (!$.isEmptyObject($scope.formData)) {
			todoService.create($scope.formData)
			.success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });			
		}		
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        
		todoService.delete(id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(err) {
				console.log('Error: ' + err);
			});
    };
  
}]);

/**
app.controller('mainController', ['$scope', '$http', 'todoService', function($scope, $http, todoService) {

	$scope.formData = {};

    // when landing on the page, get all todos and show them
    
	$http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(err) {
            console.log('Error: ' + err);
        });
		
	todoService.success(function(data) { 
		$scope.todos = data; 
	});

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(err) {
                console.log('Error: ' + err);
            });
    };
  
}]);
*/


