<?php
$conn = new mysqli('localhost', 'root', '', 'msceis2019');

$statisticsJson = file_get_contents("https://geoip-db.com/json/geoip.php");
$statisticsObj = json_decode($statisticsJson);
$conn->query("INSERT INTO visitors (IPv4, country_code, country_name, city) VALUES ('$statisticsObj->IPv4', '$statisticsObj->country_code', '$statisticsObj->country_name', '$statisticsObj->city')");
$query = $conn->query("SELECT country_name FROM visitors LIMIT 5");

while ($num = $query->fetch_assoc()) {
   $data[] = $num;
}
header('Content-Type: application/json');
echo json_encode($data);
