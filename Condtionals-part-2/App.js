// 1] voter check

let ans = Number(prompt("whats your age"))

if(isNaN(ans)){  // NaN === NaN goves false so use isNaN()
    console.log('wrong input')
}else if(ans > 18){
    console.log('you can vote')
}else{
    console.log('you cant vote')
}

// 2] electricity bill

let unit = Number(prompt('Enter Unit'))
let amount = 0

if(unit > 400){
    amount += (unit-400)*13
    unit = 400
}

if(unit > 200 && unit <= 400){
    amount += (unit - 200)*8
    unit = 200
}

if(unit > 100 && unit <= 200){
    amount += (unit - 100)*8
    unit = 100
}

amount += unit *4
console.log('amount-',amount)

//3] Inr count

let amount = 502

console.log('amount-',amount)
if(amount >= 500){
    console.log(`500 ke notes: ${Math.floor(amount/500)}`)
    amount = amount%500 // it gives remaining amount
}
if(amount >= 200){
    console.log(`200 ke notes: ${Math.floor(amount/200)}`)
    amount = amount%200 // it gives remaining amount
}
if(amount >= 100){
    console.log(`100 ke notes: ${Math.floor(amount/100)}`)
    amount = amount%100 // it gives remaining amount
}
if(amount >= 50){
    console.log(`50 ke notes: ${Math.floor(amount/50)}`)
    amount = amount%50 // it gives remaining amount
}
if(amount >= 20){
    console.log(`20 ke notes: ${Math.floor(amount/20)}`)
    amount = amount%20 // it gives remaining amount
}
if(amount >= 10){
    console.log(`10 ke notes: ${Math.floor(amount/10)}`)
    amount = amount%10 // it gives remaining amount
}
if(amount >= 5){
    console.log(`5 ke coins: ${Math.floor(amount/5)}`)
    amount = amount%5 // it gives remaining amount
}
if(amount >= 3){
    console.log(`3 ke coins: ${Math.floor(amount/3)}`)
    amount = amount%3 // it gives remaining amount
}
if(amount >= 2){
    console.log(`2 ke coins: ${Math.floor(amount/2)}`)
    amount = amount%2 // it gives remaining amount
}
if(amount>=1) console.log(`1 ke coins: ${amount}`)

// optimized code

let amount = 502
const denominations = [500, 200, 100, 50, 20, 10, 5, 3, 2, 1]

for(let note of denominations){
    if(amount >= note){
    console.log(`${note} ke ${note < 10 ? 'coin' : 'note'} : ${Math.floor(amount/note)}`)
    amount = amount % note
    }
}


//4] switch

switch (true) {
case 19 > 6:
console.log("hello");
break
case 10 < 9:
console.log("hey");
break
default: console.log("invalid");

}
// o/p hello

let num = Number((0.1 + 0.2).toFixed(1)); // Converts to 0.3 fix precision
switch (num) {
  case 0.3: console.log("hello"); break;
  case 0.5: console.log("hey"); break;
  default: console.log("namaste");
}
