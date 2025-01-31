// Lab
// task01
function echo(a){

    b = a.length;
    console.log(`${b}\n${a}`);
}
 
// echo('Hello, JavaScript!')


// task02

function stringL(ls1, ls2, ls3){

    let total = 0
    let stringlist = [ls1, ls2, ls3]


    for (let x = 0; x<3; x++){
        total += stringlist[x].length
        
    }
    console.log(total)
    console.log(Math.floor(total/3))
}


// stringL('pasta', '5', '22.3');



// task03

function largest(ls1, ls2, ls3){

    let maxNum = Number.MIN_SAFE_INTEGER - 1
    let stringlist = [ls1, ls2, ls3]


    for (let x = 0; x<3; x++){
        let cur = stringlist[x]
        if (cur >= maxNum){
            maxNum = cur
        }
        
    }
    console.log(`The largest number is ${maxNum}.`)
}

// largest(-3, -5, -22.5) 


// task04
function circ(a){

    rad = 0
    type = typeof a
  
    if (type == "number"){
        rad =  Math.pow(a, 2) * Math.PI
        console.log(rad.toFixed(2))

    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof a}.`)
    }
    
}

// circ(5)


// task05

function miniCalc(num1, num2, op){
    let listed = ['+', '-', '*', '/', '%', '**']  
    let res

    switch (op){
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2
            break
        case '*':
            res = num1 * num2
            break;
        case '/':
            res = num1 / num2
            break;
        case  '%':
            res = num1 % num2
            break;
        case '**': 
            res = num1 ** num2
            break;  
    }
    
    console.log(res)

    }
 
    // miniCalc(5, 6, '+')

    //task06

    function sums(n1, n2){
        let one = Number(n1)
        let two = Number(n2)
        let res = 0

        for (let x = one; x <= two; x++)
        {
            res += x
        }
        return res

    }

    // console.log(sums(-8, 20))

//task07 && task08...switch cases

//task09
function sqofst(num){
     
    for (x = 1; x <= num; x++){
        console.log(" *".repeat(num))
    }
}

// sqofst(10)

//task10

function agrEl(elements) {
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, '', (a, b) => a + b);
    function aggregate(arr, initVal, func) {
    let val = initVal;
    for (let i = 0; i < arr.length; i++)
    val = func(val, arr[i]);
    console.log(val);
    }
    }
    
    agrEl([3, 5, 8])
// XRX

//task e01

function fru(fr, w, pr){
    console.log(`I need ${(w/1000*pr).toFixed(2)} to buy ${w/1000} kilograms ${fr}.`)
}

// fru('orange', 2500, 1.80)

//task e02
function comdiv(...args){
    
    for (let devisor = Math.min(...args); devisor > 0; devisor--) {
        if (args[0] % devisor == 0 && args[1] % devisor == 0) {
            console.log(devisor);
            break;
        }
    }
}

comdiv(2, 1100)

//task e03

function sameOn(someString){
    let strr = someString.toString();
    let total = 0;
    let flag = true;
    for (let x = 0; x < strr.length; x++ )
    {
        flag = flag && (strr[0] === strr[x])
        total += Number(strr[x]);
    }

    console.log(flag)
    console.log(total)

}
// sameOn(2222222)

//task e04

function prevDay(year, month, day){

    
    let date = new Date(`${year}/${month}/${day}`);
    date.setDate(date.getDate() - 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

// prevDay(2016, 9, 30)

//task e05

function tiToW(steps_distance, stepsInMeters, speed){


}

tiToW(2564, 0.70, 5.5)