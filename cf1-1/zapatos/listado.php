<?php

$db = new PDO('mysql:host=localhost;dbname=cf1-1','root','');
$zapatos = $db->query("SELECT * FROM zapatos")->fetchAll(PDO::FETCH_OBJ);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <table class="table table-hover table-bordered table-dark">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>Talla</th>
                    <th>Género</th>
                    <th>Precio</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($zapatos as $zapato): ?>
                    <tr>
                        <td><?php echo $zapato->codigo;?></td>
                        <td><?php echo $zapato->marca;?></td>
                        <td><?php echo $zapato->color;?></td>
                        <td><?php echo $zapato->talla;?></td>
                        <td><?php echo $zapato->genero;?></td>
                        <td><?php echo $zapato->precio;?></td>
                        <td>
                            <a class="btn btn-danger" href="eliminar.php?codigo=<?php echo $zapato->codigo;?>">Eliminar</a>
                            <a class="btn btn-success" href="editar.php?codigo=<?php echo $zapato->codigo;?>&marca=<?php echo $zapato->marca;?>&color=<?php echo $zapato->color;?>&talla=<?php echo $zapato->talla;?>&genero=<?php echo $zapato->genero;?>&precio=<?php echo $zapato->precio;?>">Editar</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <a class="btn btn-info" href="formulario.php">Nuevo zapato</a>
    </div>
</body>
</html>