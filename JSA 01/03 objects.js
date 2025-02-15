


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

// taks l-04

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


// console.log(carMMake({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }))

// task l-05


// function heroInventory(heroList){

//     // console.log(heroList)
//     let result = []

//     for (const element of heroList) {
//         let spl = element.split(" / ") 
//         let it = spl[2]
//         let items = it.split(", ")
//         result.push({
//             name: spl[0],
//             level: Number(spl[1]),
//             items,
//         });

//     }

//     console.log(JSON.stringify(result))

// }


function heroInventory(heroList){

    // console.log(heroList)
    let result = []

    for (const element of heroList) {

  
        let [name, level, items] = element.split(" / ")

        if (name != ""){
        level = Number(level)
        items = items ? items.split(', ') : [];

        result.push({
            name,
            level,
            items
        });}

    }


    console.log(JSON.stringify(result))
}


// heroInventory(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara', ""])

// heroInventory(['Jake / 1000 / Gauss, HolidayGrenade'])


//task e-05

function lowestCityPrice(citiesInfo){


    const towns = citiesInfo
    .map(e=>{
        const[town, product, price] = e.split(' | ');
        return {town,product, price: Number(price)};
    }).reduce((p,c)=>{
        if(!p.hasOwnProperty(c.product)){
            p[c.product] = c;
        } else {
            if(c.price < p[c.product].price){
                p[c.product] = c;
            }
        }
        return p;
    }, {})

    console.log(Object.values(towns).map(val=>`${val.product} -> ${val.price} (${val.town})`).join('\n'));
}

// lowestCityPrice(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'])

  
// task e-06

function catStoreROFLsolve(arr){

    const products = arr.sort((a, b) => a.localeCompare(b))
    

    let result = {}
    products.forEach(element => {
        let key = element[0];
        let value = element;
        if (!result.hasOwnProperty(key)){
            result[key] = [value]
        } else {
            result[key].push(value)
        }        
    });
    
    for (const char in result) {
        let final = result[char]
        console.log(char);
        final.forEach(
            (line) =>
            {
              let [k, v] =  line.split(" : ");
              console.log(` ${k}: ${v}`)
            }

        )

    }
 
}


function catStoreSFancy(arr){

    const dicRes = arr
        .sort((a, b) => a.localeCompare(b))
        .reduce(
            (obj, line) =>
            {
                const [prod, value] = line.split(" : ");
                let val = `  ${prod}: ${value}\n`
                const [key, valuelist] =  [prod[0], val]
                if (!obj.hasOwnProperty(key))
                {
                        obj[key] = val
                } else {
                    obj[key] += val
                }
                return obj
            }, {}

        )

    for (const key in dicRes) {
        console.log(key);
        console.log(dicRes[key].trimEnd());             
    }    

}


function catStoreAlmostFancy(arr){

    const products = arr
        .reduce( (list, line) =>
        {
            const [product, price] = line.split(" : ")
            list.push({product, price: Number(price)});
            return list;
        }, []
        )
        .sort((a, b) => a.product.localeCompare(b.product))

        // than the same string manipulation for with iteration for the output

    console.log(`Raw list of products:`);
    console.log(products);
    console.log(`\#AA0000 end of list \x1B`);
 }



const inp = ['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'];


// catStoreROFLsolve(inp);
// catStoreSFancy(inp);
// catStoreAlmostFancy(inp);

