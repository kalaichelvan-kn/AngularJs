'use strict';

angular.module('ausampleApp').service('loginService', function () {
    this.loginUser = function (un, pwd) {
        return new Promise(resolve => {
            setTimeout(()=>{
                return (un=="admin" && pwd=="admin")?resolve(un):resolve("null");
            }, 2000);
        });
    };
});