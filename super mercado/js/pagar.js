const contenedorTarjetas = document.getElementById("productos-container");




function crearTarjetasProductos(){
    const productos = JSON.parse(localStorage.getItem("productos"))
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
        <h5>categoria: ${producto.categoria} </h5>
        <img src="./img/productos/${producto.id}.png" alt="No hay imagen">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio}</p>
        <div>
        <button>-</button>
        <span"cantidad">0</span>
        <button>+</button>
        </div>
        
        `

        contenedorTarjetas.appendChild(nuevoProducto);

    });
}
function admin(){
    for (let i = 0; i < (productos); i++) {

        console.log(productos)
    }
}
function verificar(usuarios){


    if(documentousuario != (usuarios)){

       
        crearTarjetasProductos();
    }else{
        admin(usuarios)
    }
}



verificar();

