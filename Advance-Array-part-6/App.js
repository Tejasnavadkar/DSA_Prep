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

//Q-4 // remove the duplicates from array (brute force) n^2

let arr = [1,2,3,4,4,5,5]

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(i===j) continue
        if(arr[i] === arr[j]){
            arr.splice(i,1)
        }
    }
}
console.log(arr)

// o/p [ 1, 2, 3, 4, 5 ]

// remove duplicates from sorted array [leetcode]

  var removeDuplicates = function(nums) {
     let i = 0
     let k = 1
     for(let j =1;j<=nums.length - 1;j++){
     if(nums[i] !== nums[i+1]){
         nums[k] = nums[i+1]
         k++
     }
     i++
 }
    return k
};
removeDuplicates([1,2,3,4,4,5,5,5,6])

// o/p  6 original numbers
// [
//   1, 2, 3, 4, 5,
//   6, 5, 5, 6
// ]


//Q-5] Merge sorted array

let arr1 = [2,5,6] //i
let arr2 = [1,3,4,8]//j
let temp = new Array(arr1.length + arr2.length) // k
// here we use 3 pointers
let i = 0
let j = 0
let k = 0
while(i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
        temp[k] = arr1[i]
        k++
        i++
    }else{
        temp[k] = arr2[j]
        k++
        j++
    }
}

while(i<arr1.length){
    temp[k] = arr1[i]
    k++
    i++
}

while(j<arr2.length){
    temp[k] = arr2[j]
    k++
    j++
}

console.log(temp)

// o/p 
// [
//   1, 2, 3, 4,
//   5, 6, 8
// ]