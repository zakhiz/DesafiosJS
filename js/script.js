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
/*const compraDolar = 326.00;
const ventaDolar =321.00;
const comprarDolar = (num) => (num / compraDolar);
const venderDolar = (num) => (num * ventaDolar);
alert("Hola Bienvenido/a al convertidor de peso a dolar");
alert("Escribe compra o venta segun la operacion que desees hacer");
let continuar;
do{
let numero , cambio;
do{
    numero = parseFloat(prompt("Ingrese monto a convertir"));
    cambio = prompt("Ingrese que tipo de operacion desea hacer (compra o venta)").toLowerCase();
    if(isNaN(numero)){
        alert("numero invalido")
    }

}while(isNaN(numero) || (numero === 0 && cambio != ""));
switch(cambio){
    case "compra":
        console.log(comprarDolar(numero));
        break;
    case "venta":
        console.log(venderDolar(numero));
        break;
    default:
        alert("Operacion invalida");     
}
do{
    continuar= prompt("¿Desea hacer otra conversion?").toLowerCase();
}while(continuar != "si" && continuar != "no");
}while(continuar!="no");*/


class Mercaderia{
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
console.table(productos);
