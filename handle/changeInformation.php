<?php 
session_start() ;
include "connectDB.php" ;
$id = $_SESSION['id'] ;
$sex = $_POST['sex'] ;
$signature = test_input($_POST['signature']) ;
$address = test_input($_POST['address']) ;
//更新用户信息
$sql = "UPDATE user SET sex = '$sex' , signature = '$signature' , address = '$address'
        WHERE user_id = '$id'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
echo "<script>alert('保存成功!');</script>" ;
echo "<script>location.href='../html/setting.html';</script>" ;

function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}	
 ?>