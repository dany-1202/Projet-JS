
<?php
	 require_once("classes/PersonneDao.php");
	 
	 $res = PersonneDao::getPersonne(); // Récupère le résulat obtenu

	 echo(json_encode($res));

?>