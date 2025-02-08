


// //task e-01

function calorieObject(arr){

    let calories = {}

    for (let index = 0; index < arr.length; index+=2) {
        const element = arr[index];
        const calorie = arr[index+1]
        calories[element] = Number(calorie)
       
    }
    console.log(calories)
}


// calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

// //task e-02

function workObj(obj){


    if (obj.dizziness === false){ return obj} else {

        obj.levelOfHydrated += ( obj.experience * 0.1 * obj.weight)
        obj.dizziness = false
        return obj

    }
  
}

// console.log(workObj( { weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false }))


function carMake(obj){


    let engine = ''
    if (obj.power <= 90) {
        engine = { power: 90, volume: 1800 }
    } else if (obj.power <= 120){
        engine = { power: 120, volume: 2400 }
    } else {
        engine = { power: 200, volume: 3500 }
    };

    let carriage = {}
    if (obj.carriage == "hatchback"){
        carriage = { type: 'hatchback', color: obj.color }
    } else {
        carriage = { type: 'coupe', color: obj.color }
    }

    let wheels = obj.wheelsize % 2 !=0  ? obj.wheelsize: obj.wheelsize - 1
   


    let carMade = {
        model: obj.model,
        engine: engine,
        carriage: carriage,
        wheels: [wheels, wheels, wheels, wheels]
    }

    return carMade

}

// console.log(carMake({
//     model: 'Ferrari',
//     power: 200,
//     color: 'red',
//     carriage: 'coupe',
//     wheelsize: 21
// }))


function carMMake(obj){
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const coupes = {
        hatchback: { type: 'hatchback', color: obj.color },
        coupe: { type: 'coupe', color: obj.color }
    };

    const car = {
        model: obj.model,
        engine: engines.filter(e => e.power >= obj.power)[0],
        carriage: coupes[obj.carriage],
        wheels: Array(4).fill(obj.wheelsize % 2 !=0  ? obj.wheelsize: obj.wheelsize - 1)
    }

    return car


}


console.log(carMMake({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))
