angular.module('angularInstagram', []);  

function mainController($scope, $http) {  

    $scope.code_ = "ls";
        
    $scope.submit = function(){
        
        $http.get('/exec', { params:  {code: $scope.code_} } )
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