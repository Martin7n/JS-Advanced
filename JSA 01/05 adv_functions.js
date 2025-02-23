

// task e-01



function solve01(arr, type){

    if (type==='asc'){
        return arr.sort((a, b) => a-b);
    }else {
        return arr.sort((a, b) => b-a);
    };

}

const solve001 = (arr, order) => arr.sort((a, b) => order === 'asc' ? a - b : b - a)
// 


// task e-01

function solve02(...arr){
    const argTypesObj = {}

    arr.forEach(
        element => {
            const argType = typeof element;
            console.log(`${argType}: ${element} `);

            if (!argTypesObj.hasOwnProperty(argType)){
                argTypesObj[argType] = 0
            }
                argTypesObj[argType]++;
        }
    )

    console.log(
        Object.entries(argTypesObj)
        .sort((a, b) => b[1] - a[1])
        .map( e => e.join(' = '))
        .join("\n")
    );
}

// solve02('cat', 42, "rat", function () { console.log('Hello world!'); })  

// task e-05
function add(acc) {
    function sum(a) {
        acc += a;
        return sum;
    }

    sum.toString = function () {
        return acc.toString();
    }

    return sum;
}

console.log(add(1)(6)(-3)(10)(40).toString());