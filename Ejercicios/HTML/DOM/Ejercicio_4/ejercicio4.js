//* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

console.log(document.querySelector('.showme'));

//* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

console.log(document.querySelector('h1#pillado'));

//* 1.3 Usa querySelector para mostrar por consola todos los p

console.log(document.querySelector('p'));

//* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

console.log(document.querySelector('.pokemon'));

//* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

document.querySelectorAll('[data-function="testMe"]').forEach((e) => console.log(e));

//* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

console.log(document.querySelectorAll('[data-function="testMe"]')[2]);