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
    
    this.username = "";
    this.password = "";
    this.isLoading = 0;

    $scope.login = async function(){
      this.isLoading = 1;
      var response = await loginService.loginUser(this.username, this.password);
      console.log("login status: ", response);
      if (response){
        this.isLoading = 0;
      }else{
        alert("user not registered!");
        this.isLoading = 0;
      }
      $scope.$apply();
      console.log(this.isLoading);
    };
    
    $scope.logout = async function(){
      var res = await loginService.logoutUser();
      console.log("logout status: ", res);
      this.username = "";
      this.password = "";
      $scope.$apply();
    };

}]);