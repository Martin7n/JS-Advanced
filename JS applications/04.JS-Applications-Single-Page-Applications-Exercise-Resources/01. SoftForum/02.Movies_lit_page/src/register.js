import { dynamicNav } from "./auth.js";
import { displayMovies } from "./catalog.js";
import { clearLoginForm } from "./utilities.js"
import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from "//unpkg.com/page/page.mjs";

const reglink = document.getElementById('register-link');
// reglink.addEventListener("click", (e) => {
//     e.preventDefault();
//     menusRegister();}
// );

const regform = document.getElementById('register-form')


// regform.addEventListener("submit", (e) => e.preventDefault());

// regform.addEventListener("submit", register);




export function menusRegister(){
    const regFormSection = document.getElementById("form-sign-up");
    const registerForm = html`
    <form
          id="register-form"
          class="text-center border border-light p-5"
          action=""
          method=""
        >
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              value=""
            />
          </div>

          <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input
              id="repeatPassword"
              type="password"
              class="form-control"
              placeholder="Repeat-Password"
              name="repeatPassword"
              value=""
            />
          </div>

          <button type="submit" class="btn btn-primary" @click=${register}>Register</button>
        </form>`

        render(registerForm, regFormSection )
        const btnForm = document.getElementById("register-form")
        btnForm.addEventListener( "submit", e => {e.preventDefault(); console.log("prevented")});
}

export function register(event){
    console.log(event.target.parentElement)

    const formData = new FormData(event.target.parentElement);
    const {email, password} = Object.fromEntries(formData.entries())
    console.log(email, password)

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
        sessionStorage.setItem('email', response.email);
        sessionStorage.setItem('username', response.username);
        sessionStorage.setItem('accessToken', response.accessToken);
        sessionStorage.setItem('_id', response._id);

        // localStorage.setItem('email', response.email);
        // //username is not defined on server so username is added with email.
        // localStorage.setItem('username', response.username);
        // localStorage.setItem('accessToken', response.accessToken);
        // localStorage.setItem('_id', response._id);
        // clearLoginForm()
        // navigationRender()
        document.getElementById("form-sign-up").inneHtml = "";
        page('/'); 
        }
    )
    .catch(e => console.log(e))
   


};

function checkResponse(response){
    if (!response.ok) throw new Error("Error");
    return response.json()
}

