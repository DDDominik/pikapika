<?php 
session_start() ;
include "connectDB.php" ;
$id = $_SESSION['id'] ;
$telnum = test_input($_POST['telnum']) ;
//更新电话
$sql = "UPDATE user SET telnum = '$telnum' WHERE user_id = '$id'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
echo "<script>alert('保存成功!');</script>" ;
echo "<script>location.href='../html/site.html';</script>" ;

function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}
 ?>