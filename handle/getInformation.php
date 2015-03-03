<?php 
session_start() ;
include "connectDB.php" ;

$id = $_SESSION['id'] ;
$sql = "SELECT * FROM user WHERE user_id = '$id'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$msg = $res->fetchAll(PDO::FETCH_ASSOC) ;
$data = $msg[0] ;

echo json_encode($data) ;
 ?>