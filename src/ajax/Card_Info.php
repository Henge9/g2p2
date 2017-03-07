<?php 

header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Content-Type: application/json');

// Assign card values
$cards = array();

// Get card values from database
$link = mysqli_connect("abg-219310.mysql.binero.se", "219310_pm60936", "Grupp5git", "219310-abg");

$query = "
SELECT *
FROM cards
";

$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
	$cards = array(
		"number" => $row["number"],
		"value" => $row["value"],
		"analytics" => $row["analytics"],
		"development" => $row["development"],
		"test" => $row["test"]
	);
}
	print_r(json_encode($cards));
 ?>