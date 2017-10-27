angular.module('myApp')
.controller('LoginController', ['$scope', 'UserService', function($scope, UserService){

  $scope.name = '';
  $scope.password = '';

  $scope.loginUser = function() {
  UserService.login($scope.name);
  };

/*  localStorage.setItem('user', response.data.name);
  localStorage.setItem('userId', response.data.id);
*/


}]);
