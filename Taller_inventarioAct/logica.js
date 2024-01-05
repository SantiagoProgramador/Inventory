const inventario = {
    Gaseosa: {cantidad: 50, precio: 1000, marca: "Coca-cola"},
    Papas: {cantidad: 200, precio: 2000, marca: "Margarita"},
    Dulces: {cantidad: 500, precio: 300, marca: "Colombina"},
    Lacteos: {cantidad: 100, precio: 4000, marca: "colanta"}
}

let input = prompt("Ingrese la opción deseada:\n"+
"1. Añadir producto\n"+
"2. Eliminar producto\n"+ 
"3. Modificar producto\n"+
"4. Buscar producto\n"+
"5.Filtrar por precio\n"+
"6. Salir ");


switch (input) {
    case "1":
        let nombreProducto = prompt("Ingrese el nombre del producto que desea añadir.");
        let productoCantidad = prompt("Ingrese la cantidad");
        let productoPrecio = prompt("Ingrese el precio");
        let marca = prompt("Ingrese la marca del producto.");
        
        const nuevoProducto = {cantidad: productoCantidad, precio: productoPrecio, marca: marca};
         
        inventario[nombreProducto] = nuevoProducto
        console.log(inventario);
    break;
    
    case "2":
        
        let eliminarProducto = prompt("Escriba el producto que desea eliminar.")   
        for (let index = 0; index <  Object.keys(inventario).length; index++) {
            const element =  Object.keys(inventario)[index];
            if (Object.keys(inventario).includes(eliminarProducto)){
                delete inventario[eliminarProducto];
                break;
            } else if (Object.keys(inventario).includes(eliminarProducto)== false){
                alert("El producto que deseas eliminar no existe.")}
                break;
            };
        console.log(inventario);
    break;
    
    case "3":
        let añadirProducto = prompt("Escriba el producto que desea modificar.")   
        for (let index = 0; index <  Object.keys(inventario).length; index++) {
            const element =  Object.keys(inventario)[index];
            if (Object.keys(inventario).includes(añadirProducto)){
                let modificarCantidad = prompt("Escriba la nueva cantidad."), modificarPrecio = prompt("Escriba el nuevo precio."), modificarMarca = prompt("Escriba la nueva marca.")
                const productoModificado = {cantidad: modificarCantidad, precio: modificarPrecio, marca: modificarMarca}
                inventario[añadirProducto] = productoModificado;
                break;
            } else if (Object.keys(inventario).includes(añadirProducto)== false){
                alert("El producto que deseas modificar no existe.")}
                break;
            };
        console.log(inventario);
    break;
    
    case "4":
        let buscarProducto = prompt("Escriba el producto que desea buscar.")   
        for (let index = 0; index <  Object.keys(inventario).length; index++) {
            const element =  Object.keys(inventario)[index];
            if (Object.keys(inventario).includes(buscarProducto)){
                alert(`A continuación los resultados de tu búsqueda: ${Object.values(inventario[buscarProducto])}`);
                break;
            } else if (Object.keys(inventario).includes(buscarProducto)== false){
                alert("El producto que estás buscando no se encuentra en el inventario.")}
                break;
            };
        console.log(inventario);

    break;
    
    case "5":
        let filtrarProducto = prompt("Escriba el precio máximo")
        let filtrarProducto2 = prompt("Escriba el precio mínimo")
        let verificarNumero = Number(filtrarProducto);
        let verificarNumero2 = Number(filtrarProducto2);
        
        if (isNaN(verificarNumero)) {
            alert("Por favor ingrese un valor numérico.");
            break;
        }
    
        for (const key in inventario) {
            const element1 = inventario[key];
    
            if (element1.precio <= verificarNumero && element1.precio >= verificarNumero2) {
                console.log(element1);
            } 
        }   
        
        break;
    
    
    case "6":
        alert("Gracias por acceder a tu inventario, si necesitas algo no dudes en volver a ingresar.")
    break;
    
}


