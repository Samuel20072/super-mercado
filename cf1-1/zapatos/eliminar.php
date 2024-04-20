<?php

    $codigo = $_GET['codigo'];

    $db = new PDO('mysql:host=localhost;dbname=cf1-1','root','');
    $db->query("DELETE FROM zapatos WHERE codigo=$codigo");

    header("location:listado.php");

?>