/*jshint esversion:6*/
angular.module('myApp')
.controller('TopicsController', ['$scope', 'TopicService', function( $scope, TopicService) {
//Gets all the topics and save them in scope.topics
/*
  $scope.TopicService = TopicService;
*/
  $scope.newTopic = {
    title: '',
    author: ''
  };

  //$scope.topics = topics.getTopics;

/*  $scope.addTopic = function(e){
    TopicService.addTopic($scope.newTopic);
    $scope.newTopic.name = '';
    $scope.newTopic.created_by = '';
  };*/

/*  TopicsServics.getSingleTopic($scope.topicId)
  .then (response => {
    $scope.messages = response.data;
  });*/
  }]
);


