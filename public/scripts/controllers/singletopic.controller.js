/*jshint esversion:6*/
angular.module('myApp')
.controller('SingleTopicController',
['$scope', 'TopicService', '$routeParams',
function($scope, TopicService, $routeParams ) {

  $scope.TopicService = TopicService;

  TopicService.getTopic($routeParams.id)
  .then ( function (response) {
    console.log('Im from SINGLETOPIC CONTROLLER');
    $scope.topic = response.data;
  });


}]);
