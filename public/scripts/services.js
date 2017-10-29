/*jshint esversion:6*/
angular.module('myApp')
.service('UserService', ['$http', '$routeParams', '$location', function($http, $routeParams, $location) {
  var url = 'api/users';
  var self = this;
  this.users = [];
  this.user = [];



  $http.get(url)
  .then(function(response){
    self.users = response.data;
  });


  this.getUser = function(userId){
    return $http.get(`/api/users/${userId}`)
    .then ( function (response) {
      return response;
    });
  };

  this.addUser = function(newUser){
    var user = {
      name: newUser.name,
      password: newUser.password
    };
    return $http.post('api/register', JSON.stringify(user))
    .then ( (response) => {
      console.log(user);
      this.users.push(response.data);
      $location.path('/');
      return response.data;
    });
  };

  this.login = function(userLogin){
    let user = {
      name: userLogin.name,
      password: userLogin.password
    };
    console.log('LOGGING IN:', userLogin);
    return $http.post('api/login', user)
    .then(function (response){
      console.log('LOGIN RESPONSES', response);
      $location.path('/');
      return response.data;
    });
  };
  //how to return the messages from USER>??

}])

.service('TopicService', ['$http', '$routeParams', function($http , $routeParams){
  var url = '/api/topics';
  var self = this;

  this.topics = [];
  this.topic = [];
  //initialization
  $http.get(url)
  .then(function(response){
    self.topics = response.data;
  });

  this.addTopic = function(newTopic){
    var topic = {
      name: newTopic.name,
      created_by: newTopic.created_by
    };
    console.log('ADDTOPIC, newTopic',newTopic);
    return $http.post('api/topics', topic)
    .then ( (response) => {
      self.topics.push(response.data);
      console.log('RESPONSE DATA TOPIC', response.data);
      return response.data;
    });
  };


  this.getTopics = function() {
    console.log(this.topics);
    return this.topics; };

  this.getTopic = function(topicId){
    console.log('AM I INVOKING GETTOPIC?');
    return $http.get(`/api/topics/${topicId}`)
    .then ( function (response) {
      return response;
    });
  };

  this.getTopicDetails = function(){
    return $http.get('api/topics');
  };




  }
])

.service('RegisterService', ['$http', function($http){
  var url = '/api/register';
  var self = this;
}]);

