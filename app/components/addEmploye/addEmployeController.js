var ctrlApp = angular.module('ctrlApp2');

ctrlApp.controller('addEmployeController', function($scope, $http, $location) {

  	$scope.insertPersonne = function () {

  		$scope.messageValide = "Vous avez bien ajoutez votre employé";

	  	var dataPersonne = {
	                'prenom': document.getElementById("inputPrenom").value,
	                'nom': document.getElementById("inputNom").value,
	                'salaire': document.getElementById("inputSalaire").value,
	                'nbHeure': document.getElementById("inputNbHeure").value,
	                'age': document.getElementById("inputAge").value};

	    var $res = $http.post("assets/php/insertPersonne.php", dataPersonne);
	    $res.then(function (message) {});

	    //

	    //$rootScope.people.push({idEmp: "0", prenom: "dataPersonne.prenom", nom: "dataPersonne.nom", salaire: "dataPersonne.salaire", nbHeure: "dataPersonne.nbHeure", age: "dataPersonne.age"});


	   // $location.url("/home");
	    //$location.path('/home');

	    //$location.path("/thing/"+thing.id)
	  }

	$scope.clearChamp = function () {

		//Supprimer les values des champs
		document.getElementById("inputPrenom").value = "";
		document.getElementById("inputNom").value = "";	
		document.getElementById("inputSalaire").value = "";	
		document.getElementById("inputNbHeure").value = "";	
		document.getElementById("inputAge").value = "";	

		$scope.messageValide = "";
	}

});



