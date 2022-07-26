let iva = true;

 while(iva){
     let precioIva = parseFloat(prompt("Ingresar monto a calcular el iva"));
     console.log(precioIva + (precioIva * 0.21));
     let seguir = prompt("¿Desea continuar?").toLowerCase();
    if(seguir == "si" || seguir == "si quiero"){
     console.log(precioIva + (precioIva * 0.21));        
    }else if(seguir =="no" || seguir == "no"){
        iva = false;
    }else{
        alert("Comando no reconocido")
    }
 }



