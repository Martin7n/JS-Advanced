import { displayMovies } from "./catalog.js";


export function checkLogUser(){

    const username = sessionStorage.getItem('username')
    return username
};

export function dynamicNav(){
    const username = checkLogUser()
    if (username){
        [...document.querySelectorAll('.user')].forEach(
            el => el.style.visibility = "none"
            
        );
        [...document.querySelectorAll('.guest')].forEach(
            el => el.style.visibility = "inline"
        );
        document.getElementById('welcome-msg').textContent = `Welcome, ${username}!`;
    } else {

        [...document.querySelectorAll('.user')].forEach(
            el => el.style.visibility = "inline"
        );

        [...document.querySelectorAll('.guest')].forEach(
            el => el.style.visibility = "none"
        );

        console.log("reg-nav #active"   )

    }
};

displayMovies()



