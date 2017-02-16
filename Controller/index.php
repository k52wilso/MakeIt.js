<?php
	
	//if it is a post request
	if(isset($_POST)){
		$value = array(
			"hello" => "WORLD",
			"lets" => "go"
		);
		echo json_encode($value,true);
	}else if(isset($_GET)){
		$value = array(
			"hello" => "World",
			"lets" => "go"
		);
		echo json_encode($value,true);
	}

?>