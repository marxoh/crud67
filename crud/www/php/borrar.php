<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
require "conexion.php";

$usuarioIDEliminado = $_GET['usuarioIDEliminado'];

if(!empty($usuarioIDEliminado)){
	$resultado = mysqli_query($con, "DELETE FROM usuarios WHERE id = $usuarioIDEliminado");
	mysqli_close();
}

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
?>