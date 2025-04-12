import {personalFavoriteCheckResponseFunction} from '../modulefunc.js'

function attachEvents() {

    const url = 'http://localhost:3030/jsonstore/messenger';

    const messagesBox = document.getElementById('messages');
    const sendBtn = document.querySelector('input[type="button"][value="Send"]');
    const refreshBtn = document.querySelector('input[type="button"][value="Refresh"]');

    sendBtn.addEventListener("click", sendMsgs);
    refreshBtn.addEventListener("click", loadMsgs);


    function sendMsgs(){
        const controlsForm = document.getElementById('controls')

        const authorElement = document.querySelector('input[name="author"]')
        const contentElement  = document.querySelector('input[name="content"]')
        
        
        if (!authorElement.value.trim() || !contentElement.value.trim()) {
            return alert("Try again")
        }
        const message = {
            author: authorElement.value,
            content: contentElement.value
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type':'Application/json'
            },
            body: JSON.stringify(message)
        }


        

        fetch(url, options).then(personalFavoriteCheckResponseFunction)
        .then(rsp => console.log(`response => ${Object.fromEntries(Object.entries(rsp)).author} <=> ${Object.fromEntries(Object.entries(rsp)).content}`)).catch(e=> alert(e))

        loadMsgs()
    }


    function loadMsgs(){

        fetch(url).then(personalFavoriteCheckResponseFunction)
        .then(displayMSG)
        .catch(e => {console.error(`Mega error ${e}`)})

    }

     function displayMSG(data){
        messagesBox.textContent =''

        messagesBox.style.display = "inline"

        const newData =  Object.fromEntries(Object.entries(data));
        for (const key in newData) {
                const element = newData[key];
                // console.log(`${element.author} set the ${element.content}`)
                messagesBox.textContent += `\n${element.author}: ${element.content}`
                 
        } 

    }


    console.log('TODO...');


    // function personalFavoriteCheckResponseFunction(response){
    //     if (!response.ok) throw new Error("Error");
    //     return response.json()
    // }
}

attachEvents();