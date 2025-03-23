function attachEvents() {

    const locationsURL = "http://localhost:3030/jsonstore/forecaster/locations/"
    const forecastUrl = "http://localhost:3030/jsonstore/forecaster/today/"
    const forecastFutureUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    const locationElement = document.getElementById("location")
    const submitBtn = document.getElementById("submit")

    const conditionSymbols = {
        Sunny: '\u2600', // ☀
        'Partly sunny': '\u26C5', // ⛅
        Overcast: '\u2601', // ☁
        Rain: '\u2614'// ☂
    }


    submitBtn.addEventListener("click", () => {
        cityFind(locationElement.value)
        // console.log(locationElement.value)
    })


    function forecastPreparator(jsonRespData){

        const cityName = jsonRespData.name
        const forecastSymbol = conditionSymbols[jsonRespData.forecast.condition];
        const forecastHighTemp = jsonRespData.forecast.high;
        const forecastLowTemp = jsonRespData.forecast.low;
        const forecastCondition = jsonRespData.forecast.condition;

        return  {cityName, forecastSymbol, forecastHighTemp, forecastLowTemp, forecastCondition}


    }



    function locationMatch(response){
        if (!response.ok) throw new Error("Error");
        return response.json()
    }

    function forecastToday(jsonRespData){

        let elToday = document.getElementById("forecast")
        const todayEl = document.getElementById("current")
         Array.from(todayEl.children).forEach(function(child) {
            if (!child.classList.contains('label')) {
                todayEl.removeChild(child);
            }
        });

        const upcoming = document.getElementById("upcoming")
        Array.from(upcoming.children).forEach(function(child) {
            if (!child.classList.contains('label')) {
                upcoming.removeChild(child);
            }
        });

        elToday.style.display = 'block'; 
        console.log(jsonRespData) 
        const forecastData = forecastPreparator(jsonRespData);
        
        const conditionSpan = document.createElement('span');
        conditionSpan.className = 'condition';

        const condSymbolSpan = document.createElement('span')
        condSymbolSpan.className = 'condition symbol'
        condSymbolSpan.textContent = forecastData.forecastSymbol;
        conditionSpan.append(condSymbolSpan);


        const forecastSpans = document.createElement('span');
        forecastSpans.className = 'forecast-data';

        const forecastCitySpans = document.createElement('span');
        forecastCitySpans.className = 'forecast-data';
        forecastCitySpans.textContent = forecastData.cityName;
        conditionSpan.append(forecastCitySpans);

        const forecastTempSpans = document.createElement('span');
        forecastTempSpans.className = 'forecast-data';
        forecastTempSpans.textContent = `${forecastData.forecastHighTemp} / ${forecastData.forecastLowTemp}`;
        conditionSpan.append(forecastTempSpans);

        const forecastCondSpans = document.createElement('span');
        forecastCondSpans.className = 'forecast-data';
        forecastCondSpans.textContent = forecastData.forecastCondition;
        conditionSpan.append(forecastCondSpans);
        
        todayEl.append(conditionSpan);

    }

    function forecastFuture(jsonRespData){

        console.log(jsonRespData.forecast[0].condition, "FFF")
        const baseEl =  document.getElementById("upcoming")

        const divInfo = document.createElement('div');
        console.log(baseEl)
        divInfo.className = "forecast-info"

        for (const key of jsonRespData.forecast) {

            console.log(key.condition, "ЗЗЗЗ")
            let cond = key.condition
            let high = key.high
            let low = key.low

           

            const spanUpcomming = document.createElement('span')
            spanUpcomming.className = "upcoming"

            const newSpan = document.createElement('span');
            newSpan.className = 'symbol';
            newSpan.textContent = conditionSymbols[cond];
            const newSpan1 = document.createElement('span');
            newSpan1.className = 'forecast-data';
            newSpan1.textContent = high;
            const newSpan2 = document.createElement('span');
            newSpan2.className = 'forecast-data';
            newSpan2.textContent = low;
            const newSpan3 = document.createElement('span');
            newSpan3.className = 'forecast-data';
            newSpan3.textContent = key.condition;
     
            spanUpcomming.append(newSpan)
            spanUpcomming.append(newSpan1)
            spanUpcomming.append(newSpan2)
            spanUpcomming.append(newSpan3)
            divInfo.append(spanUpcomming)
            baseEl.append(divInfo)
            
        }
    }

    async function cityFind(city){
        let locationCode;
        try {
          
            const locationSearch = await fetch(locationsURL)
            .then(locationMatch)
            .then(location  =>{
                 locationCode = location.find(x => x.name === city).code;});

            await fetch(forecastUrl + locationCode)
                 .then(locationMatch)
                 .then(forecastToday);

            await fetch(forecastFutureUrl + locationCode)
                 .then(locationMatch)
                 .then(forecastFuture);
                

        } catch  (e) {

            console.log(`error with something ${e}`)
        }
        console.log(`Location code @ ${locationCode}`)
        return locationCode
 
    } 


   

    // console.log("TODO...");
}

attachEvents();