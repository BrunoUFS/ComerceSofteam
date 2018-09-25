'use strict';

angular.module('inspinia')
  .controller('MainController', function ($http) {

    var vm = this;

    vm.userName = "";
    vm.userImage = "";

    $http({
      method: 'GET',
      url: 'http://localhost:3004/user'
    }).then(function successCallback(response) {
        vm.userName = response.data[0].name;
        vm.userImage = response.data[0].image;
        //console.log(response.data[0].name);
      }, function errorCallback(response) {
        console.log("Erro");
      });
    
  });
