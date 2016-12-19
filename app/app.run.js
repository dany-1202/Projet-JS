/**
* Module qui permet de gérer le fonctionnement de l'application
* En effet, la fonction $on du $rootScope va permettre de vérifier si l'utilisateur est connecté
* dès que l'application change de route il va appeler cette méthode
* 
**/
var ctrlApp = angular.module('ctrlApp2'); // Importe les dépendances du parent ctrlApp

/**
* Fonction Run 
* Ecoute de tous les changements qui se font dans l'application
* 
**/
ctrlApp.run(function($rootScope, $location){//, AuthenticationService, SessionService, $http, Notification){

	/* Ici nous mettrons toutes les routes que l'utilisateur pourra accéder */
	var route = ['/home', '/statistique', '/addEmploye','/modEmploye'];

	/* Fonction déclenché quand un changement de route se fait dans le run de l'application */
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
			//$location.path('/home');
	});
});