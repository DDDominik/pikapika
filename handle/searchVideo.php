<?php 
include "connectDB.php" ;
$keyword = test_input($_POST['keyword']) ;
$rank = $_POST['rank'] ;
switch($rank)
{
	case '1': $key = "upload_time" ; break ;
	case '2': $key = "clicked" ; break ;
	case '3': $key = "commented" ; break ;
	case '4': $key = "collected" ; break ;
}

$sql = "SELECT * FROM video INNER JOIN user ON video.uploader = user.user_id WHERE name LIKE '%$keyword%' OR tag LIKE '%$keyword%' ORDER BY $key" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
$data = array_reverse($data) ;
$n = count($data,COUNT_NORMAL) ; 
for($i = 0 ; $i < $n ; $i++) 
{
	$data[$i]['upload_time'] = date('Y-m-d H:i:s',$data[$i]['upload_time']+3600*8) ;
}

echo "{\"message\":".json_encode($data)."}" ;

function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}
 ?>