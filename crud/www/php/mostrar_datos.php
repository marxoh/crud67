<?php
	header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
	include("conexion.php");

	$resultado = mysqli_query($con, "SELECT * FROM usuarios");
	$table  = '<div id="verde" class="tableContainer">';
	$table .= '<div id="rojo" class="tableScrollInner">';
	$table .= '<table id="restable"';
	$table .= '<thead>';
	$table .= '<tr>';
    $table .= '<th>ID<div>ID</div></th>';
	$table .= '<th>Usuario<div>Usuario</div></th>';
    $table .= '<th>Nombre<div>Nombre</div></th>';
    $table .= '<th>Apellido<div>Apellido</div></th>';
    $table .= '<th>Eliminar<div>Eliminar</div></th>';
	$table .= '</tr>';
	$table .= '</thead>';
	$table .= '<tbody>';
	
	while($registro = mysqli_fetch_assoc($resultado))
	{
		$table .= '<tr>';
		$table .= '<td>'.$registro['id'].'</td>';
		$table .= '<td onkeyup="ox();" contenteditable>'.$registro['usuario'].'</td>';
		$table .= '<td onkeyup="ox();" id="nombre_usuario" data-id_usuario="'.$registro['id'].'" contenteditable>'.$registro['nombre'].'</td>';
		$table .= '<td onkeyup="ox();" id="apellido_usuario" data-id_apellido="'.$registro['id'].'" contenteditable>'.$registro['apellido'].'</td>';
		$table .= '<td><button id="eliminar" data-id="'.$registro['id'].'">Eliminar</button></td>';
		$table .= '</tr>';
	}
	
	$table .= '<tr>';
	$table .= '<td>*</td>';
	$table .= '<td></td>';
	$table .= '<td id="nombre_add" contenteditable></td>';
	$table .= '<td id="apellido_add" contenteditable></td>';
	$table .= '<td><button id="add" onclick="agregar_datos();">Agregar</button></td>';
	$table .= '</tr>';

	$table .= '</tbody>';
	$table .= '</table>';
	$table .= '</div>';
	$table .= '</div>';
	
	echo $table;

	mysqli_close($con);

	header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
?>