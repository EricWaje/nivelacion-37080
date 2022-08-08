//VAR
//Varible global, el scope va a ser siempre global a menos que se declare dentro de una función. La variable va a quedar "viva para siempre" no importa si la declaramos dentro de un bucle o de un if/else.

//LET
//Tiene un scope local, va a vivir dentro de donde se declare, funciona en cualquier bloque de llaves

//CONST
//Es una VARIABLE constante, el puntero de memoria RAM donde está guardada la variable es constante, la variable no se va a mover de ese espacio en memoria, siempre va a ser la misma referencia. El valor que tenga dentro esa variable podría llegar a cambiar en algunas situaciones.

// const a = { x: 100 };
// const b = a;

// a.x = 200;

// console.log(b);

// --------------ARROW FUNCTIONS--------------

// function saludar() {
//   console.log('Bienvenidos')
// }

// saludar()

// const saludar = (param) => {
//   console.log(param)
// }

// saludar(10)

// --------------TEMPLATE LITERALS--------------

// const nombre = 'Eric';
// const apellido = 'Wajnrajch';
// const edad = 27;

// console.log(
//     'Mi nombre es' + ' ' + nombre + ' ' + apellido + 'y tengo' + ' ' + edad
// );

// console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad}`);

// --------------REST & SPREAD OPERATOR--------------

//const numeros = [1,2,3,4,5,6,7,8]
//Spread con array
//...
//...numeros --> 1,2,3,4,5,6,7,8
// const copia = [...numeros]

//console.log(copia)

// copia.push(9)
// copia.push(10)

// console.log(copia)

// console.log('numeros', numeros)

// const profe = {
//   nombre: 'Eric',
//   apellido: 'Wajnrajch'
// }

//Spread con objetos

// const otro = {...profe, edad: 30}

// otro.nombre = 'Facundo'

// console.log(otro)
// console.log(profe)

//REST
//...
// const numeros = (...params) =>{
//   console.log(params)
// }

// numeros(1,2,3,4,5,6)

// --------------OPERADOR TERNARIO--------------
// if(true){
//   console.log('Verdadero')
// } else{
//   console.log('Falso')
// }

// false ? 'Verdadero' : 'False'

//true && 'Verdadero'
//false && "Falso"

// --------------DESTRUCTURING--------------

//ARRAY
//const array = ['Zorro', 'Elefante', 'Tigre'];

//ES5
// var primero = array[0];

// var segundo = array[1];

// var tercero = array[2];

//ES6

//const [primero, segundo, tercero] = array

//console.log(tercero)

// //OBJETOS

// const animal = {
//   nombre: 'Elefante', patas: 4
// };
// //ES5
// const a = animal.nombre
// const b = animal.patas

// const {nombre: titulo, patas} = animal

// console.log(titulo)

// --------------METODOS DE ARRAY--------------

// const numeros = [1, 2, 3, 4, 5, 6];

// const nombres = ['eric', 'fernando', 'horacio'];

// const productos = [
//     {
//         title: 'Producto1',
//         price: 20,
//     },
//     {
//         title: 'Producto2',
//         price: 40,
//     },
//     {
//         title: 'Producto3',
//         price: 600,
//     },
// ];

// //map --> Devuelve un array con la misma cantidad de posiciones que el array original.

// const numerosMultiplicados = numeros.map((num) => num * 2);

// //console.log(numerosMultiplicados)

// //filter --> Devuelve un array con los elementos filtrados a partir de alguna condición.

// const numerosFiltrados = numeros.filter((num) => num > 2);

// //console.log(numerosFiltrados)

// //find --> Devuelve el objecto que cumpla con la condición.

// const producto = productos.find((prod) => prod.price > 20);

// //console.log(producto)

// //some --> Devuelve true/false si alguno de los elementos del array cumple con una condición

// const preciosMayores = productos.some((prod) => prod.price > 100);

// console.log(preciosMayores);
