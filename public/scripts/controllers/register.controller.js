angular.module('myApp')
.controller('RegisterController', ['$scope', '$location', 'UserService',
function($scope, $location, UserService){


$scope.createUser = function (){
  UserService.addUser($scope.user);

  };
}]);