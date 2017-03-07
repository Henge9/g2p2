<?php 

/* Allow GET from other port */
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Content-Type: application/json');

$cards = array(); // Create array for cards

$mysqli = new mysqli("127.0.0.1", "root", "", "g2p2"); // Connect to database

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

/* Create query */
$query = "
SELECT *
FROM us_cards
ORDER BY number
ASC";

if ($result = $mysqli->query($query)) {

    /* fetch associative array */
    while ($row = $result->fetch_assoc()) {
        $card = array(
		"number" => $row["number"],
		"value" => $row["value"],
		"analytics" => $row["analytics"],
		"development" => $row["development"],
		"test" => $row["test"]
		);
		array_push($cards, $card);
    }
    
    $result->free(); // free result set
}
	print_r(json_encode($cards)); // Return array

	$mysqli->close(); // Close connection
 ?>