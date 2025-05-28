// npm i prompt-sync to accept inputs from terminal


let n = 5

for(let i=1; i<=n; i++){
    // for(let j=5; j>=i; j--){
    //     process.stdout.write(" ")
    // }
    for(let j=1; j<=i; j++){
        process.stdout.write("* ") // stdout comes in same line
    }
    console.log()
}

// let n = 5

// for(let i=1; i<=n; i++){
//     let str = ""
//     // for(let j=5; j>=i; j--){
//     //     process.stdout.write(" ")
//     // }
//     for(let j=1; j<=i; j++){
//         str += "*" + " "
//     }
//     console.log(str)
// }

// o/p
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 



let n = 5

for(let i=1; i<=n; i++){
    let str = ""
    for(let j=1; j<=i; j++){
        str += j + " "
    }
    console.log(str)
}

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 


let n = 5

for(let i=1; i<=n; i++){
    let ascii = 65
    let line = ""
    for(let j=1; j<=i; j++){
        line += String.fromCharCode(ascii) + " "
        ascii++
    }
    console.log(line)
}

// A 
// A B 
// A B C 
// A B C D 
// A B C D E 


let n = 5

for(let i=n; i>=0; i--){
    let str = ""
    for(let j=1; j<=i; j++){
        str += "*" + " "
    }
    console.log(str)
}

// 2nd approach

let n = 5

for(let i=1; i<=n; i++){
    let str = ""
    for(let j=1; j<=n-i+1; j++){
        str += "*" + " "
    }
    console.log(str)
}

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 



let n = 5

for(let i=1; i<=n; i++){
    let str = ""
    let space = ""
    
    for(let j=1; j<=n-i; j++){
        space += "  " 
    }
     for(let j=1; j<=i; j++){
        str += "* "
    }
    console.log(space + str)
}

//           * 
//         * * 
//       * * * 
//     * * * * 
//   * * * * * 



let n = 5

for(let i=1; i<=n; i++){
    let str = ""
    
    for(let j=1; j<=n; j++){
        if(i===j || i + j === 6){
            str+="* "
        }else{
            str+="  "
        }
    }
    console.log(str)
}


// *       * 
//   *   *   
//     *     
//   *   *   
// *       * 


let n = 5


for(let i=1; i<=n; i++){
    let str = ""
    
    for(let j=1; j<=n*2-1; j++){ //-1 coz lost colum is not used
        if(i===j || i + j === 10){
            str+="* "
        }else{
            str+="  "
        }
    }
    console.log(str)
}

// *               *   
//   *           *     
//     *       *       
//       *   *         
//         *   