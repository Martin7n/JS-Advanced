function solve() {

    const homeUrl = "http://localhost:3030/jsonstore/bus/businfo/";

    const scheduleUrl = "http://localhost:3030/jsonstore/bus/schedule/";
    let busStop = "http://localhost:3030/jsonstore/bus/schedule/depot/"

    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const statusElmnt = document.querySelector("div#info span.info");


    function disableBtn(element) {
        element.disabled = !element.disabled;
    }

    function btnChangeStatus(){
        disableBtn(departBtn);
        disableBtn(arriveBtn);
    }

    async function get_stop(busStop){

        const res = await fetch(busStop)
        
        // statusElmnt.textContent = `${stop.name} and ${stop.next}`;
        // console.log(stop)

        return await res.json()
    }
    
    async function depart() {

        try {
            const stop = await get_stop(busStop);

            statusElmnt.textContent = `Next stop ${stop.name}`;
            btnChangeStatus()
        } catch  (e) {
            statusElmnt.textContent = "Error";
            btnChangeStatus();

        }
    }



    async function arrive() {
        
        const stop = await get_stop(busStop);
        statusElmnt.textContent = `Arriving at ${stop.name}`;
        busStop = scheduleUrl + stop.next
        // console.log(busStop)

        btnChangeStatus()
    }

    return {
        depart,
        arrive
    };
}

let result = solve();