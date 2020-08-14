"use strict"

/*
Los podemos encontrar con el nombre de Ciclos, Loops, o Iteraciones.

Existen 2 tipos de ciclos, definidos y los indefinidos

Definidos: for
Indefinidos: do, do-while

for(incialización del contador; condición, incremento o decremento){
    acciones
}

Un ciclo while evalua y dependiendo de esa evaluación puede que entre o no entre a ejecutarse las acciones dentro del ciclo
while(condicion){
    acciones
}

En cambio un ciclo do-while por lo menos se va a ejecutar una sola vez y despues evaluará si sigue con el ciclo o lo termina
do{
    acciones
}while(condición)

*/

var productos=5;

for (let contador = 0; contador < productos; contador++) {
    console.log("Producto #"+productos);
    //debugger;   cuando se utiliza el "debugger" este realiza un debug en el navegador, pero solamente lo hace cuando la instrucción llega a el
}

while(productos>0){
    console.log("Producto vendido");
}

do{
    console.log("producto vendido");
    productos--;
}while(productos>=1)