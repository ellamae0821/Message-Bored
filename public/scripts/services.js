/*jshint esversion:6*/
angular.module('myApp')
.service('UserService', ['$http', '$routeParams', function($http, $routeParams) {
  var url = 'api/users';
  var self = this;
  this.users = [];


  $http.get(url)
  .then(function(response){
    self.users = response.data;
  });

  this.getUsers = function (username) {
    return users; };

  this.getUser = function(userId){
    return $http.get(`/api/users/${userId}`)
    .then ( function (response) {
      return response;
    });
  };


  this.getUserId = function(userId){
    return $http.get(`url/${userId}`);
  };


  this.addUser = function(data){
    return $http.post(url, JSON.stringify({name: data}))
    .then ( (data) => {
      this.users.push(data.data);
    });
  };

  //how to return the messages from USER>??

}])

.service('TopicService', ['$http', function($http){
  var url = '/api/topics';
  var self = this;
//}]);
  //collection of books
  this.topics = [];

  //initialization
  $http.get(url)
  .then(function(response){
    self.topics = response.data;
  });
  //read methods
  this.getTopics = function() {
    return topics; };

  this.getTopic = function(index) {
    return books[index];};

  //create method
  this.addTopic = function(givenTopic) {
    if(!givenTopic) {
      return; }
      //create on frontend
      var topic = {
        name: givenTopic.title,
        author: givenTopic.created_by
      };
      self.books.push(topic);
      //created on backend
      $http.post(url, topic)
      .then (function (response) {
        console.log('Topic created on backend');
      });
    };
  //reminder to get messages from every TOPIC
  }
])

.service('RegisterService', ['$http', function($http){
  var url = '/api/register';
  var self = this;
}]);

