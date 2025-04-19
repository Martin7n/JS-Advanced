// import { checkLogUser } from './auth.js';
import { dynamicNav, checkLogUser } from './auth.js'
import { displayMovies } from './catalog.js'
import { personalFavoriteCheckResponseFunction } from './utilities.js'
 



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


    loginlink.addEventListener("click", (e) => 
        {const loginFormElmnt = document.getElementById("form-login");
         loginFormElmnt.removeAttribute("hidden")})


};

// async function onLogin(event){
//     const logInForm = document.getElementById("login-form");
//     const formData = new FormData(event.target);
//     const { email, password } = Object.fromEntries(formData);
//     const options = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//     }


//     const response = await fetch('http://localhost:3030/users/login', options)
//     .then(personalFavoriteCheckResponseFunction)
//     .catch(e => alert(e));

//     localStorage.setItem('userId', response.id)
//     localStorage.setItem('username', response.username)
//     localStorage.setItem('accessToken', response.accessToken)

//     console.log(localStorage.accessToken)
//     dynamicNav()
//     displayMovies()
// }

async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    // try {
    //     await login(email, password);
        
    //     dynamicNav();
    //     displayMovies();
    // } catch (err) {
    //     alert(err.message);
    // }

    await login(email, password).catch(e => console.log(e))
    dynamicNav();
    displayMovies();
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

    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('accessToken', data.accessToken);
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
    sessionStorage.removeItem('accessToken');

    dynamicNav()
    displayMovies()

};

