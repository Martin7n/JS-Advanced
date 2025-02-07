
// task l-01
function evenPos(listed){
    
    let result = []

    for (let i=0; i< listed.length; i++){
        if (i % 2 == 0){
        result.push(listed[i])}
                            
    }
    console.log(result.join(" "))

}

// evenPos(['20', '30', '40', '50', '60'])

function evenPol(inputArr){
    let resArr = inputArr.filter((a, i) => i % 2 === 0 )
    console.log(resArr.join(" "))
}
 

// task l-04

function negPos(numbAr){
    let resArray = [];


    for (const idx in numbAr) {
        const elem = numbAr[idx]
            if (elem < 0) {
                resArray.unshift(elem)
            } else{
                resArray.push(elem)
            }
        }
    console.log(resArray.join(`\n`))     
        } 





// task l-05     
function smallEsEl(numbAr){
        let resArray = numbAr.sort((a,b) => a - b)
        console.log(resArray.slice(0, 2).join(` `))     
} 

//task l-06

function biHaRF(numbArz){
    let newArrrrr = numbArz.sort((a,b) => a - b).slice(numbArz.length / 2, numbArz.length+1)
    return newArrrrr
}

// taks l-07


function piePiece2(flavors, target1, target2){
    let start = flavors.indexOf(target1);
    let end = flavors.indexOf(target2)+1;
    let resultArray = flavors.slice(start, end);
    return resultArray
}

//task l-08

function procOddPos(someList){
    let nArray = someList
    .filter((x, i) => i% 2 ===1)
    .map(x => x*2)
    .reverse()
    .join(" ")

    return nArray

}

//task l-09

function bigEl(arr){
    newArrr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        newArrr.push(Math.max(...arr[index]))
        
    }

    return (Math.max(...newArrr))
}

//taks l-10


function diagonalSum(matrix){

    const len = matrix.length;
    let col = 0;
    let sum = 0
    let sum2 = 0
    for (let row = 0; row < len; row++) {
        const element = matrix[row][col];
        col ++
        sum += element
    }

    col = 0
    for (let row = len-1; row >= 0; row--) {
        const elemend = matrix[row][col];
        col ++
        sum2 += elemend
        
    }
 
    console.log(sum, sum2)

}

//taks l-11

function doublesEq(newMat){

    let doubles = 0;
    for (let row = 0; row < newMat.length; row++) {
       for (let col = 0; col < newMat[row].length; col++) {
        if ( newMat[row][col] === newMat[row][col+1] ){doubles ++}
            
        }
            
    }

    for (let col = 0; col < newMat[0].length; col++) {
       for (let row = 0; row < newMat.length-1; row++) {
        if (newMat[row][col] === newMat[row+1][col]) {
           doubles ++
        }
        
       }
        
    }

    console.log(doubles)
}


// Exercise: Arrays and Nested Arrays

// task e-01

function deLimiter(arr, limiter ){
    console.log(arr.join().split(',').join(limiter))

}


// deLimiter(['One', 
//     'Two', 
//     'Three', 
//     'Four', 
//     'Five'], 
//     '-')

// deLimiter(['How about no?', 
//     'I',
//     'will', 
//     'not', 
//     'do', 
//     'it!'], 
//     '_')

// task e-02


function everyN(arr, num){
    return arr.filter((e,idx) => idx % num === 0);

}


function everyNn(arr, num){
    let res = [];
    for (let index = 0; index < arr.length; index) {
        res.push(arr[index])
        index += num 
    }
    return res;

}
// console.log(everyNn(['dsa',
//     'asd', 
//     'test', 
//     'tset'], 
//     2))

function addRem(coms){

    let arr = []
    let idx = 0
    coms.forEach(element => {
        idx ++
        if (element == "add"){
            arr.push(idx)
        }else{
            arr.pop()
        }
    });

    console.log(arr.length ? arr.join("\n"): 'Empty')

}

// addRem(['add', 'add', 'add', 'add'])
// addRem(['add', 'add', 'remove', 'add', 'add'])
// addRem(['remove', 'remove', 'remove'])

// task e-04

function rotateArr(arr, rts){

    while(rts--){
        arr.push(arr.shift());
    }

    // for (let index = 0; index < rts; index++) {
    //     let x = arr.pop()
    //     arr.unshift(x)
        
    // }

    console.log(arr.join(" "))


}

// rotateArr(['Banana', 
//     'Orange', 
//     'Coconut', 
//     'Apple'], 
//     15)

// rotateArr(['1', 
//     '2', 
//     '3', 
//     '4'], 
//     2)

// task e-05

function subsetExtract(arr){

    return arr.reduce( (prev, curr) =>{
        if (prev.slice(-1) <= curr){
            prev.push(curr)
        }
        return prev;
    }, []

    );

}

// console.log(subsetExtract([1, 3, 8, 4, 10, 12, 3, 2, 24]))




//taks e-06


function listOfNames(arr){

    arr.sort((a, b) => a.localeCompare(b)).forEach(a => console.log(`${arr.indexOf(a)+1}.${a}`))

}
// listOfNames(["John", "Bob", "Christina", "Ema"])

//taks e-07

function sortOfNum(arr){

 let asc_arr = arr.sort((a,b) => a-b)
 
 let result = []
    while (asc_arr.length){

        result.push(asc_arr.shift());
        result.push(asc_arr.pop());

    }
   return result
    
}
// console.log(sortOfNum([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]))

// taks e-07

function sortByCrit(arr){

    
    console.log(arr.sort((a, b) => {
        let res = a.length - b.length

        if (res === 0){
            res = a.localeCompare(b)
        }
        return res
    }).join("\n"))
}

// sortByCrit(['Isacc', 
//     'Theodor', 
//     'Jack', 
//     'Harrison', 
//     'George'])

// task e-08

function magicMatrix(marray){
    let result = true



    console.log(result)

    }




magicMatrix([[11, 32, 45],
    [21, 0, 1,],
    [21, 1, 1]])