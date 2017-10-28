/*jshint esversion:6*/
angular.module('myApp')
.controller('UserController', ['$scope', '$location', 'UserService',
function($scope, $location, UserService){
// Adds a user into database and uses helper function to create the request body

  $scope.UserService = UserService;


}]);
/* this.addUser = function(newUser){
    var user = {
      name: newUser.name,
      password: newUser.password
    };
    return $http.post(`u`, user)
    .then ( (response) => {
      self.users.push(response.data);
      $location.path('/');
    });
  };*/

