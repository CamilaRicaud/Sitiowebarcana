
/* primer pre-entrega*/

function saludo(nombre){
    alert("Bienvenido/a: " + nombre);
}

for (let i = 1; i<= 3; i++){
    let nombrecompleto = prompt("Ingresa tu nombre y apellido");
    if(nombrecompleto != ""){
        saludo(nombrecompleto);
        let productos = prompt("Ingresa el producto que quieras comprar: \n 1-Agua Micelar. \n 2-Tonico Floral. \n 3-Serum con Acido Hialuronico y Vit C.")
        switch(productos){
            case "1":
                alert("Seleccionaste el producto Agua Micelar. Muchas gracias por tu compra!");
                break;
            case "2":
                alert("Seleccionaste el producto Tonico Floral. Muchas gracias por tu compra!");
                break;
            case "3":
                alert("Seleccionaste el producto Serum con Acido Hialuronico y Vit C. Muchas gracias por tu compra!");
                break;
            default:
                alert("La opcion ingresada no es correcta.")
                break;
        }
        break;
    }else {
        alert("No ingresaste tu nombre, intentelo nuevamente.");
    }
}