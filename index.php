<?php header('Content-Type: text/html; charset=utf-8');

$host = $_SERVER['HTTP_HOST']; 
$uri = rtrim(dirname($_SERVER['PHP_SELF']), '/\\'); 
$extra = 'index.html'; 
header("Location: http://$host$uri/$extra");



?>