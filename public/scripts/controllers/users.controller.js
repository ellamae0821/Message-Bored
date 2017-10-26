/*jshint esversion:6*/
angular.module('myApp')
.controller('UserController', ['$scope', '$location', 'UserService',
function($scope, $location, UserService){
// Adds a user into database and uses helper function to create the request body

  $scope.UserService = UserService;

}])
