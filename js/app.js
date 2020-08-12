"use strict"

/*
Tipo de datos

-Numericos
En javascript se pueden utilizar datos de tipo numericos como enteros, tambien flotantes, o numeros negativos sin necesidad de utilizar las comillas
Hay que tener en cuenta que no si se desean realizar una operacion entre dos cantidades pero una está dentro de comillas el resultado final de esa operación será la concatenación de esos dos valores. Ejemplo:

var cantidad="100";

(Resultado de la suma desde la consola del navegador)
cantidad+20
10020

Para poder realizar una operación correctamente se puede parsear esa variable en lo el tipo de dato deseado en este caso numerico, para esto se utiliza la funcion Number(valor). Ejemplo

var cantidad="100";
var nuevaCantidad=Number(cantidad);

Tambien existen otras funciones como:
parseInt()
parseFloat()

Estas funciones convierten las cadenas ya sea en enteros o flotantes respectivamente

-Cadenas

Para utilizar una cadena de texto se pueden utilizar comillas sencillas o comillas dobles siempre teniendo en cuenta que si se inicia con comillas sencillas se debe de terminar con comillas sencillas, al igual que si se inicia con comillas dobles se debe de terminar con comillas dobles.
Si se intenta utilizar un número como cadena, se puede utilizar la función String() para convertilo a cadena.

-Boleanos

Para declarar un tipo de dato boleano bastará con utilizar un true o un false
Tambien se puede utilizar la funcion Boolean para evaluar cualquier cosa. Ejemplo

var esMayor=Boolean(10>9);

-Fechas

Para obtener la fecha bastará con utilizar la funcion new Date. Ejemplo

var fecha= new Date();

Si desde consola se obtiene el valor de variable fecha, esta devolvera el día, el mes, el año, la hora, el minuto y el segundo en el se invocó la funciónpor primera vez, este valor no cambiará aunque se invoque en otro momento la variable, si se quiere generar una nueva fecha se tendrá que utilizar de nuevo la función new Date();-
Al utilizar el tipo de dato Date, este contiene metodos con el cual podemos saber que día de la semana es, o que mes es, que año es, entre muchas otros valores, esto se puede obtener de dos maneras, directamente poniendo un punto despues del parentesis y poner la función que se va a utilizar o cuando se llame a la variable enseguida poner un punto y poner la funcion a utilizar. Ejemplo

var dia= new Date().Date();
var mes= fecha.getMonth();

-Simbolos

Estos solo bastaran con utilizar Symbol(); este tipo de datos se puede utilizar cuando se manejan varios ambientes y se quiere saber en que ambiente está.

var simbolo=Symbol();
var ambiente=Symbol("deb");

Cuando se utiliza los simbolos, aunque se tengan declarados dos de ellos iguales en diferentes variables, su valor no es el mismo, Ejemplo

var simbolo1=Symbol();
var simbolo2=Symbol();

(Resultado de la comparación desde la consola del navegador)
simbolo1==simbolo2
false

-Json

se declaran los objetos para un Json. Ejemplo

var person={Name:"Eduardo", Edad:27};

var persons=[
    {Name:"Eduardo", Edad:27},
    {Name:"Lalo", Edad:27},
    {Name:"Edward", Edad:27}
]
 para convertir o serializar el o los objetos a formato JSON bastará con utilizar JSON.stringify(objeto), y para convertir o deserializar un Json a un objeto bastará con utilizar la funcion JSON.parse(json). Ejemplo

 var personJSON=JSON.stringify(person);

 var newPerson=JSON.parse(personJSON);

*/

var edad=27;
var calificacion=9.8;
var menosUno=-1;
var cantidad="100";
var nuevaCantidad=Number(cantidad);

var textoEdad=String(edad);

var activo=true;
var esMayor=Boolean(10>9);

var fecha= new Date();
var dia= new Date().getDate();
var mes= fecha.getMonth();

var person={Name:"Eduardo", Edad:27};
var persons=[
    {Name:"Eduardo", Edad:27},
    {Name:"Lalo", Edad:27},
    {Name:"Edward", Edad:27}
];
var personJSON=JSON.stringify(person);
var newPerson=JSON.parse(personJSON);