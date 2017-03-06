<?php 

header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Content-Type: application/json');

// Get card values from database

// Assign card values
$cards = array(
	array(
		"number" => "01",
		"value" => 200,
		"analytics" => 5,
		"development" => 2,
		"test" => 6
		),
	array(
		"number" => "02",
		"value" => 350,
		"analytics" => 2,
		"development" => 4,
		"test" => 3
		),
	array(
		"number" => "03",
		"value" => 150,
		"analytics" => 3,
		"development" => 2,
		"test" => 2
		),
	array(
		"number" => "04",
		"value" => 500,
		"analytics" => 5,
		"development" => 4,
		"test" => 3
		),
);

	print_r(json_encode($cards));
 ?>