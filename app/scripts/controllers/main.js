'use strict';

/**
 * @ngdoc function
 * @name ausampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ausampleApp
 */
angular.module('ausampleApp')
  .controller('MainCtrl',[ "$rootScope", "$scope", 'loginService', function ($rootScope, $scope, loginService) {
    $rootScope.loggedIn = "out";
    $rootScope.user = "null";
    this.username = "";
    this.password = "";
    this.isLoading = 0;

    $scope.login = async function(){
      this.isLoading = 1;
      console.log(this.isLoading);
      console.log(this.username, this.password);
      var response = await loginService.loginUser(this.username, this.password);
      console.log(response);
      if (response!="null"){
        $rootScope.loggedIn = 'in';
        $rootScope.user = response;
        this.isLoading = 0;
      }else{
        alert("user not registered!");
        this.isLoading = 0;
      }
      $scope.$apply();
      console.log(this.isLoading);
    };
    
    $scope.logout = function(){
      $rootScope.user = 'null';
      $rootScope.loggedIn = 'out';
      this.username = "";
      this.password = "";
    };

}]);