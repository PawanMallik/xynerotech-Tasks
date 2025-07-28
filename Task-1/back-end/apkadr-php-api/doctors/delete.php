<?php
header("Content-Type: application/json");
include("../db.php");

$data = json_decode(file_get_contents("php://input"), true);
$id = (int)($data['id'] ?? 0);

$sql = "DELETE FROM doctors WHERE id=$id";

if ($conn->query($sql) && $conn->affected_rows > 0) {
    echo json_encode(["message" => "Doctor deleted successfully"]);
} else {
    echo json_encode(["error" => "Doctor not found or already deleted"]);
}
?>
