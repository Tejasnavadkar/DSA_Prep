// ------- Array


// find 2nd largest number in array

let arr = [4,6,8,9,1,10,11]
let max = Math.max(arr[0],arr[1])
let secondMax = Math.min(arr[0],arr[1])

for(let i = 2; i< arr.length; i++){
    if(arr[i]>max){
        let temp = max
        max = arr[i]
        secondMax = temp
    }
}

console.log(secondMax)
// o/p 10

// reverse the array without extra space

let arr = [4,6,8]

for(let i = 0; i<(arr.length)/2; i++){
    let temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
}
console.log(arr)

// [ 8, 6, 4 ]

// 2 pointer approach

let i = 0
let j = arr.length - 1

while(i!==j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr)

// o/p [8,6,4]


//move 1 to right

let arr = [0,1,1,0,1,0,1]

let i = 0
let j = 0

while(i<arr.length){
    if(arr[i]==0){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
}

console.log(arr)

// [
//   0, 0, 0, 1,
//   1, 1, 1
// ]
