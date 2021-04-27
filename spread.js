const myObject = {
    name: 'Brian',
    age: 40,
};

const otherObject = {
    hobbies: ['computers', 'movies', 'music'],
    color: 'blue',
};

/*
{
    name: 'Brian',
    age: 40,
    hobbies: ['computers', 'movies', 'music'],
    color: 'blue',
}
*/


const combined = {...myObject, ...otherObject};

const {name, hobbies} = combined;
console.log('combined: ', combined);
console.log('myObject: ', myObject);
console.log('otherObject: ', otherObject);

console.log('hobbies: ', hobbies);

const array1 = [1, 3, 4];
const array2 = [8, 9, 10];

const combArray = [...array1, ...array2];
let alternate = [];
for (let i = 0; i < array1.length; i++)
{
    alternate = [...alternate, array1[i]];
}

console.log('combArray: ', combArray);
console.log('alternate: ', alternate);
