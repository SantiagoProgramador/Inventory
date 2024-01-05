const inventario = {
    Gaseosa: {cantidad: 50, precio: 1000, marca: "Coca-cola"},
    Papas: {cantidad: 200, precio: 2000, marca: "Margarita"},
    Dulces: {cantidad: 500, precio: 300, marca: "Colombina"},
    Lacteos: {cantidad: 100, precio: 4000, marca: "colanta"}
}

function caso(opciones){

    switch (opciones) {
        case 1:
            
            const div1 = document.getElementById("respuesta1")
            div1.hidden = false;
            
        break;
        
        case 2:
            const div2 = document.getElementById("respuesta2")
            div2.hidden = false;
            const eliminarProducto = document.getElementById("eliminar")
            
            for (let index = 0; index < Object.keys(inventario).length; index++) {
                const element = Object.keys(inventario)[index];
                const opcionesEliminar = document.createElement("option");
                opcionesEliminar.setAttribute("class","opciones");
                opcionesEliminar.textContent = element;
                eliminarProducto.appendChild(opcionesEliminar);     
            }
            
        break;
        
        case 3:
            const div3 = document.getElementById("respuesta3")
            div3.hidden = false;
            const modificarProducto = document.getElementById("modificar")
            
            for (let index = 0; index < Object.keys(inventario).length; index++) {
                const element = Object.keys(inventario)[index];
                const opcionesModificar = document.createElement("option");
                opcionesModificar.setAttribute("class","opcionesM");
                opcionesModificar.textContent = element;
                modificarProducto.appendChild(opcionesModificar);     
            }
        break;
        
        case 4:
            const div4 = document.getElementById("respuesta4")
            div4.hidden = false;


        break;
        
        case 5:
            const div5 = document.getElementById("respuesta5")
            div5.hidden = false;
            
        break;
        
        case 6:
            alert("Gracias por acceder a tu inventario, si necesitas algo no dudes en volver a ingresar.")
            const botonReset = document.getElementById("respuestaOpcion2");

            botonReset.addEventListener("click",location.reload(true))
        break;
    }
}

function Addproducto(){
    let nombreProducto = document.getElementById("nombreProducto").value;
    let productoCantidad = document.getElementById("productoCantidad").value;
    let productoPrecio = document.getElementById("productoPrecio").value;
    let marca = document.getElementById("marca").value;

    const nuevoProducto = {cantidad: productoCantidad, precio: productoPrecio, marca: marca};
    inventario[nombreProducto] = nuevoProducto;
    const respuesta1 = document.getElementById("resultados1");

    const respuesta1Arreglada = JSON.stringify(inventario).replace(/[{()}]/g,'');
    console.log(respuesta1Arreglada);
    respuesta1.textContent = respuesta1Arreglada;
    return inventario;
}

function eliminarProducto2(){
    const opciones = document.getElementsByClassName("opciones");
    const respuesta2 = document.getElementById("resultados2");

    for (claves of opciones){
        if (claves.selected){
            delete inventario[claves.value];
            respuesta2.textContent = JSON.stringify(inventario).replace(/[{()}]/g,'');
        }
    
    }

}

function modificarProducto() {
    let nombreProducto = document.getElementById("modificar").value;
    let productoCantidad = document.getElementById("productoCantidad").value;
    let productoPrecio = document.getElementById("productoPrecio").value;
    let marca = document.getElementById("marca").value;

    const nuevoModificado = {cantidad: productoCantidad, precio: productoPrecio, marca: marca};
    inventario[nombreProducto] = nuevoModificado;
    const respuesta3 = document.getElementById("resultados3");
   
    const respuesta1Arreglada = JSON.stringify(inventario).replace(/[{()}]/g,'');
    console.log(respuesta1Arreglada);
    respuesta3.textContent = respuesta1Arreglada;
    return inventario;
}

function buscarProducto() {
    const buscarProducto = document.getElementById("nombreProductoM").value
    const respuesta4 = document.getElementById("resultados4")

    for (let index = 0; index <  Object.keys(inventario).length; index++) {
        const element =  Object.keys(inventario)[index];
        if (Object.keys(inventario).includes(buscarProducto)){
            respuesta4.textContent =`A continuación los resultados de tu búsqueda: ${buscarProducto}: ${Object.entries(inventario[buscarProducto])}`;
            break;
        } else if (Object.keys(inventario).includes(buscarProducto)== false){
            alert("El producto que estás buscando no se encuentra en el inventario.")}
            break;
        };
}

function filtrarPrecio() {
    const preciominimo = document.getElementById("minimo").value;
    const preciomaximo = document.getElementById("maximo").value;
    const respuesta5 = document.getElementById("resultados5");
    
    for (key in inventario) {
        const element1 = inventario[key];

        if (element1.precio <= preciomaximo && element1.precio >= preciominimo) {
           respuesta5.textContent +=  `${key} : ${JSON.stringify(inventario[key]).replace(/[{()}]/g,'')}`;
        } 
    }  
}









