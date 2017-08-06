angular.module('angularInstagram', []);  

function mainController($scope, $http) {  

    $scope.username = "ricardojoserf";
    // $scope.password = "passqwe12qeq";
    $scope.result = "";
    
    $scope.submit = function(){
		
        $http.get('/exec', { params:  {username: $scope.username, password: $scope.password } } )
            .success(
            	function(response) {
            		$scope.result = response;
            	}
            )
            .error(
            	function() {
                	console.log('Error');
            	}   
            );
    };

}