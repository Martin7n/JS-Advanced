

 function dataAuth(){


const baseStoreUrl = 'http://localhost:3030/jsonstore';
const autopartsUrl = 'http://localhost:3030/jsonstore/autoparts';
const messengerUrl = 'http://localhost:3030/jsonstore/cookbook'
const phonebookUrl = 'http://localhost:3030/jsonstore/phonebook'

const autopartsDiv = document.getElementById('autoparts');
const messengerDiv = document.getElementById('messenger');
const phonebookDiv = document.getElementById('phonebook');
const cookbookDiv = document.getElementById('cookbook');

const addDataForm = document.getElementById("addInfo");
addDataForm.addEventListener("submit", addInfo);

const forms = document.querySelectorAll("form");
forms.forEach(
    form => { form.addEventListener("submit", (event) => {event.preventDefault();
    console.log(form.id)})}
)




 const btnGetSome = document.getElementById("getSome")
const logInForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn')

    logInForm.addEventListener('submit', postDataDef);

    btnGetSome.addEventListener("click", getInfo);


function postDataDef(event){
    event.preventDefault()
    const formData = new FormData(event.target)

}


// fetch all

function getInfo() {
     getAutoparts()
    
}


function getAutoparts(){
    autopartsDiv.innerHTML = '';
    const response =  fetch(autopartsUrl)
    .then(checkResponse)
    .then(info => { 
        const dataInfo = Object.fromEntries(Object.entries(info));
        return dataInfo
    })
    .then(data => {
                for (const key in data) {
                const element = data[key];
                const partContainer = document.createElement("div")
               
                partContainer.textContent = `part: ${element.label}\nprice: $ ${element.price}\nquantity: ${element.qty};`
                partContainer.id = element['_id'];
                // autopartsDiv.append(partContainer);
                
                if (autopartsDiv) {
                    
                    autopartsDiv.append(partContainer);
                } else {
                    console.log('autopartsDiv not found');
                }
                console.log(element)
                console.log(`${key}, ${element['_id']}, part: ${element.label}\nprice: $ ${element.price}\nquantity: ${element.qty};`

                )  
        } 
      })
    .catch(e => {
        console.error('Something went wrong:', e);
      });
}

// async function getAutoparts() {
//     let data;
//     try {
//         const response = await fetch(autopartsUrl).then(checkResponse).then(info => data = Object.fromEntries(Object.entries(info)))
//     } catch (e) {
//             console.log(`error with something ${e}`)
//         }

//         for (const key in data) {
//                 const element = data[key];
//                 const newP = document.createElement("p")
               
//                 newP.textContent = `part: ${element.label}\nprice: $ ${element.price}\nquantity: ${element.qty};`
//                 autopartsDiv.append(newP);
                
//                 // if (autopartsDiv) {
//                 //     autopartsDiv.append(newP);
//                 // } else {
//                 //     console.log('autopartsDiv not found');
//                 // }
//                 console.log(element)
//                 console.log(`${key}, ${element['_id']}, part: ${element.label}\nprice: $ ${element.price}\nquantity: ${element.qty};`)
                
//         } 
// }


function addInfo(event){

    const url = 'http://localhost:3030/jsonstore/autoparts';



    const label = document.getElementById('part_label').value;
    const price = Number(document.getElementById('part_price').value);
    const qty = Number(document.getElementById('part_quantity').value);

    const autpartData = {
        label,
        price,
        qty,
    }

    
    const options = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(autpartData)
    }

    fetch(url, options)
        .then(checkResponse)
        .then(result => {console.log('successful partAdder :) ')
                getAutoparts()
            }
        ).catch(error => {
            console.error('Failed to add part:', error.message);
        
        });;

    

    
}

function checkResponse(response){
    if (!response.ok) throw new Error("Error");
    return response.json()
}


 

}


let result = dataAuth();

