<?php 

header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Content-Type: application/json');

$cards = array(); // Create array

$mysqli = new mysqli("127.0.0.1", "root", "", "g2p2"); // Connect to database

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

switch ($_GET["card"]) {
	case 'userstory':
		$query = "
		SELECT *
		FROM us_cards
		ORDER BY 'number'
		ASC";
		break;

	case 'maintenance':
		$query = "
		SELECT *
		FROM m_cards
		ORDER BY 'number'
		ASC";
		break;

	case 'defect':
		$query = "
		SELECT *
		FROM d_cards
		ORDER BY 'number'
		ASC";
		break;
	
	default:
		# code...
		break;
}

if ($result = $mysqli->query($query)) {

	switch ($_GET['card']) {
		case 'userstory':
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
			break;
		
		default:
		    while ($row = $result->fetch_assoc()) {
		        $card = array(
				"number" => $row["number"],
				"analytics" => $row["analytics"],
				"development" => $row["development"],
				"test" => $row["test"]
				);

				array_push($cards, $card);
		    }
			break;
	}

    $result->free(); // free result set
}

$mysqli->close(); // Close connection

print_r(json_encode($cards)); // Return array

 ?>