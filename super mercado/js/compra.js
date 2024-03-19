const contenedorTarjetas = document.getElementById("productos-container");
let siguiente = document.querySelector("#siguiente")
let atras = document.querySelector("#atras")


function crearTarjetasProductos(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
        <h2>categoria: ${producto.categoria} </h2>
        <img src="./img/productos/${producto.id}.png" alt="No hay imagen">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio}</p>
        <button>Agregar al carrito</button>`
       
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto   .getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
    });
}
function crearTarjetasProductosDescuentos(productos){
    productos.forEach(producto => {

       
    })

}

crearTarjetasProductos(productosgranos);

let categorias = [productosgranos, productosLacteos, productosbebidas]; 
let indiceCategoria = 0; 

function mostrarCategoriaActual() {
    contenedorTarjetas.innerHTML = "";
    crearTarjetasProductos(categorias[indiceCategoria]);
}

siguiente.addEventListener('click', function() {
    if (indiceCategoria < categorias.length - 1) {
        indiceCategoria++;
    } else {
        indiceCategoria = 0; 
    }
    mostrarCategoriaActual();
});

atras.addEventListener('click', function() {
    if (indiceCategoria > 0) {
        indiceCategoria--;
    } else {
        indiceCategoria = categorias.length - 1; 
    }
    mostrarCategoriaActual();
});

mostrarCategoriaActual();
crearTarjetasProductosDescuentos(productosbebidas);