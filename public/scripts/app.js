angular.module('myApp', ['ngRoute']);

var app = angular.module('myApp')
.config([ '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'TopicsController'
  })
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: '/views/register.html',
    controller: 'RegisterController'
  })
  .when('/users', {
    templateUrl: '/views/users.html',
    controller: 'UserController'
  })
  .when('/users/:id', {
    templateUrl: '/views/singleUser.html',
    controller: 'SingleUserController'
  })
  .otherwise({
    templateUrl:'<h1>INSERT 404 ERROR HERE</h1>'
  });

  $locationProvider.html5Mode(true);

}])
  .run([ function (){

  }]);



