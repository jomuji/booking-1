<?php 
require_once '../includes/db.php'; // The mysql database connection script
if(isset($_GET['user'])){
    $user = $_GET['user'];
    $droit = $_GET['droit'];
    $password1 = $_GET['password'];
    $id_config = time();

    $query="INSERT INTO user(id_config,username,password,droit)  VALUES ('$id_config','$user','$password1','$droit')";
    $result = $mysqli->query($query) or die($mysqli->error.__LINE__);

    $result = $mysqli->affected_rows;

    echo $json_response = json_encode($result);
    
}
?>