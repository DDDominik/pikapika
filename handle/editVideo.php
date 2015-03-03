<?php 
include "connectDB.php" ;

$Vid = $_POST['id'] ;
$name = test_input($_POST['name']) ;
$tag = test_input($_POST['tag']) ;
$description = test_input($_POST['description']) ;
$sql = "UPDATE video SET name = '$name' , tag = '$tag' , description = '$description' " ;

if($_FILES['picture']['error']=="0") //若上传了图片，则更新封面
{
	$picture = $_FILES['picture'] ;
	$Pname = base64_encode(time()).".".get_extension($picture['name']) ;
	$Ptmp = $picture['tmp_name'] ;
	$path = "../info/video/".$Vid ;
	$Pdestination = $path."/".$Pname ;
	move_uploaded_file($Ptmp,$Pdestination) ;
	$sql = $sql.", picture = '$Pname' " ;
}

$sql = $sql."WHERE video_id = '$Vid' " ;
$res = $dbh->prepare($sql) ;
$res->execute() ;

echo "<script>alert('保存成功！');</script>" ;
echo "<script>location.href='../html/edit.html?id=".$Vid."'</script>" ;

function test_input($data) 
{
  	$data = trim($data);
  	$data = stripslashes($data);
  	$data = htmlspecialchars($data);
  	$data = mysql_escape_string($data);
  	return $data;
}

function get_extension($file) 
{ 
	return pathinfo($file, PATHINFO_EXTENSION); 
}  
 ?>