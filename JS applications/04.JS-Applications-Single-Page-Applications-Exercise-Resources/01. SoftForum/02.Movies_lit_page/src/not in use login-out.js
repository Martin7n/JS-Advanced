// import { checkLogUser } from './auth.js';
import { dynamicNav, checkLogUser } from './auth.js'
import { displayMovies, getAllMovies } from './catalog.js'
import { personalFavoriteCheckResponseFunction, clearLoginForm } from './utilities.js'
import { navigationRender } from './navigation.js'  
import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from "//unpkg.com/page/page.mjs";

 

const loginlink = document.getElementById('login-link');
const logOutlink = document.getElementById('logout-link');
const loginForm = document.getElementById('login-form')


export function loginPage(){

    const loginFormSection = document.getElementById('form-login')
    const loginForm = html`
        <form
          id="login-form"
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

          <button type="submit" class="btn btn-primary"  @click=${onLogin}>Login</button>
        </form>
        `

        render(loginForm, loginFormSection)
        const btn = document.getElementById("login-form")
        btn.addEventListener( "submit", e => {e.preventDefault(); console.log("prevented")});
    

};

async function onLogin(event) {
    console.log(event.target.parentElement)
    const formData = new FormData(event.target.parentElement);
    console.log(event)

    const { email, password } = Object.fromEntries(formData);
    await login(email, password).catch(e => console.log(e))

    // clearLoginForm()
    
}

async function login(email, password) {
    const response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok != true) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();
    console.log(data)
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('accessToken', data.accessToken);
    //username is not defined on server so username is added with email.
    sessionStorage.setItem('username', data.email);

    const loginFormSection = document.getElementById('form-login')
    loginFormSection.innerHTML = "";
    
    window.location.href = "/";


}



export function logoutPage(){

    

    const logged = checkLogUser()    
    const token = sessionStorage.getItem('accessToken');
    const options = {
        method: "get",
        headers: {
            'X-Authorization': token
        }
    }
    fetch('http://localhost:3030/users/logout', options)
 
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('accessToken');

    window.location.href = "/";


};





