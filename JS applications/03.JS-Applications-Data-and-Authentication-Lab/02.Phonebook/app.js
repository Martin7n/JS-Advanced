import { personalFavoriteCheckResponseFunction } from "../modulefunc.js";

//some module practice...


function attachEvents() {
    const mainUrl = 'http://localhost:3030/jsonstore/phonebook';


    const phoneUlist = document.getElementById("phonebook");
    const loadBtn = document.getElementById("btnLoad");    
    const createBtn = document.getElementById("btnCreate");
    
    // btn kill: next module candidate.
    [loadBtn, createBtn].forEach(
        el => {el.addEventListener('click', e => {e.preventDefault()})}
    );

    loadBtn.addEventListener("click", loadContacts );
    createBtn.addEventListener("click", createContact);




    function loadContacts(params) {

        fetch(mainUrl)
        .then(personalFavoriteCheckResponseFunction)
        .then(listCreator)
        .catch(e => console.error(`error => ${e}`));

    }

    function listCreator(phonJSON){

        phoneUlist.innerHTML =""
        const contactsData = Object.fromEntries(Object.entries(phonJSON));
        for (const key in contactsData) {
            console.log(key)
            const element = contactsData[key];
            const newLi = document.createElement('p')
            const delBtn = document.createElement("button")
            delBtn.textContent = '[Delete]' 
            newLi.textContent = `${element.person} ${element.phone}`
            newLi.id = element._id

            //IMPORTATNT!: if not async and doesn't returns..it's desync.
            delBtn.addEventListener("click", async  (e) =>
            {
                await deleteContact(element._id);
                loadContacts()
                
            }
            
            )

            newLi.append(delBtn);
            phoneUlist.append(newLi);
            
        }


    }

    function deleteContact(id) {
        
        const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
        const options = {
            method: "DELETE",
        }

        return fetch(url, options).catch(e => alert(`error as ${e}`));
      
        
    }


    function createContact() {

        const personElmnt = document.getElementById("person");
        const phoneElmnt = document.getElementById("phone");
        const person = personElmnt.value;
        const phone = phoneElmnt.value;

        if (!person || !phone) {
            return alert("Error")
        }
        const body = {
            person,
            phone
        }

        const options = {
            method: "POST",
            headers: {
                  'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        }
    

        fetch(mainUrl, options)
        .then(personalFavoriteCheckResponseFunction).catch((e) => console.log(e));
        personElmnt.value = '';
        phoneElmnt.value = '';
        loadContacts();

}}

attachEvents();