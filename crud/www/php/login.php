<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
include("conexion.php");

$nombre = $_GET['nombre'];
$pass = $_GET['pass'];
$resultado = mysqli_query($con, "SELECT * FROM usuarios");
$esta="no";

while($registro = mysqli_fetch_assoc($resultado))
{
	if (($registro['nombre'] == $nombre) && ($registro['password'] == $pass)){
		$esta = "si";
	}
}

echo $esta;

mysqli_close($con);

header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
?>