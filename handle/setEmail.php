<?php 
session_start() ;
include "connectDB.php" ;
$id = $_SESSION['id'] ;
$email = test_input($_POST['email']) ;
//更新email
$sql = "UPDATE user SET email = '$email' WHERE user_id = '$id'" ;
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