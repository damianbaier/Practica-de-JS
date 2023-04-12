//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar//
// let datoparimpar = prompt("Ingresa un numero par o impar");
// let paroimpar = +datoparimpar;
// if (paroimpar % 2 === 0){ 
//     console.log("Es par");
// }else {
//         console.log("es impar");
// }

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.//
//  let num1 = parseFloat (prompt("Ingresa el primer número mayor o menor"));
//  let num2 = parseFloat (prompt("Ingresa el segundo número mayor o menor"));
//  if (num1 > num2) {
//      console.log(`${num1}  es mayor que  ${num2}`);
//  } else if (num2 > num1) {
//      console.log(`${num2}  es mayor que  ${num1}`);
//  } else {
//      console.log(`${num1} y ${num2} son iguales`);
//  }

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.//
//  let num1 = parseFloat(prompt("Ingresa el numero para saber si es multiplo de 5")); 
//  if(num1 % 5 === 0){
//      console.log("Es multiplo de 5");
//  }else{
//      console.log("No es multiplo de 5");
//  }

// //4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número. //
//  let numero = parseFloat(prompt("ingrese el numero apareceran del 0 al numero ingresado"));
//  for(let i = 0; numero >= i; i++){ 
//      console.log(`${i}`);
//  }

// //5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
//  let palabra = prompt("Ingrese una palabra");
//  let num = parseFloat(prompt("Ingrese un numero"));
//  for(let i = 0; num >= i; i++){
//      console.log(`${i} ${palabra}`);
//  }

// //6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
//   let transporte = []
//   console.log(transporte);

// //7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo
// let numeros = [21, 13, 47, 3, 98, 61, 03, 09, 44, 14, 19]
// for (let i = 0; i < numeros.length; i++) {
//  	if (i !==4){ 
//     console.log(numeros[i]);
//   } 
// }

// //8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// let num = [2, 4, 6, 7, 9, 10, 12]
// let parametro = parseFloat(prompt("Ingrese el numero a multiplicar"));
// for (let i = 0; i < num.length; i++){
//  let resultado = num[i] * parametro
//  console.log(resultado);
// }