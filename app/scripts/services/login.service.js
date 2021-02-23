'use strict';

angular.module('ausampleApp').service('loginService', function ($rootScope) {
    this.loginUser = function (un, pwd) {
        return new Promise(resolve => {
            setTimeout(()=>{
                if (un=="admin" && pwd=="admin"){
                    $rootScope.user = un;
                    $rootScope.loggedIn = 'in';
                    resolve(true);
                }else{
                    $rootScope.user = 'null';
                    $rootScope.loggedIn = 'out';
                    resolve(false);
                }
            }, 2000);
        });
    };

    this.logoutUser = function () {
        return new Promise(resolve => {
            setTimeout(()=>{
                    $rootScope.user = 'null';
                    $rootScope.loggedIn = 'out';
                    resolve(true);
            }, 500);
        });
    };
});