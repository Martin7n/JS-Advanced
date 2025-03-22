function attachEvents() {

    const locationsURL = "http://localhost:3030/jsonstore/forecaster/locations/"
    const forecastUrl = "http://localhost:3030/jsonstore/forecaster/today/"
    const forecastFutureUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    const locationElement = document.getElementById("location")
    const submitBtn = document.getElementById("submit")

    submitBtn.addEventListener("click", () => {
        cityFind(locationElement.value)
        // console.log(locationElement.value)
    })



    function locationMatch(response){
        if (!response.ok) throw new Error("Error");
        return response.json()
    }

    function forecastToday(jsonRespData){
        // const elToday = document.querySelector('#forecast .label')
        // let elToday = document.querySelector('div .forecast')
        let elToday = document.getElementById("forecast")
        elToday.style.display = 'block'; 
        console.log(jsonRespData)

        // if (elToday) {
        //     elToday.remove()
        // }
        let one = document.getElementById("content")
        const newEk = document.createElement("p")
        newEk.textContent = "aaa"
        elToday.append(newEk)

    }

    function forecastFuture(){
        console.log("2nd")
    }

    async function cityFind(city){
        let locationCode;
        try {
            // console.log(locationsURL+city)
            const locationSearch = await fetch(locationsURL)
            .then(locationMatch)
            .then(location  =>{
                 locationCode = location.find(x => x.name === city).code;});

                console.log(forecastUrl + locationCode)
                 await fetch(forecastUrl + locationCode)
                 .then(locationMatch)
                 .then(forecastToday)

                //  await fetch(forecastFutureUrl + locationCode)
                //  .then(locationMatch)
                //  .then(forecastFuture)
                

        } catch  (e) {

            console.log(`error with something ${e}`)
        }
        console.log(`Location code @ ${locationCode}`)
        return locationCode
 
    } 


   

    console.log("TODO...");
}

attachEvents();