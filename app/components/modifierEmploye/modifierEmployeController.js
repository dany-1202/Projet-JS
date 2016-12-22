var ctrlApp = angular.module('ctrlApp2');

ctrlApp.controller('modifierEmployeController', function($scope,$rootScope, $http, $location) {
  var obj = $rootScope.EmpCourrant;
  console.log(obj);
});
