<?php
	
	//if it is a post request
	if(isset($_POST)){
		$value = array(
				array(
			"username" => "k52wilso",
			"fullname" => "Kyle Wilson-McCormack"
			)
			,array(
			"username" => "k25wilso",
			"fullname" => "Kyle McCormack-Wilson"
			)	
		);
		echo json_encode($value,true);
	}else if(isset($_GET)){
		echo "GET";
	}

?>