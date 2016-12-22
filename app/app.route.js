(function(){ /* Afin de permettre de ne pas créer de conflit */
'use strict';
/**
 * Déclaration de l'application ctrlApp
 * Tous les modules de l'application seront fait avec la syntaxe suivante :
 * var xxx = angular.module('ctrlApp'); Ainsi je récupère les dépendances de ctrlApp.
**/
/* On déclare ici toutes les dépendances */
var ctrlApp = angular.module('ctrlApp2', ['ngRoute', 'ngMaterial']);
/**
 * Configuration du module principal : ctrlApp
 * La configuration des routes de l'applications est faites dans la procédures suivante.
 * Si le chemin n'est pas trouvé l'application redirige l'utilisateur vers la page connexion.
**/
ctrlApp.config(['$routeProvider', function($routeProvider) { // $routeProvider essentiel pour la configuration des routes
        $routeProvider

        /* Les changements ou ajouts de route se font ici */
        .when('/home', { // Chemin de home
            templateUrl: 'app/components/home/homeView.html',
            controller: 'homeController' // Contrôleur de la page home
        })
        .when('/statistique', { // Chemin dudetest
            templateUrl: 'app/components/statistique/statistiqueView.html',
            controller: 'statistiqueController' // Contrôleur de la page test
        })
		.when('/addEmploye', { // Chemin de addEmploye
            templateUrl: 'app/components/addEmploye/addEmployeView.html',
            controller: 'addEmployeController' // Contrôleur de la page test
        })
        .when('/modEmploye', { // Chemin de addEmploye
            templateUrl: 'app/components/modifierEmploye/modifierEmployeView.html',
            controller: 'modifierEmployeController' // Contrôleur de la page test
        })
        .otherwise({
            redirectTo: '/home' // Redirection sur la page home
        });
    }
]);

})();
