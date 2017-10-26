/*jshint esversion:6*/
angular.module('myApp')
.controller('SingleUserController',
['$scope', 'UserService', '$routeParams',
function($scope, UserService,$routeParams ) {

  $scope.UserService = UserService;

  UserService.getUser($routeParams.id)
  .then ( function (data) {
    $scope.user = data.data;

  });


}]);


