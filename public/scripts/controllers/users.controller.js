/*jshint esversion:6*/
angular.module('myApp')
.controller('UserController', ['$scope', '$location', 'UserService',
function($scope, $location, UserService){
// Adds a user into database and uses helper function to create the request body

  $scope.UserService = UserService;

  $scope.name = '';


  $scope.createUser = function() {
    console.log($scope.name);
    UserService.addUser($scope.name);
  };

}]);

// Log in user right when the request to create user returns
// set the user to res.data.name to local storage


