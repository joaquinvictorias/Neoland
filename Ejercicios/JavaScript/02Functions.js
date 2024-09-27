//! Ejercicios JavaScript Functions

//* Iteración #1: Buscar el máximo

function findLargestNum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else if (numberTwo > numberOne) {
        return numberTwo;
    } else {
        return `${numberOne} y ${numberTwo} son iguales.`;
    }
}

console.log(findLargestNum(10 , 9));
console.log(findLargestNum(15 , 20));
console.log(findLargestNum(12 , 12));

//* Iteración #2: Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let longestWord = "";
    for (const p of param) {
        if (p.length > longestWord.length) {
            longestWord = p;
        }
    }
    return longestWord;
}

console.log(findLongestWord(avengers));

//* Iteración #3: Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let sum = 0;
    for (const p of param) {
        sum += p;
    }
    return sum;
}

console.log(sumAll(numbers));

//* Iteración #4: Calcular el promedio

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    sum = 0;
    for (const p of param) {
        sum += p;
    }
    return (sum / param.length).toFixed(2);
}

console.log(average(numbers2));

//* Iteración #5: Calcular promedio de strings

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    sum = 0;
    for (let p of param) {
        if (typeof p === "string") {
            p = p.length;
        }
        sum += p; 
    }
    return sum;
}

console.log(averageWord(mixedElements));

//* Iteración #6: Valores únicos

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(param) {
    let sinDuplicados = [];
    for (const p of param) {
        if (sinDuplicados.includes(p) === false) {
            sinDuplicados.push(p);
        } else {
            continue;
        }
    }
    return sinDuplicados;
}

console.log(removeDuplicates(duplicates));

//* Iteración #7: Buscador de nombres

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(param, name) {
    if (param.includes(name) === true) {
        return `Existe: ${param.includes(name)}\nPosición: ${param.indexOf(name)}`;
    } else {
        return `Existe: ${param.includes(name)}`;
    }
}

console.log(finderName(nameFinder, "Marc"));

//* Iteration #8: Contador de repeticiones

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(param) {
    for (const p of param) {
        console.log(`${p} se repite: ${param.filter(word => word === p).length} veces`);
    }
}

repeatCounter(counterWords);