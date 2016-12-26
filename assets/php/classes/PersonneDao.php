<?php
/**
 *
 */
require_once("MySQLManager.php");
/**
 *
 * @access public
 */
/*
	Class name : PersonneDao
	Description : Contient les fonctions permettant d'intéragir avec la bdd
*/
class PersonneDao {

	//Récupère les informations de la table pjs_personne et les retourne en un array[]
	public static function getPersonne () {
	  $db = MySQLManager::get();
	  $query = "SELECT per_id, per_prenom, per_nom, per_salaire, per_nbHeure FROM pjs_personne";
	  if ($stmt = $db->prepare($query)) {
	   	  // Exécution de la requête /
	      $stmt->execute();
	      // Lecture des variables résultantes /
	      $stmt->bind_result($per_id, $per_prenom, $per_nom, $per_salaire, $per_nbHeure);
	      // Récupération des valeurs /
	      $array = array();
	      $person = [];
	      while($stmt->fetch()) {
	      	  $person['id'] = $per_id;
	      	  $person['prenom'] = $per_prenom;
	          $person['nom'] = $per_nom;
	          $person['salaire'] = $per_salaire;
	          $person['nbHeure'] = $per_nbHeure;
	          $array[] = $person;
	      }
	      $stmt->close();
	      MySQLManager::close();
	  	  return $array;
	  }
	  MySQLManager::close();
	  return null;
	 } // getPersonne

}

?>
