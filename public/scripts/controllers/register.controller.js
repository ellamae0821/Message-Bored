angular.module('myApp')
.controller('RegisterController', ['$scope', '$location', 'UserService',
function($scope, $location, UserService){
// Adds a user into database and uses helper function to create the request body

$scope.name = '';


$scope.createUser = function() {
  console.log($scope.name);
  UserService.addUser($scope.name);
};



}]);