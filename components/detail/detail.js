angular.module('app.detail', [])
  .controller('DetailController', ['$routeParams',"$http", DetailController]);

function DetailController ($routeParams,$http) {
  var scope = this
  this.id = $routeParams.id;

  $http.get("http://www.w3schools.com/angular/customers.php")
    .success(function(response) {
    	// $scope.names = response.records;
    	// console.log(response)
    	scope.data = response.records
  		// console.log(scope)
    });

  
}