var starterServices = angular.module('starter.services', [])

.factory('Post', function($http) {
  return {
    create: function(data) {
      return $http.post('localhost:4000/api/tasks', data);
    }
  }
})

.factory('Users', function($http, $window) {
  return {
    get : function() {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl);
      return $http.get(baseUrl+'/api/users');
    },
    post : function(user) {
      var baseUrl = $window.sessionStorage.baseurl;
      return $http.post(baseUrl+'/api/users', user);
    },
    delete : function(id) {
      var baseUrl = $window.sessionStorage.baseurl;
      return $http.delete(baseUrl+'/api/users/'+id);
    },
    getquery : function(query) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl);
      return $http.get(baseUrl+'/api/users'+query);
    }
  }
});

starterServices.factory('CommonData', function() {
  var data = "";
  return {
    getData: function() {
      return data;
    },
    setData: function(newData) {
      data = newData;
    }
  }
});

starterServices.factory('Users', function($http, $window) {
  return {
    get: function() {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users');
      return $http.get(baseUrl + '/api/users');
    },
    post: function(user) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users');
      return $http.post(baseUrl + '/api/users', user);
    },
    delete: function(userID) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users/');
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.delete(baseUrl + '/api/users/' + userID);
    },
    put: function(userID, user) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users/'+userID);
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.put(baseUrl + '/api/users/' + userID, user);
    },
    getByUserId: function(userID) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/users/');
      return $http.get(baseUrl + '/api/users/'+userID);
    }
  }
});

starterServices.factory('Tasks', function($http, $window) {
  return {
    get: function() {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks');
      return $http.get(baseUrl + '/api/tasks');
    },
    post: function(task) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks');
      return $http.post(baseUrl + '/api/tasks', task);
    },
    delete: function(taskID) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks/');
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.delete(baseUrl + '/api/tasks/' + taskID);
    },
    put: function(taskID, task) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks/'+taskID);
      //alert($http.delete(baseUrl+'/api/users/'+id));
      //console.log(id);
      //id ="56fe48f9711a539f06af0db0";
      return $http.put(baseUrl + '/api/tasks/' + taskID, task);
    },
    getByTaskId: function(taskID) {
      var baseUrl = $window.sessionStorage.baseurl;
      console.log(baseUrl + '/api/tasks/');
      return $http.get(baseUrl + '/api/tasks/'+taskID);
    }
  }
});
