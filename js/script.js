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
const compraDolar = 326.00;
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
}while(continuar!="no");

