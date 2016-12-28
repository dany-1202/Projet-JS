var ctrlApp = angular.module('ctrlApp2');

ctrlApp.controller('addEmployeController', function($scope, $http, $location) {
  	$scope.insertPersonne = function () {

	  	var dataPersonne = {
	                'prenom': document.getElementById("inputPrenom").value,
	                'nom': document.getElementById("inputNom").value,
	                'salaire': document.getElementById("inputSalaire").value,
	                'nbHeure': document.getElementById("inputNbHeure").value,
	                'age': document.getElementById("inputAge").value};

	    var $res = $http.post("assets/php/insertPersonne.php", dataPersonne);
	    $res.then(function (message) {});
	  }

});



