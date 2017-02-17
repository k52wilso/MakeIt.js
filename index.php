<?php
	
	//if it is a post request
	if(isset($_POST)){
		$value = 	array(
			"username" => "k52wilso",
			"fullname" => "Kyle Wilson-McCormack"
			);	
		echo json_encode($value,true);
	}else if(isset($_GET)){
		echo "GET";
	}

?>