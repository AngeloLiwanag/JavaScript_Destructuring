// -------------- Destructuring -------------------
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// -------------- ES5 ------------------
// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];
// console.log(email);
// console.log(firstAnimal);

// -------------- ES6 -------------------
const { email, password } = person; // {} grabs from object
const [ firstAnimal, secondAnimal, thirdAnimal ] = animals; // [] grabs from array
console.log(email, password);
console.log(firstAnimal, secondAnimal, thirdAnimal);

// -------------- Name Conflicts -------------------
const { password: hashedPassword } = person; 
console.log(hashedPassword);

// -------------- Nested Destructuring -------------------
const { addresses: [whiteHouse, sherlock] } = person;
console.log(whiteHouse, sherlock);

const { addresses: [ , { city: london }] } = person;
console.log(london);
// => London

