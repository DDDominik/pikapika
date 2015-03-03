<?php 
session_start() ;
include "connectDB.php" ;

$Uid = $_SESSION['id'] ;

$sql = "SELECT clicked FROM video WHERE uploader = '$Uid' " ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;

$sum = 0 ;
foreach ($data as $key => $value) // 统计点击数
{ 
	$sum += $value['clicked'] ;
}

echo $sum ;
 ?>