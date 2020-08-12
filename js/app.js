"use strict"
/*Se pueden declarar variables sin necesidad de utilizar la palabra var pero eso una mala práctica, para evitar ese tipo de malas prácticas al principio de cada archivo js se debe de declarar la frase "use strict". Esto forza a que en el archivo force a utilizar las palabras reservadas solamente para el uso al cual fue destinado, por ejemplo public es una palabra reservada, y no se puede utilizar como el nombre de una variable.

 x="3.1416";
sin "use strict" en la consola se mostrará que no hay errores, y al llamar la variable se mostrará correctamente
cuando se utiliza el "use strict" se deberá de utilizar las palabras reservadas para su funcionamiento correcto y buenas prácticas, en este ejemplo cuando ya se utiliza el "use strict" en la consola se mostrará que hay un error en el archivo ya que hay una variable no declarada, y se deberá utilizar la palabra var para declarar la variable
 */
alert("Hola desde un archivo externo");
console.log("Hola consola");

 var x=3.1416;