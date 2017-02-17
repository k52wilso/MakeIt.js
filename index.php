<?php
	
	//if it is a post request
	if(isset($_POST)){
		$value =  array(
			array(
			"username" => "k52wilso",
			"fullname" => "Kyle Wilson-McCormack",
			"email" => "test@gmail.com",
			"number" => "416-495-9345"
			),
			array(
			"username" => "kyle234",
			"fullname" => "Kyle Wilson-McCormack",
			"email" => "test1@gmail.com",
			"number" => "416-495-9345"
			),
			array(
			"username" => "ktown22",
			"fullname" => "Kyle Wilson-McCormack",
			"email" => "test1@gmail.com",
			"number" => "416-495-9345"

			),
		);
		echo json_encode($value,true);
	}else if(isset($_GET)){
		echo "GET";
	}

?>