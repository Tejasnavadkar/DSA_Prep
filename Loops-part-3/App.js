// //---------------- loops ----------------------------

// // for loop

// for(;;){  // this works but it goes infinite
//     console.log("hello")
// }

// for(let i =1;i<10;){  // this also works but it goes infinite
//     console.log("hello")
// }
// for(let i =1;;){  // and this also works but it goes infinite
//     console.log("hello")
// }

// // 1] factors of n number

// let num = prompt("Enter number")

// if(num === null || isNaN(num) || num < 0){ 
//     console.log('Invalid input')
// }else{
//     for(let i = 1; i<Math.floor(num/2); i++){

//     }
// }
// //here (num/2) we loop it half of the times coz number which greater than its half is not fully diveds number

// // 2] prime numbers

// let num2 = prompt("Enter number")

// if(num2 === null || isNaN(num2) || num2 < 0){ 
//     console.log('Invalid input')
// }else{
//     // simple method
// //    let isPrime = true
// //     for(let i = 2; i<Math.floor(num2/2); i++){
// //         if(num2%i === 0){
// //             isPrime = false
// //             break
// //         }
// //     }
// //     console.log(isPrime)

// // optimise method
//   console.log(isPrime(num2))
// }

// function isPrime(n){
//     if(n <= 1) return false
//     if(n==2) return false  // 2 is only even number which is prime number baki sare even number is not prime number
//     if(n%2==0) return false // after 2 baki sare even number is not prime so here we return false
//     for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){ // agar koi number 2 se lekar uske sqrRoot tak divide nahi hua to sqrRoot ke baad bhi divide nahi hoga
//         if(n%i==0) return false
//     }
//     return true
// }


// // While loop

// // sum of digits

// let num3 = 123 // 6
// let sum = 0

// while(num3 > 0){
//     let lastDigit = num3 % 10
//     sum +=lastDigit
//     num3 = Math.floor(num3/10)
// }
// console.log(sum)


// // strong number

// let num4 = 145
// let originalNum = num4
// // let factorial = 1
// let sumOfFactorials = 0
// while(num4 > 0){
//      factorial = 1
//     let lastDigit = num4%10
//     for(let i = 1; i<=lastDigit; i++){
//         factorial = factorial * i
//     }
//     sumOfFactorials = sumOfFactorials + factorial
//     num4 = Math.floor(num4/10)
// }
// console.log('sumOfFactorila--',sumOfFactorials)
// console.log('originalNum--',originalNum)
// if(originalNum === sumOfFactorials){
//     console.log('this is a strong number')
// }else{
//     console.log('this is not a strong number')
// }



// guess the number 

let random = Math.floor(Math.random() * 100 + 1)
let guess = -1

while(guess !== random){
    // console.log('hii')
    guess = Number(prompt("guess the number.."))
    console.log(guess)
    if(guess === 0) break
    if(isNaN(guess) || guess < 0 || guess > 100){
        console.log('invalid input try again')
    }
    if(guess > random){
        console.log("number is too high")
    }
    if(guess < random){
        console.log("number is too low")
    }
    if(guess === random){
        console.log('congrates number is:',guess)
    }
}

