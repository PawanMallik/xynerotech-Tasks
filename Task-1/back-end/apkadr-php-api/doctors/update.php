<?php
header("Content-Type: application/json");
include("../db.php");

$data = json_decode(file_get_contents("php://input"), true);

$id = (int)($data['id'] ?? 0);
$name = $conn->real_escape_string($data['name'] ?? '');
$specialization = $conn->real_escape_string($data['specialization'] ?? '');
$phone = $conn->real_escape_string($data['phone'] ?? '');
$email = $conn->real_escape_string($data['email'] ?? '');

$sql = "UPDATE doctors SET name='$name', specialization='$specialization', phone='$phone', email='$email' WHERE id=$id";

if ($conn->query($sql) && $conn->affected_rows > 0) {
    echo json_encode(["message" => "Doctor updated successfully"]);
} else {
    echo json_encode(["error" => "Update failed or doctor not found"]);
}
?>
