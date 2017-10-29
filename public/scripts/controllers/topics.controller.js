/*jshint esversion:6*/
angular.module('myApp')
.controller('TopicsController', ['$scope', 'TopicService', 'UserService', '$routeParams', function( $scope, TopicService, UserService, $routeParams) {
//Gets all the topics and save them in scope.topics

    $scope.TopicService = TopicService;


    $scope.createTopic = function (){
      TopicService.addTopic($scope.topic);
      console.log('SCOPE TOPIC CONTROLLER:',$scope.topic);
    };


  }]
);


