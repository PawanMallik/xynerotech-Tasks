<?php
$host = "localhost";
$user = "root";   // change if needed
$pass = "";       // your MySQL password
$dbname = "apkadr";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database Connection Failed: " . $conn->connect_error]));
}
?>
