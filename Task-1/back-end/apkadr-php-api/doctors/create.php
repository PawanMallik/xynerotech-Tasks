<?php
header("Content-Type: application/json");
include("../db.php");

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['name']) || !isset($data['specialization'])) {
    echo json_encode(["error" => "Name and Specialization are required"]);
    exit;
}

$name = $conn->real_escape_string($data['name']);
$specialization = $conn->real_escape_string($data['specialization']);
$phone = $conn->real_escape_string($data['phone'] ?? '');
$email = $conn->real_escape_string($data['email'] ?? '');

$sql = "INSERT INTO doctors (name, specialization, phone, email) VALUES ('$name', '$specialization', '$phone', '$email')";
if ($conn->query($sql)) {
    echo json_encode(["message" => "Doctor created successfully", "id" => $conn->insert_id]);
} else {
    echo json_encode(["error" => "Failed to create doctor"]);
}
?>
