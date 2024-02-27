export {};

// EXAMPLE 1 - Defining and using a Key-Value pair in TypeScript

const employee: { [key: string]: string | number } = {};

employee.name = 'Bobby Hadz';
employee.salary = 100;

// 👇️ { name: 'Bobby Hadz', salary: 100 }
console.log(employee);

// ---------------------------------------------------

// // EXAMPLE 2 - Using a Map to define a Key-value pair in TypeScript

// const map1 = new Map();

// map1.set('name', 'Bobby Hadz');
// map1.set('age', 30);
// map1.set('country', 'Germany');

// // 👇️ { 'name' => 'Bobby Hadz', 'age' => 30, 'country' => 'Germany' }
// console.log(map1);

// // 👇️ Bobby Hadz
// console.log(map1.get('name'));

// ---------------------------------------------------

// // EXAMPLE 3 - Retrieving values from the Map

// const map1 = new Map<string, string | number>([
//   ['name', 'Bobby hadz'],
//   ['age', 30],
//   ['country', 'Germany'],
// ]);

// // 👇️ const country: string | number | undefined
// const country = map1.get('country');

// if (typeof country === 'string') {
//   // 👇️ GERMANY
//   console.log(country.toUpperCase());
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Adding key-value pairs to the Map

// const map1 = new Map<string, string | number>([
//   ['name', 'Bobby Hadz'],
//   ['age', 30],
// ]);

// map1.set('country', 'Germany');

// console.log(map1.get('country')); // 👉️ "Germany"

// console.log(map1.delete('country')); // 👉️ true

// console.log(map1.has('country')); // 👉️ false

// ---------------------------------------------------

// // EXAMPLE 5 - Iterating over the Map

// const map1 = new Map<string, string | number>([
//   ['name', 'Bobby Hadz'],
//   ['age', 30],
// ]);

// map1.forEach((value, key) => {
//   console.log(value, key); // 👉️ Bobby Hadz name, 30 age
// });

// for (const [key, value] of map1) {
//   console.log(key, value); // 👉️ name Bobby Hadz, age 30
// }

// ---------------------------------------------------

// // EXAMPLE 6 - Converting the Map's keys or values to an array

// const map1 = new Map<string, string | number>([
//   ['name', 'Bobby Hadz'],
//   ['age', 30],
// ]);

// const values = Array.from(map1.values());
// console.log(values); // 👉️ ['Bobby Hadz', 30]

// const keys = Array.from(map1.keys());
// console.log(keys); // 👉️ ['name', 'age']

// ---------------------------------------------------

// // EXAMPLE 7 - Getting the length of the Map

// const map1 = new Map<string, string | number>([
//   ['name', 'Bobby Hadz'],
//   ['age', 30],
// ]);

// console.log(map1.size); // 👉️ 2

// map1.set('country', 'Germany');

// console.log(map1.size); // 👉️ 3

// ---------------------------------------------------

// // EXAMPLE 8 - Deleting all key-value pairs from the Map

// const map1 = new Map<string, string | number>([
//   ['name', 'Bobby Hadz'],
//   ['age', 30],
// ]);

// map1.clear();

// console.log(map1.size); // 👉️ 0
