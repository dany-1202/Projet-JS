var ctrlApp = angular.module('ctrlApp2');

ctrlApp.controller('statistiqueController', function($scope, $http, $location) {

	$scope.dataSalaire = {
		chart: {
		    caption: "Salaire annuel des employés en CHF",
		    subCaption: "",
		    numberPrefix: "",
		    theme: "ocean"
		},
		data: []
		/*data:[
			{label: "Bakersfield Central", value: "45000"},
			{label: "vincent", value: "60000"},
			{label: "Central", value: "55000"},
			{label: "Bakersfield", value: "82000"},
			{label: "dany", value: "105000"}]*/
	};

	//initialise le tableau de données du graphique
	$scope.getPersonneSalaire = function () {
		var $promise = $http.post("assets/php/getPersonne.php");
		$promise.then(function (message) {
			console.log(message.data);
			console.log(message.data.length);
			for (var i = message.data.length - 1; i >= 0; i--) {
				var obj = message.data[i];
				$scope.dataSalaire.data.push({label: obj.nom, value: obj.salaire});
			};
		});
	}

	$scope.getPersonneSalaire();	

	//Test pour l'apprentissage d'angular
	$scope.nbEmploye = 10;

	$scope.addEmploye = function () {
		$scope.nbEmploye++;
	}

	$scope.test = function() {
      alert('submit');
    };

    $scope.choixGraph = true;

	$scope.data = {
      group1 : 'salaire',
    };

    $scope.selectionSalaire = function (){
    	 $scope.choixGraph = true;
    }

    $scope.selectionNbHeure = function (){
    	 $scope.choixGraph = false;
    }


    $scope.dataNbHeure = {
	    chart: {
	        caption: "Pourcentage des heures Totals de travail des employés dans l'entreprise depuis leur entrée au poste",
	        subcaption: "",
	        startingangle: "120",
	        showlabels: "1",
	        showlegend: "1",
	        enablemultislicing: "0",
	        slicingdistance: "15",
	        showpercentvalues: "1",
	        showpercentintooltip: "0",
	        plottooltext: "$label : $datavalue heures de travail total",
	        //plottooltext: "Age group : $label Total visit : $datavalue",
	        theme: "fint"
	    },
	    data: []
	    	/*[
	        {label: "Teenage",value: "1250400"},
	        {label: "Adult",value: "1463300"},
	        {label: "Mid-age",value: "1050700"},
	        {label: "Senior",value: "491000"}]*/
	}

	//initialise le tableau de données du graphique
	$scope.getPersonneNbHeure = function () {
		var $promise = $http.post("assets/php/getPersonne.php");
		$promise.then(function (message) {
			console.log(message.data);
			console.log(message.data.length);
			for (var i = message.data.length - 1; i >= 0; i--) {
				var obj = message.data[i];
				$scope.dataNbHeure.data.push({label: obj.nom, value: obj.nbHeure});
			};
		});
	}

	$scope.getPersonneNbHeure();

});