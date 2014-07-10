<?php 
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['userID'])){
$username = $_GET['username'];
$password = $_GET['password'];
$droit = $GET['droit'];

// $status = $_GET['status'];
// $taskID = $_GET['taskID'];

$query="update user where id='$userID'";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

$json_response = json_encode($result);
}
?>