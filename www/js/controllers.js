angular.module('starter.controllers', ['ngCookies'])

.constant('PARSE', {
  URL: 'https://api.parse.com/1/',
  CONFIG: {
    headers: {
     'X-Parse-Application-Id' : 'h3WW0SVCjalXilChtmALBDPXsoiDESLqs1RjX6vp',
     'X-Parse-REST-API-Key'  : 'YZggZy5EGS7fSeaLHyV5FGjRsmk9UjQTamk0zBZ5'
    }
  }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $cookies, UserService, $rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Check Login RIGHT NA
  UserService.checkStatus();


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.logout = function () {
    UserService.logout();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    UserService.login($scope.loginData);

    $rootScope.$on('user:loggedin', function () {
      $scope.closeLogin();
    });
  };

  $rootScope.$on('user:statusChange', function () {
    if(UserService.isLoggedIn()) {
      $scope.loggedIn = true;
    } else {
      $scope.loggedIn = false;
    }
  });


})

.controller('DayController', function ($scope, $stateParams, PARSE, $http, $state, UserService) {

  $scope.day = $stateParams.day;
  $scope.excercises;

  if (UserService.isLoggedIn()) {
    $http({
      method: 'GET',
      url: PARSE.URL + 'classes/excercise',
      params: {
        where: '{"day":"' + $stateParams.day + '"}'
      },
      headers: PARSE.CONFIG.headers
    }).success( function (res) {
      $scope.excercises = res.results;
    });

    $scope.loadExcercise = function (single) {
      $state.go('app.excercise', { id: single.objectId });
    };
  }


})

.controller('ExcerciseController', function ($scope, $stateParams, PARSE, $http, UserService) {

  $scope.excercise;
  $scope.message;

  if (UserService.isLoggedIn()) {

    $http({
      method: 'GET',
      url: PARSE.URL + 'classes/excercise/' + $stateParams.id,
      headers: PARSE.CONFIG.headers,
      cache: true
    })
    .success( function (res) {
      $scope.excercise = res;
    });

    // Add Entry
    $scope.entry = {
      set: 1, reps: 10
    };
    $scope.addEntry = function (entry, excercise) {

      entry.set = Number(entry.set);
      entry.reps = Number(entry.reps);
      entry.weight = Number(entry.weight);

      var data = {
        excercise: {
          '__type': 'Pointer',
          'className': 'excercise',
          'objectId': excercise.objectId,
        },
        set: entry.set,
        reps: entry.reps,
        weight: entry.weight
      }

      $scope.message = 'Saving...';
      $scope.loadClass = 'loadingColor';

      $http.post(PARSE.URL + 'classes/entry', data, PARSE.CONFIG)
      .error( function (res) {
        $scope.loadClass = 'errorColor';
        $scope.message = 'ERROR: ' + res.error;
      })
      .success( function (res) {
        $scope.entry = { set: entry.set + 1, reps: entry.reps, weight: entry.weight };
        $scope.loadClass = 'successColor';
        $scope.message = 'Logged Set: ' + entry.set;
      });

    };

  }

})

.controller('AddController', function ($scope, PARSE, $http) {

  // $scope.addExcercise = function (data) {
  //   $http.post(PARSE.URL + 'classes/excercise', data, PARSE.CONFIG)
  //   .success( function (res) {
  //     console.log(res);
  //   });
  // }

});
