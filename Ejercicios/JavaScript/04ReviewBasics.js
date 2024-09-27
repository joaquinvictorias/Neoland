//! Ejercicios JavaScript Review Basics

//* Iteración #1: Mix for e includes

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];


let movies2 = [];
for (const movie of movies) {
    for (const m of movie.categories) {
        if (movies2.includes(m) === false) {
            movies2.push(m);
        }
    }
}

console.log(movies2);

//* Iteración #2: Mix Fors

/* const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

for (const user of users) {
    for (const sound in user.favoritesSounds) {
        console.log(sound);
    }
} */

//* Iteración #3: Mix Fors

/* const users2 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]; */

//* Iteración #4: Métodos findArrayIndex

const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    if (array.includes(text) === true) {
        return `${text} aparece en la posición ${array.indexOf(text)}`;
    } else {
        return `${text} no aparece`;
    }
}

console.log(findArrayIndex(animales, "Salamandra"));
console.log(findArrayIndex(animales, "Ajolote"));
console.log(findArrayIndex(animales, "Saltamontes"));

//* Iteración #5: Función rollDice

function rollDice(caras) {
    return Math.ceil(Math.random() * caras);
}

//* Iteración #6: Función swap

const futbolistas = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, index1, index2) {
    let copyArray = [...array];
    jugador1 = copyArray[index1];
    jugador2 = copyArray[index2];
    copyArray[index1] = jugador2;
    copyArray[index2] = jugador1;
    return copyArray;
}

console.log(swap(futbolistas, 0, 2));
