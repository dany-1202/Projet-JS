var ctrlApp = angular.module('ctrlApp2');

ctrlApp.controller('homeController', function($scope,$rootScope, $http, $location, $mdDialog) {

  $scope.people = [
    { id:1,name: 'Dany Gomes',salaire:5500,nbH:42,age:32},
    { id:2,name: 'Vincent Jalley',salaire:5200,nbH:40,age:22},
    { id:3,name: 'Joel Da Silva',salaire:4700,nbH:38,age:34}
  ]; 
  $rootScope.EmpCourrant = null;

  $scope.modifierEmploye = function(id) {
  	$rootScope.EmpCourrant = angular.copy($scope.people[id]);
    $location.url("/modEmploye");
  };

});

