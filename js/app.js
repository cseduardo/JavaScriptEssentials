"use strict"

/*
las variables son de tipo de destructivas, si se le ingresa primero un valor, y despues se le ingresa otro valor, el primer valor desaparecerá y no se podrá recuperar de ninguna manera

Para defninir el alcance de una variable existen dos formas de definirlo, una con la palabra reservada var, que esta se convierte en una variable global o sea que no importa si existe dentro de una funcion o una estructura de datos, y si se quiere utilizar una variable de bloque o variable local e deberá utilizar la palabra reservada let ya sea q se quiera utilizar solamente en una funcio o estructura de datos

*/
var nombre="Eduardo";

console.log(nombre);

function saludo(){
    let nombre="Campos";
    console.log(nombre);

    let edad=27;
    console.log(edad);
}
console.log(edad);