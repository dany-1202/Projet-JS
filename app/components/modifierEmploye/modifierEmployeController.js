var ctrlApp = angular.module('ctrlApp2');

ctrlApp.controller('modifierEmployeController', function($scope,$rootScope, $http, $location) {
  
  var obj = $rootScope.EmpCourrant;

  console.log(obj);

  $scope.idEmp = obj.idEmp;
  $scope.prenom = obj.prenom;
  $scope.nom = obj.nom;
  $scope.salaire = obj.salaire;
  $scope.nbHeure = obj.nbHeure;
  $scope.age = obj.age;

  //mise à jour des champ après le click sur le bouton modifier
  $scope.updatePersonne = function () {
  	
    $scope.messageValide = "Informations de l'employé enregistrées";

  	var dataPersonne = {
				        'id': $scope.idEmp,
                'prenom': document.getElementById("inputPrenom").value,
                'nom': document.getElementById("inputNom").value,
                'salaire': document.getElementById("inputSalaire").value,
                'nbHeure': document.getElementById("inputNbHeure").value,
                'age': document.getElementById("inputAge").value};

    var $res = $http.post("assets/php/updatePersonne.php", dataPersonne);
    $res.then(function (message) {});

    //$location.url("/home");
  }

});
