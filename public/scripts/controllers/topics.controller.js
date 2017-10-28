/*jshint esversion:6*/
angular.module('myApp')
.controller('TopicsController', ['$scope', 'TopicService', function( $scope, TopicService) {
//Gets all the topics and save them in scope.topics

    $scope.TopicService = TopicService;


    $scope.createTopic = function (){
      TopicService.addTopic($scope.topic);
      console.log($scope.topic);
    };
  }]
);


