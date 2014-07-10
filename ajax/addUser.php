<?php 
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['user'])){
$user = $_GET['user'];
$droit = "0";
$id_config = time();

$query="INSERT INTO user(username,password,droit,id_config)  VALUES ('$user','password', '$droit', '$id_config')";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

echo $json_response = json_encode($result);
}
?>