<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
require "conexion.php";

$usuarioIDActualizado = $_GET['usuarioIDActualizado'];
$nombreActualizado    = $_GET['nombreActualizado'];

if(!empty($nombreActualizado)){
	$cliente = mysqli_real_escape_string($con, $nombreActualizado);
	$resultado = mysqli_query($con, "UPDATE usuarios SET nombre='$cliente' WHERE id=$usuarioIDActualizado");
	mysqli_close();
}

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
?>