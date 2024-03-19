function agregarAlCarrito (producto){
    const memoria = JSON.parse(localStorage.getItem("productos" ));
    console.log(memoria);
    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("productos",JSON.stringify([nuevoProducto]));
    }else{
        const indiceProducto = memoria.findIndex(item => item.id === producto.id);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
        }else{
            nuevaMemoria[indiceProducto].cantidad ++;
        }
        localStorage.setItem("productos",JSON.stringify(nuevaMemoria));
    }
    actulizarNumeroCarrito();

}


function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad= 1;
    return nuevoProducto;

}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function actulizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("productos" ));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
    cuentaCarritoElement.innerText = cuenta;
}
actulizarNumeroCarrito();
