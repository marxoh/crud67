<?php
$mysql_host = 'mysql.hostinger.es';
$mysql_user = 'u964953630_root';
$mysql_pass = 'y4=OfY8:cTfG8#X/TU';
$mysql_db   = 'u964953630_reg';

$con = mysqli_connect($mysql_host,$mysql_user,$mysql_pass,$mysql_db);

if (mysqli_connect_errno())
{
	echo "mrx> Failed to connect to MySQL: " . mysqli_connect_error();
}

?>