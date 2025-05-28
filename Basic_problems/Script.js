// 1] create a for..of loop to log each character of the string "JavaScript"

let str = "JavaScript"

for(let character of str){
    console.log(character)
}

// for ..of loop used for strings
// o/p J a v a S c r i p t


// 2]  write a nested loop to to print 3x3 grid of numbers 
let hold = 1
for(let i=1; i <=3; i++){
    let str= ""
    for(let j=1; j<=3; j++){
        str += `${hold} `
        hold++
    }
    console.log(str)
}

// o/p 
// 1 2 3 
// 4 5 6 
// 7 8 9 

// 3] use a loop to reverse an array using 2 pointer
let arr = [1,2,3,4,5,6,7]

for(let i=0; i< Math.floor(arr.length/2); i++){
    let temp = arr[i]
    arr[i] = arr[arr.length - 1 -i]
    arr[arr.length - 1 -i] = temp
}

console.log(arr)
// o/p [ 7, 6, 5, 4, 3, 2, 1 ]


//4] find index
let arr1 = [1,2,3,4,5,6]

console.log(arr.indexOf(1)) //o/p 0
console.log(arr.findIndex((item)=>item == 1)) //o/p 0

// is item exist 
console.log(arr.includes(4)) //o/p true




//5] sort in ascending
let arr = [1,5,2,6,3,4]

// console.log(arr.sort((a,b)=>b-a))

// for(let i=0; i < arr.length ; i++){
//     for(let j=i; j<arr.length; j++){
//         if(arr[i] > arr[j]){
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)

// using bubble sort in bubble sort we compare two item and place bigger item to the extrem right

for(let i=0; i< arr.length - 1; i++){
    for(let j=0; j < arr.length - 1 ; j++){
    if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
    }
}
}
console.log(arr)

//6] write a function to check that if the str starts with goven character

function checker(str,char){
  return str.startsWith(char)
// return str[0] === char
}

console.log(checker('tejas','t'))

// str.replaceAll(" ",-)

