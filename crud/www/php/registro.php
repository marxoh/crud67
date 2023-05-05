<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
require "conexion.php";

$nombre = $_GET['nombre'];
$pass = $_GET['pass'];

$resultado = mysqli_query($con, "INSERT INTO `usuarios`(`id`,`usuario`,`nombre`,`apellido`,`telefono`,`email`,`password`) VALUES (null,null,'$nombre',null,null,null,'$pass')");
mysqli_close();


header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
?>