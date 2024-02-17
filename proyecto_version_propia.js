//Declaración de variables
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000 ;

//factor de los recargos 
var edad_18 = 0.1 ; // 10% 
var edad_25 = 0.2 ; // 20% 
var edad_50 = 0.3 ; // 30% 

var casado_18 = 0.1 ; // 10% 
var casado_25 = 0.2 ; // 20% 
var casado_50 = 0.3 ; // 30% 

var hijos_recargo = 0.2 ; // 20% 

//Valor de los Recargos 
var recargo = 0 ;
var recargo_casado = 0 ;
var recargo_hijos = 0 ;
var recargo_total = 0 ;
//edad del conyugue
var edad_conyuge_numero = 0 ;

//Precio final 
var precio_final = 0 ;

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor") ;
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ") ;
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad) ;
// Determinando si se puede asegurar o no
if(edad_numero >=18){
  // Calculando el recargo por la edad del asegurado
  if(edad_numero>=18 && edad_numero<25){
    recargo = precio_base * edad_18 ;
  }
  else if(edad_numero>=25 && edad_numero<50){
    recargo = precio_base * edad_25 ;
  }
  else{
    recargo = precio_base * edad_50 ;
  }

  // Información concerniente al conyugue
  var casado = prompt("¿Está casado actualmente?","si/no") ;
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge ;
  if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Que edad tiene su esposo/a? Ingrese solo números") ;
    //convirtiendo la edad del cónyuge si se esta casado/a
    edad_conyuge_numero = parseInt(edad_conyuge) ;
    //Calculamos el recargo en base a la edad del conyugue
    if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
      recargo_casado = precio_base * casado_18 ;
    }
    else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
      recargo_casado = precio_base * casado_25 ;
    }
    else{
      recargo_casado = precio_base * casado_50 ;
    }
  }
  //Información concerniente a los hijos
  var hijos = prompt("¿Tiene hijos o hijas?", "si/no") ;
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos = 0 ;
  if("SI"== hijos.toUpperCase()){
    cantidad_hijos = prompt("¿Cuantos hijos/as tiene?") ;
    //convirtiendo la cantidad de hijos a números
    hijos_numero = parseInt(cantidad_hijos) ;
    //calculo del recargo por el número de hijos
    recargo_hijos = ((precio_base * hijos_recargo) * hijos_numero) ;
  }

  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo + recargo_casado + recargo_hijos ;

  //calculo del precio final 
  precio_final = precio_base + recargo_total ;

  //Resultado
  alert ("Para el asegurado "+nombre.toUpperCase()+"\nEl recargo por la edad será de: "+recargo+"\nEl recargo por ser casado será de: "+recargo_casado+"\nEl recargo por "+cantidad_hijos+" hijo(s) será de: "+recargo_hijos+"\nEl recargo total sera de: "+recargo_total+"\nEl precio base será de: "+precio_base+"\nTotal será de: "+precio_final) ;
  }
else{
  alert (nombre.toUpperCase()+", es menor de 18 años, no se le puede asegurar, verifíque.") ;
}