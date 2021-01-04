<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$database = “sakila”;

	$conn = new mysqli($servername, $username, $password, $database);

	if ($conn->connect_error) {
  		die("Kết nối thất bại: " . $conn->connect_error);
	};
	
	$sql = "SELECT film.film_id, film.title FROM film WHERE film.film_id = 3";

	$result = $conn -> query($sql);
	if($result){
   		while( $row = $result -> fetch_assoc() ) {
			echo $row[“film_id”] . “ “ . $row[“title‘] ;
   		}		
  	$result -> close();
	}
	
	$conn -> close()
?>
