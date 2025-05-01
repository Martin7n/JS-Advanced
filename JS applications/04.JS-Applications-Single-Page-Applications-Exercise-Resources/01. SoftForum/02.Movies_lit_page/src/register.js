import { dynamicNav } from "./auth.js";
import { displayMovies } from "./catalog.js";
import { clearLoginForm } from "./utilities.js"

const reglink = document.getElementById('register-link');
// reglink.addEventListener("click", (e) => {
//     e.preventDefault();
//     menusRegister();}
// );

const regform = document.getElementById('register-form')


// regform.addEventListener("submit", (e) => e.preventDefault());

// regform.addEventListener("submit", register);




function menusRegister(){
    const regFromElmnt = document.getElementById("form-sign-up");
    regFromElmnt.style.display = 'block';
    const loginForm = document.getElementById('login-form')
    loginForm.style.display = 'none';
}

export function register(event){
    console.log(event.target)

    const formData = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData.entries())

    const url = 'http://localhost:3030/users/register'
    const options = {
        method: "POST",
        headers:{
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({email, password})
    }

    fetch(url, options)
    .then(checkResponse)
    .then(response => {
        console.log(response)
        localStorage.setItem('email', response.email);
        //username is not defined on server so username is added with email.
        localStorage.setItem('username', response.username);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('_id', response._id);
        }
    )
    .catch(e => console.log(e))
    clearLoginForm()
        dynamicNav();


};

function checkResponse(response){
    if (!response.ok) throw new Error("Error");
    return response.json()
}

