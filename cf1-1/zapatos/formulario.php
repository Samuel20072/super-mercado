<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
</head>
<body>

    <div class="container">
        <form action="guardar.php" method="POST">
            <div class="mb-3">
                <label for="Marca" class="form-label">Marca</label>
                <input type="text" class="form-control" name="marca">
            </div>
            <div class="mb-3">
                <label for="Color" class="form-label">Color</label>
                <input type="text" class="form-control" name="color">
            </div>
            <div class="mb-3">
                <label for="Talla" class="form-label">Talla</label>
                <input type="number" class="form-control" name="talla">
            </div>
            <div class="mb-3">
                <label for="Genero" class="form-label">Genero</label>
                <input type="text" class="form-control" name="genero">
            </div>
            <div class="mb-3">
                <label for="Precio" class="form-label">Precio</label>
                <input type="number" class="form-control" name="precio">
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
    </div>

    
</body>
</html>