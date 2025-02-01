
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