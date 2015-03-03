<?php 
session_start() ;
echo (isset($_SESSION['name']) ? $_SESSION['name'] : "") ; //成功返回用户名，失败返回''
 ?>