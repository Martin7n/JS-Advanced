// import { checkLogUser } from './auth.js';
import { dynamicNav, checkLogUser } from './auth.js'
import { displayMovies } from './catalog.js'
import { personalFavoriteCheckResponseFunction, clearLoginForm } from './utilities.js'

 



const loginlink = document.getElementById('login-link');
const logOutlink = document.getElementById('logout-link');
const loginForm = document.getElementById('login-form')

logOutlink.addEventListener("click", (e) => e.preventDefault());
loginlink.addEventListener("click", (e) => e.preventDefault());

loginlink.addEventListener("click", loginPage);
logOutlink.addEventListener("click", logoutPage);

loginForm.addEventListener('submit', (e) => e.preventDefault());

loginForm.addEventListener('submit', onLogin);




export function loginPage(){

    const loginForm = document.getElementById('login-form')
    loginForm.style.display = "block";
    const regFromElmnt = document.getElementById("form-sign-up");
    regFromElmnt.style.display = 'none';



    loginlink.addEventListener("click", (e) => 
        {const loginFormElmnt = document.getElementById("form-login");
         loginFormElmnt.removeAttribute("hidden")})

};

async function onLogin(event) {
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);
    await login(email, password).catch(e => console.log(e))

    clearLoginForm()

    
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

    dynamicNav()

}





export function logoutPage(){

    

    const logged = checkLogUser()
    // if (!logged) { return }
    // console.log("TO DO: Log out")
     
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

    dynamicNav()

};





