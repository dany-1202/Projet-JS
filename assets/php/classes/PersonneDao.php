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
	  $query = "SELECT per_id, per_prenom, per_nom, per_salaire, per_nbHeure, per_age FROM pjs_personne";
	  if ($stmt = $db->prepare($query)) {
	   	  // Exécution de la requête /
	      $stmt->execute();
	      // Lecture des variables résultantes /
	      $stmt->bind_result($per_id, $per_prenom, $per_nom, $per_salaire, $per_nbHeure, $per_age);
	      // Récupération des valeurs /
	      $array = array();
	      $person = [];
	      while($stmt->fetch()) {
	      	  $person['idEmp'] = $per_id;
	      	  $person['prenom'] = $per_prenom;
	          $person['nom'] = $per_nom;
	          $person['salaire'] = $per_salaire;
	          $person['nbHeure'] = $per_nbHeure;
	          $person['age'] = $per_age;
	          $array[] = $person;
	      }
	      $stmt->close();
	      MySQLManager::close();
	  	  return $array;
	  }
	  MySQLManager::close();
	  return null;
	 } // getPersonne


	//Met à jour les informations d'une personne identitié par son identifiant de la table personne
  	public static function updatePersonne ($data) {
		$db = MySQLManager::get();
		$query = "UPDATE pjs_personne set per_prenom = ?, per_nom = ?, per_salaire = ?, per_nbHeure = ?, per_age = ? WHERE per_id = ?";
		if ($stmt = $db->prepare($query)) {
			$stmt->bind_param('ssiiii', $data['prenom'], $data['nom'], $data['salaire'], $data['nbHeure'], $data['age'], $data['id']);
		  	$stmt->execute();
		  	if ($stmt->num_rows == 1) {
		  		MySQLManager::close();
		  		return true;
		  }
		}
		MySQLManager::close();
		return false;
	} // updatePersonne

	//Insertion d'une personne dans la table personne
  	public static function insertPersonne ($data) {
		$db = MySQLManager::get();
		$query = "INSERT INTO pjs_personne (per_prenom, per_nom, per_salaire, per_nbHeure, per_age) VALUES (?, ?, ?, ?, ?)";
		if ($stmt = $db->prepare($query)) {
			$stmt->bind_param('ssiii', $data['prenom'], $data['nom'], $data['salaire'], $data['nbHeure'], $data['age']);
		  	$stmt->execute();
		  	if ($stmt->num_rows == 1) {
		  		MySQLManager::close();
		  		return true;
		  }
		}
		MySQLManager::close();
		return false;
	} // updatePersonne

	//suppression d'une personne dans la bdd, un id en paramètre
  	public static function deletePersonne ($data) {
		$db = MySQLManager::get();
		$query = "DELETE FROM pjs_personne WHERE per_id = ?";
		if ($stmt = $db->prepare($query)) {
			$stmt->bind_param('i', $data['id']);
		  	$stmt->execute();
		  	if ($stmt->num_rows == 1) {
		  		MySQLManager::close();
		  		return true;
		  }
		}
		MySQLManager::close();
		return false;
	} // updatePersonne

}

?>
