<?php

	require_once("classes/Sanitizer.php");
	require_once("classes/PersonneDao.php");

	$data = Sanitizer::getSanitizedJSInput(); // Récupère les données aseptisée
	$res = PersonneDao::insertPersonne($data);

	if ($res) {
		//echo(json_encode($res));
		echo(json_encode($data));
	}else {
		echo("Impossible de modifier la personne");
	}
	
?>