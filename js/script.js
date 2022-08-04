/*let iva = true;

 while(iva){
     let precioIva = parseFloat(prompt("Ingresar monto a calcular el iva"));
     console.log(precioIva + (precioIva * 0.21));
     let seguir = prompt("¿Desea continuar?").toLowerCase();
    if(seguir == "si" || seguir == "si quiero"){
     console.log(precioIva + (precioIva * 0.21));        
    }else if(seguir =="no" || seguir == "no"){
        iva = false;
    }else{
        alert("Caracter no reconocido")
    }
 }*/

/*const cambiarDolar = 326.00;
const cambiarEuro = 134.53;
const comprarDolar = (num) => (num / cambiarDolar);
const comprarEuro = (num) => (num / cambiarEuro);
let continuar;
do{
let numero , cambio;
do{
    numero = parseFloat(prompt("Ingrese monto a convertir"));
    cambio = prompt("Ingrese que tipo de moneda en el que quiera hacer el cambio (dolar o euro)").toLowerCase();
    if(isNaN(numero)){
        alert("numero invalido")
    }

}while(isNaN(numero) || (numero === 0 && cambio != ""));
switch(cambio){
    case "dolar":
        console.table(comprarDolar(numero));
        break;
    case "euro":
        console.table(comprarEuro(numero));
        break;
    default:
        alert("Operacion invalida");     
}
do{
    continuar= prompt("¿Desea hacer otra conversion?").toLowerCase();
}while(continuar != "si" && continuar != "no");
}while(continuar!="no");*/




/*class Mercaderia{
    constructor(producto = "",marca = "",stock = 0,precio = 0){
       this.producto = producto;
       this.stock = stock;
       this.precio = precio;
       this.marca = marca;
    }
    
}
const producto1 = new Mercaderia("Aceite", "Natura", 100, 420);
const producto2 = new Mercaderia("Arroz", "Gallo", 100, 200);
const producto3 = new Mercaderia("Azucar", "Ledesma", 100, 320);
const producto4 = new Mercaderia("Aceitunas", "Ceitun", 100, 240);
const producto5 = new Mercaderia("Leche", "Armonia", 100, 160);
const producto6 = new Mercaderia("Leche", "Serenisima", 100, 200);
const producto7 = new Mercaderia("Galletitas", "Surtidas", 100, 220);
const producto8 = new Mercaderia("Dulce de leche", "Milkaut", 100, 300);
const producto9 = new Mercaderia("Papel higienico", "Suave", 100, 350);

const productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9];
console.table(productos);*/



//* Proyecto final parte 1 
alert("Convertidor de sueldo a moneda extranjera dolar o euro");

const cambiarDolar = 326.00;
const cambiarEuro = 134.53;
const comprarDolar = (num) => (num / cambiarDolar);
const comprarEuro = (num) => (num / cambiarEuro);

let continuar;
do {
    let numero, cambio;
    do {
        numero = parseFloat(prompt("Ingrese monto a convertir"));
        cambio = prompt("Ingrese que tipo de moneda en el que quiera hacer el cambio (dolar o euro)").toLowerCase();
        if (isNaN(numero)) {
            alert("numero invalido")
        }

    } while (isNaN(numero) || (numero === 0 && cambio != ""));
    switch (cambio) {
        case "dolar":
            console.table(comprarDolar(numero));
            break;
        case "euro":
            console.table(comprarEuro(numero));
            break;
        default:
            alert("Operacion invalida");
    }
    do {
        continuar = prompt("¿Desea hacer otra conversion?").toLowerCase();
    } while (continuar != "si" && continuar != "no");
} while (continuar != "no");

class Sueldos {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

}

const empleado1 = new Sueldos(prompt("ingrese el nombre del empleado 1"),(parseFloat(prompt("Ingrese la conversion de sueldo aca"))));
const empleado2 = new Sueldos(prompt("ingrese el nombre del empleado 2"),(parseFloat(prompt("Ingrese la conversion de sueldo aca"))));
const empleado3 = new Sueldos(prompt("ingrese el nombre del empleado 3"),(parseFloat(prompt("Ingrese la conversion de sueldo aca"))));
const empleado4 = new Sueldos(prompt("ingrese el nombre del empleado 4"),(parseFloat(prompt("Ingrese la conversion de sueldo aca"))));
const empleado5 = new Sueldos(prompt("ingrese el nombre del empleado ultimo empleado"),(parseFloat(prompt("Ingrese la conversion de sueldo aca"))));

const empleados = [empleado1, empleado2, empleado3, empleado4, empleado5];
console.table(empleados);