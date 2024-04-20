<?php

/*     echo "<pre>";
    print_r($_POST);
    echo "</pre>"; */


    $marca = $_POST['marca'];
    $color = $_POST['color'];
    $talla = $_POST['talla'];
    $genero = $_POST['genero'];
    $precio = $_POST['precio'];

    $db = new PDO('mysql:host=localhost;dbname=cf1-1','root','');
    $db->query("INSERT INTO zapatos VALUES(null,'$marca','$color',$talla,'$genero',$precio)");

    header("location:listado.php");


?>