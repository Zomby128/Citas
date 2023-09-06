//Arreglos
'use strict'

const restaurants ={
    name: 'Clasico Italiano',
    location: 'Via Angelo Tavari 23, Firenze Italy',
    categories: ['Italian', 'Mexican', 'Vegetarian', 'Organic'],
    startedMenu: ['Garlic Bread', 'Foccacia', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
    order : function(starterIndex, mainIndex){
        return [this.startedMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

const arr = [30, 21, 32, 40];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// se obtienen los valores del array y se generan las variables

const [var1 = 1, var2 = 1, var3 = 1, var4 = 1, var5 = 1] = arr;
console.log(var1);

const [starter, main] = restaurant.order(3,1);
console.log(starter);
console.log(main);

//Destructuring en Arrays
const risoto = restaurant.mainMenu





// let [main, secondary] = restaurant.categories;

// const temp = main; //italian
// main = secondary; //mexican

// console.log(temp, secondary);

// [main,secondary] = [secondary,main]
// console.log(main,secondary);







// const vowels = ['a', 'e', 'i','o','u']

// vowels.map(vowel=>{
//     console.log(vowel);
// })


//vowel es como un for of y el index es un for in
// vowels.map((vowel, index)=>{
// console.log(vowel,index)
// })

// Cambiar las vocales a mayusculas
// const newVowels = vowels.map((vowel, index)=>{
//     return vowel.toUpperCase();
//     })
//     console.log(newVowels);

//1. Crear un array con 6 calificaciones:
//2. Entrega un array nuevo donde aparezca la palabra aprobado, reprobado > 7.0, < 7.0

//ORIGINAL
// const calificaciones = [7.3,6.9,4.2,8.5,9.3,7.0]
//     const newCalificaciones = calificaciones.map((calificaciones)=>{
//         if(calificaciones < 7 ){
//             return 'Reprobado';
//         }else if(calificaciones >= 7){
//             return 'Aprobado';
//         }
//     })
//     console.log(newCalificaciones);

//     const calificaciones = ['7.3', '6.9', '4.2', '8.5', '9.3', '7.0'];

// const newCalificaciones = calificaciones.map((calificacion) => {
//   const valorCalificacion = parseFloat(calificacion); // Convertir a número
//   if (valorCalificacion < 7) {
//     return `${valorCalificacion} - Reprobado`;
//   } else {
//     return `${valorCalificacion} - Aprobado`;
//   }
// });

// console.log(newCalificaciones);