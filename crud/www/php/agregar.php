<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
require "conexion.php";

$nombre_add = $_GET['nombre_add'];
$apellido_add = $_GET['apellido_add'];

if(!empty($nombre_add) && !empty($apellido_add)){
	$resultado = mysqli_query($con, "INSERT INTO `usuarios`(`id`,`usuario`,`nombre`,`apellido`,`telefono`,`email`,`password`) VALUES (null,null,'$nombre_add','$apellido_add',null,null,null)");
	mysqli_close();
}

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
?>