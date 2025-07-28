<?php
header("Content-Type: application/json");
include("../db.php");

$id = $_GET['id'] ?? 0;
$id = (int)$id;

$result = $conn->query("SELECT * FROM doctors WHERE id=$id");

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["error" => "Doctor not found"]);
}
?>
