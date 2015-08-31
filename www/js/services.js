angular.module('starter.controllers')

.service('UserService', function ($cookies, PARSE, $http, $state, $rootScope) {

  this.checkStatus = function () {
    var token = $cookies.get('session-token');
    if(token) {
      PARSE.CONFIG.headers['X-Parse-Session-Token'] = token;
      $rootScope.$broadcast('user:statusChange');
    } else {
      $rootScope.$broadcast('user:statusChange');
      $state.go('app.home');
    }
  };

  this.isLoggedIn = function () {
    if ($cookies.get('session-token')) {
      return true;
    }
    return false;
  }

  this.login = function (user) {

    var self = this;

    $http({
      method: 'GET',
      url: PARSE.URL + 'login',
      headers: PARSE.CONFIG.headers,
      params: user
    }).success( function (data) {
      $cookies.put('session-token', data.sessionToken);
      self.checkStatus();
      $rootScope.$broadcast('user:loggedin');
    });

  };

  this.logout = function () {
    PARSE.CONFIG.headers['X-Parse-Session-Token'] = null;
    $cookies.remove('session-token');
    $rootScope.$broadcast('user:statusChange');
  };


})
