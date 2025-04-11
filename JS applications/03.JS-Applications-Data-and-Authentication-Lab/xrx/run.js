

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
                const hrefEl = document.createElement("a")
                hrefEl.textContent = "[DELETE]";
                hrefEl.href = "#"
                hrefEl.classList.add("delete-link");
                hrefEl.addEventListener("click", (e) => {
                    
                rowDelete(partContainer.id);
                console.log(hrefEl.parentElement.remove())})
                partContainer.appendChild(hrefEl)


                const hrefEditEL = document.createElement("a")
                hrefEditEL.href = "#"
                hrefEditEL.textContent = "[EDIT]"
                hrefEditEL.classList.add("edit-link");
                hrefEditEL.addEventListener("click", (e) => {editInfo(partContainer.id)});
                partContainer.appendChild(hrefEditEL)

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


function rowDelete(idd){
    const choice = confirm('Are you sure?');
    if (!choice) {return console.error("errrr...")}


    const url = 'http://localhost:3030/jsonstore/autoparts/' + idd;

    const options = {
        method: 'DELETE'
    }

    fetch(url, options).catch(e => { console.error('Something went ...:', e);});


    return console.log(`Aa ${idd}`)



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


 function editInfo(id){

    console.log(id)

    const url = 'http://localhost:3030/jsonstore/autoparts/' + id;
    fetch(url).then(checkResponse)
    .then(data => {
        const edtPartID =  document.getElementById("edit_part_id");
        const edtPartLabel = document.getElementById("edit_part_label");
        const edtPartPrice = document.getElementById("edit_part_price");
        const edtPartQty = document.getElementById("edit_part_qty");
        const saveBtn = document.getElementById('save_btn')
        edtPartID.value = data._id
        edtPartLabel.value = data.label
        edtPartPrice.value = data.price
        edtPartQty.value = data.qty

        saveBtn.addEventListener("click", updatePart);



    })
    .catch(e => {console.error(`${e} error`)})

 
}

function updatePart(){

    const choice = confirm('Are you really sure?');
    if (!choice) {return console.error("errrr...")}
    const record = {};

    record._id = document.getElementById('edit_part_id').value;
    record.label = document.getElementById('edit_part_label').value;
    record.price = Number(document.getElementById('edit_part_price').value);
    record.qty = Number(document.getElementById('edit_part_qty').value);

    const url = 'http://localhost:3030/jsonstore/autoparts/' + record._id;

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    }

    fetch(url, options).catch(e => { console.error('Something went ...:', e);});
    getAutoparts()
    document.getElementById('editor_edit').innerHTML = ""
}   


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

