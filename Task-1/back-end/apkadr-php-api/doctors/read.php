<?php
header("Content-Type: application/json");
include("../db.php");

$result = $conn->query("SELECT * FROM doctors ORDER BY id DESC");
$doctors = [];

while ($row = $result->fetch_assoc()) {
    $doctors[] = $row;
}

echo json_encode($doctors);
?>
