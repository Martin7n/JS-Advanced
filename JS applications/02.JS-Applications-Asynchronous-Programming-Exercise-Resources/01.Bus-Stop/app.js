function getInfo() {

    const homeUrl = "http://localhost:3030/jsonstore/bus/businfo/";
    const stopField = document.getElementById("stopId");
    const submitBtn = document.getElementById("submit");
    const stopNameEl = document.getElementById("stopName");
    const newUlelement = document.createElement('ul');

    requestStopId()
    async function requestStopId(ev) {

        const stopId = stopField.value
        const fullURL = homeUrl + stopId;
        try{

        const response = await fetch(fullURL)
        const respData = await response.json();
        console.log(respData)
        clear()
        render(respData); } catch (error){
            clear()
            stopNameEl.textContent = "ERROR"
            console.log(error);
           
            
        }
    }

    function render(respData){

        const busesEl = document.getElementById("buses");

        
        newUlelement.textContent = respData.name;
        
        busesEl.textContent = Object.entries(respData.buses).forEach(
            ([bus, time]) =>
                {const newLi = document.createElement("li");
                newLi.textContent = `Bus ${bus} arrives in ${time} minutes`;
                newUlelement.appendChild(newLi);
                }
        );
        stopNameEl.appendChild(newUlelement)

    }

    function clear(){
        stopField.value = '';
        stopNameEl.innerHTML = ''

    };


    
} 