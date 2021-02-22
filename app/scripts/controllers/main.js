'use strict';

/**
 * @ngdoc function
 * @name ausampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ausampleApp
 */
angular.module('ausampleApp')
  .controller('MainCtrl',[ "$rootScope", "$scope", function ($rootScope, $scope) {
    $rootScope.loggedIn = "out";
    $rootScope.user = "null";
    $scope.userName = "";
    $scope.password = "";
    $scope.login = function(){
      $rootScope.loggedIn = 'in';
      $rootScope.user = $scope.userName;
      console.log($scope.userName);
    }
    $scope.logout = function(){
      $rootScope.user = 'null';
      $rootScope.loggedIn = 'out';
      $scope.userName = "";
      $scope.password = "";
      console.log("logged out");
    } 
}]);