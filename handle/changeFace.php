<?php 
session_start() ;
include "connectDB.php" ;
$id = $_SESSION['id'] ;
$file = $_FILES['face'] ;
$name = base64_encode(time()).".".get_extension($file['name']) ; 
$tmp = $file['tmp_name'] ; 

$destination = '../info/face/'.$id."/".$name ;
//更新头像
$sql = "UPDATE user SET face = '$name' WHERE user_id = '$id'" ;
$res = $dbh->prepare($sql) ;
$res->execute() ;
if(!empty($_POST['x']))
{
	$x = $_POST['x'] ;
	$y = $_POST['y'] ;
	$w = $_POST['w'] ;
	$h = $_POST['h'] ;
	cut($tmp, $x, $y, $w, $h, $destination) ; //裁剪并保存
}
else move_uploaded_file($tmp,$destination) ; //移动头像图片


echo "<script>alert('上传成功!');</script>" ;
echo "<script>location.href='../html/face.html';</script>" ;  

function get_extension($file) 
{ 
	return pathinfo($file, PATHINFO_EXTENSION); 
}     

function cut($background, $cut_x, $cut_y, $cut_width, $cut_height, $location)
{
	list($width, $height ,$type)=getimagesize($background);
	switch($type)
	{
		case 1 : $back = imagecreatefromgif($background) ; break ;
		case 3 : $back = imagecreatefrompng($background) ; break ;
		default : $back = imagecreatefromjpeg($background) ; 
	} 
	$new = imagecreatetruecolor($cut_width, $cut_height);
	imagecopyresampled($new, $back, 0, 0, $cut_x/200*$width, $cut_y/200*$height ,$cut_width,$cut_height , $cut_width/200*$width, $cut_height/200*$height);
	switch($type)
	{
		case 1 : imagegif($new, $location) ;
		case 3 : imagepng($new, $location) ;
		default : imagejpeg($new, $location) ;
	}
	imagedestroy($new);
	imagedestroy($back);
}                     
 ?>