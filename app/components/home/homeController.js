var ctrlApp = angular.module('ctrlApp2');

ctrlApp.controller('homeController', function($scope, $rootScope, $http, $location, $mdDialog) {

  $scope.people = [];

  //initialise le tableau de données avec les personnes de la bdd
  $scope.getPersonne = function () {
    var $promise = $http.post("assets/php/getPersonne.php");
    $promise.then(function (message) {
      for (var i = message.data.length - 1; i >= 0; i--) {
        var obj = message.data[i];
        $scope.people.push({idEmp: obj.idEmp, prenom: obj.prenom, nom: obj.nom, salaire: obj.salaire, nbHeure: obj.nbHeure, age: obj.age});
      };
    });
  }
  $scope.getPersonne();

  $rootScope.EmpCourrant = null;

  $scope.modifierEmploye = function(index) {
  	$rootScope.EmpCourrant = angular.copy($scope.people[index]);
    $location.url("/modEmploye");
  };

  $scope.deletePersonne = function (index) {
    $rootScope.EmpCourrant = angular.copy($scope.people[index]);
    var dataPersonne = {'id': $rootScope.EmpCourrant.idEmp};

    var $res = $http.post("assets/php/deletePersonne.php", dataPersonne);
    $res.then(function (message) {});

    //Comment supprimer une seule ligne du DOM ? sans réafficher toute la liste ...
    /*
        A compléter
    */


  }

});