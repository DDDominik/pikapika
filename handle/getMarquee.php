<?php 
include "connectDB.php" ;

$Vid = $_POST['vid'] ;
$table = "marquee_".$Vid ;

$sql = "SELECT * FROM $table ORDER BY time" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;

echo "{\"message\":".json_encode($data)."}" ;
 ?>