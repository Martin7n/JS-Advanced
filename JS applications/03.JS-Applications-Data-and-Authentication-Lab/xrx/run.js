

 function dataAuth(){



const baseStoreUrl = 'http://localhost:3030/jsonstore';
const autopartsUrl = 'http://localhost:3030/jsonstore/autoparts';
const messengerUrl = 'http://localhost:3030/jsonstore/cookbook'
const phonebookUrl = 'http://localhost:3030/jsonstore/phonebook'

const autopartsDiv = document.getElementById('autoparts');
const messengerDiv = document.getElementById('messenger');
const phonebookDiv = document.getElementById('phonebook');
const cookbookDiv = document.getElementById('cookbook');


const btnGetSome = document.getElementById("getSome")
// btnGetSome.preventDefault



btnGetSome.addEventListener("click", getInfo);

// fetch all

function getInfo() {
     getAutoparts()
    
}


async function getAutoparts() {
    let data;
    

    try {
        const response = await fetch(autopartsUrl).then(checkResponse).then(info => data = Object.fromEntries(Object.entries(info)))
    } catch (e) {
            console.log(`error with something ${e}`)
        }

        for (const key in data) {
                const element = data[key];
                const newP = document.createElement("p")
               
                newP.textContent = `part: ${element.label}\nprice: $ ${element.price}\nquantity: ${element.qty};`
                autopartsDiv.append(newP);
                
                // if (autopartsDiv) {
                //     autopartsDiv.append(newP);
                // } else {
                //     console.log('autopartsDiv not found');
                // }
                console.log(element)
                console.log(`${key}, ${element['_id']}, part: ${element.label}\nprice: $ ${element.price}\nquantity: ${element.qty};`)
                
        } 
}


function checkResponse(response){
    if (!response.ok) throw new Error("Error");
    return response.json()
}


 

}


let result = dataAuth();
