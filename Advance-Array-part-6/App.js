// 2 pointers algorithm

// 1] left rotation by 1 element
let arr = [1,2,3,4,5]

let firstItem = arr[0]
for(let i = 0; i< arr.length - 1; i++){
    arr[i] = arr[i+1]
}
arr[arr.length-1] = firstItem
console.log(arr)

 //o/p: [2,3,4,5,1]


//2] rigth rotation by 1 element
 let arr = [1,2,3,4,5] 
let lastElement = arr[arr.length - 1]

for(let i = 0; i<arr.length - 1;i++){
    arr[arr.length - i - 1] = arr[arr.length - i - 2]
}
arr[0] = lastElement
console.log(arr)

//o/p [5,1,2,3,4]

// 2nd approach 

let arr = [1,2,3,4,5] //o/p [5,1,2,3,4]

let i = arr.length - 1
let last = arr[arr.length-1]
while(i>0){
    arr[i] = arr[i-1]
    i--
}
arr[0] = last
console.log(arr)

//3] // left and right rotation by k element

// left

let arr = [1,2,3,4,5] //o/p [2,3,4,5,1] // by 2 [3,4,5,1,2]
let k = 2
for(let j=1;j<=k;j++){
    let first = arr[0]
for(let i = 0; i<arr.length - 1; i++){
    arr[i] = arr[i+1]
}
arr[arr.length-1] = first

}
console.log(arr)

// optimise code without extra loop add extra space using this algo (k+i)%arr.length
let arr = [1,2,3,4,5] //o/p [2,3,4,5,1] // by 2 [3,4,5,1,2]
let temp = new Array(arr.length)
let k = 2
for(let i=0; i<arr.length; i++){
   temp[i] = arr[(k+i)%arr.length]   
}
console.log(temp)

//left k rotaion 
// optimise code with block swap reverse algorithem (without nested loop and space)
let arr = [1,2,3,4,5] //o/p [2,3,4,5,1] // by 2 [3,4,5,1,2]
let k = 2
Reverse(0,k-1)
Reverse(k,arr.length-1)
Reverse(0,arr.length-1)

function Reverse(i,j){
    while(i < j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}

console.log(arr)

//rigth k rotation // optimise code with block swap reverse algorithem (without nested loop and space)
let arr = [1,2,3,4,5] //o/p  by2 [4,5,1,2,3]
let k = 2
Reverse(arr.length-k,arr.length-1)
Reverse(0,k)
Reverse(0,arr.length-1)

function Reverse(i,j){
    while(i < j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}

console.log(arr)

// [ 3, 4, 5, 1, 2 ] by 2 element



// right
let arr = [1,2,3,4,5] //o/p [5,1,2,3,4] by2 [4,5,1,2,3]
let k = 2
k = k % arr.length // coz if length == k then dont rotate array 
for(let j=1;j<=k;j++){
    let p = arr.length - 1
let last = arr[arr.length - 1]
for(let i = 0; i<arr.length-1;i++){
    arr[p - i] = arr[p-i-1]
}
arr[0] = last

}
console.log(arr)