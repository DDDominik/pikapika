<?php 
session_start() ;
include "connectDB.php" ;
$id = $_SESSION['id'] ;
$prevpsw = $_POST['prevpsw'] ;
$psw = $_POST['psw'] ;
//获取用户信息
$sql = "SELECT * FROM user WHERE user_id = '$id'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
$data = $res->fetchAll(PDO::FETCH_ASSOC) ;
if( $data[0]['password']==base64_encode(md5($prevpsw.'pikaqiu')) ) //密码正确
{
	//更新密码
	$psw = base64_encode(md5($psw.'pikaqiu')) ;
	$sql = "UPDATE user SET password = '$psw' WHERE user_id = '$id'" ;
	$res = $dbh->prepare($sql) ;
	$res->execute() ;
	//需重新登陆
	echo "<script>alert('修改成功!请重新登陆!');</script>" ;
	session_unset() ;
	echo "<script>location.href='../html/login.html';</script>" ;
}
else //密码错误
{
	echo "<script>alert('修改失败!密码错误!');</script>" ;
	echo "<script>location.href='../html/site.html';</script>" ;
}                              
 ?>