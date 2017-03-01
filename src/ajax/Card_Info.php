<?php 

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

for ($i=0; $i < count($cards); ++$i) { 
	echo 
	"Card " . $i . ": " . " " .
	$cards[$i]["number"] . " " . 
	$cards[$i]["value"] . " " . 
	$cards[$i]["analyt$ics"] . " " . 
	$cards[$i]["development"] . " " . 
	$cards[$i]["test"] . " ";
}
 ?>