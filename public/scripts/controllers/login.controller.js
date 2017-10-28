angular.module('myApp')
.controller('LoginController', ['$scope', 'UserService', function($scope, UserService){


  $scope.loginUser = function() {
  UserService.login($scope.user);
  console.log('LOGIN CONTROLLER-LOGIN',$scope.user );
  };
}]);
