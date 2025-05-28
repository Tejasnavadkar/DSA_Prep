
console.log("1" + 1) //o/p 11
console.log("1" - 1) //o/p 0 coz of type coersion

// prompt() to accept inputs
let age = prompt("whats your age")
age = Number(age)

// swapping with extra variable

let a = 10
let b = 20

let c = a
b = a
a = c

// swapping without extra variable 

let p = 10
let q = 20

p = p + q; //30
q = p - q; // 10
p = p - q; // 20

// swapping by destructering

[p, q] = [q, p]; // q goes to p and p goes to q this called Destructuring assignment is a feature introduced in ES6

