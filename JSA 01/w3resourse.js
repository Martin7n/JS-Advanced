
function first(lst){
    return lst[0]
}

// console.log(first([7, 9, 0, -2]));

function last(lst){
    return lst[lst.length - 1]
}


// console.log(last([7, 9, 0, -2]));

function arrJo(lst){
    return lst.join(', ')

}

myColor = ["Red", "Green", "White", "Black"];

// console.log(arrJo(myColor));

function dashNum(num){
    let text = num.toString()
    const result = [num[0]];
    for (let index = 1; index < text.length; index++) {
        if ( Number(text[index-1]) % 2 === 0 && Number(text[index] % 2 === 0)){
            result.push("-", text[index]);
        } else {
            result.push(text[index])
        }
    }
    return result.join("")

}

const number = "025468";
// console.log(dashNum(number))



function sortArr(arr1){
    return arr1.sort((a,b) => a-b).join()
}

// console.log(sortArr([-3,8,7,6,5,-4,3,2,1]))



function frequentItem(arr){

    let dicty = {}

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].toString();
        if ( !dicty.hasOwnProperty(element))
            {dicty[element] = 1}
            else{
                dicty[element]++
            }
    }

    const topEntry = Object.entries(dicty)
    .sort(([, a], [, b]) => b - a)  
    .shift(); 

    const sortArr = Object.entries(dicty).sort((a, b) => b[1] - a[1]
    )
    console.log(`Most frequent:  ${sortArr[0][0]} ==>> ${sortArr[0][1]} times `)

    return `Most frequent: ${topEntry[0]} (${topEntry[1]}) times`;

 
}

// console.log(frequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))

function swapCaseOfStr(text){

   let newText = ""

   for (let index = 0; index < text.length; index++) {
    const element = text[index];

    if (element === element.toUpperCase()){
        newText += element.toLowerCase()} else {
    newText += element.toUpperCase()
    }
   }
   console.log(newText)

}
// swapCaseOfStr('The Quick Brown Fox')

function nestPrint(arr){

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(`row ${i}`)

        for (let j = 0; j < element.length; j++) {
            const el = element[j];
            console.log(el)
        }
    }
    
    //forin variant

    for (const idx in arr) {
        console.log(`row ${idx}`)
        for (const key in arr[idx]) {
            console.log(arr[idx][key])
             
        }         
}
}

// nestPrint([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])


function sumSquares(nums){
    let result = 0;
    nums.forEach(element => {
        result += Math.pow(element, 2)
    });
    return result

}

// console.log(sumSquares([0, 1, 2, 3, 4]));

function sumProdArray(arr){
    let [s, p] = [0, 1];
    arr.forEach((el) =>{
        s += el;
        p *= el
    })
    return `Sum: ${s} Product: ${p}`
}

// console.log(sumProdArray([1, 2, 3, 4, 5, 6])) 

function sumOfArraysbyIndex(ar1, ar2){

    let sum = []

    while (ar1.length >0 || ar2.length> 0){

        let elSum = (ar1.length >0 ? ar1.shift() : 0) +  (ar2.length >0 ?  ar2.shift() :0)
        sum.push(elSum)
       
    }
    return sum

}


// const array1 = [1,0,2,3,4, 13, 10, 4000];
// const array2 = [3,5,6,7,8,13];
// console.log(sumOfArraysbyIndex(array1, array2)) 

function unzipArr(arr){

 let newArr =  arr.reduce(
    (res, val) => (res.forEach((v, i) => res[i].push(v)), acc),

    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );

  return newArr

    
}

// console.log(unzipArr([['a', 1, true], ['b', 2, false]]))