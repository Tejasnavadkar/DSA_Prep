// Q] Print each character in new line in reverse each character

let str = 'hello'

for(let i=0;i<str.length;i++){
    console.log(str[str.length -i -1])
}

// o/p 
// o  
// l 
// l 
// e 
// h

// reverse it 
let str = 'hello'
let reverse = ''
for(let i=0;i<str.length;i++){
    reverse += str[str.length -i -1]
}
console.log(reverse)
// o/p olleh 


// check palindrom 
let str = 'hello'
let reverse = ''
for(let i=0;i<str.length;i++){
    reverse += str[str.length -i -1]
}

if(reverse === str) console.log('palindrom')
console.log('not a palindrome')


// palindrome without extra Space optimize

let str = 'loom'

let i = 0
let j = str.length-1
let isPalindrome = true
while(i<j){
    if(str[i] !== str[j]){
        isPalindrome = false
        break
    }
        i++
        j--
}
console.log(isPalindrome)



// toggle case small-capital vice versa
let str = 'hello'

let toggle = ''

for(let i=0;i<str.length;i++){
    let ch = str.charCodeAt(i) // charCodeAt() covert char into ascii value
    if(ch >= 65 && ch <= 90){ // then capital
       toggle += String.fromCharCode(ch + 32) // + 32 coz small start with 97
    }else if(ch >= 97 && ch<=122){
         toggle += String.fromCharCode(ch - 32)
    }
}

console.log(toggle)

// o/p HELLO


// find the occurences of characters

// with array ascii values method
let str = 'apple'

let arr = new Array(122).fill(0)

for(let i = 0;i<str.length;i++){
    let asciiChar = str.charCodeAt(i)
    arr[asciiChar]++
}

for(let j=0;j<arr.length;j++){
    if(arr[j] > 0) {
        console.log(`${String.fromCharCode(j)}-${arr[j]}`)
    }
}

// a-1
// e-1
// l-1
// p-2
