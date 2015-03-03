<?php 
include "connectDB.php" ;
$name = $_POST['user'] ;
//获取用户信息
$sql = "SELECT * FROM user WHERE username = '$name'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;

echo json_encode($data[0]) ;
 ?>