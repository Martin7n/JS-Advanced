
    // citiesInfo.forEach(element => { 

    //     let [name, product, price] = element.split(" | ")
    //     cities.push(
    //         {
    //             name,
    //             product,
    //             price: Number(price)
    //         }
    //     )



    
// task e-06

function catalogStore(arr){

    const result = arr.map(
        e => {
            const [stock, price] = e.split(" : ");
            const firstLetter = stock[0]
             
            return {firstLetter, stock, price: Number(price)};

            })
            // console.log(result)
         
} 

catalogStore(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
    )