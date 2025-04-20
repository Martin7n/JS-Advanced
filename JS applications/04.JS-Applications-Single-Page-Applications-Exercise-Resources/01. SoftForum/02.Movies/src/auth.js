import { displayMovies } from "./catalog.js";
import {clearMovies } from "./utilities.js"


export function checkLogUser(){

    const username = sessionStorage.getItem('username')
    return username
};

export function dynamicNav(){

    clearMovies()
    const username = sessionStorage.getItem('username')
    if (username) {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'none');
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'inline');
        document.getElementById('welcome-msg').textContent = `Welcome, ${username}!`;
        console.log(`logged: ${username}`)
    } else {
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'inline');
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'none');
        console.log('non logged')
       
    }


        const regFromElmnt = document.getElementById("form-sign-up");
        regFromElmnt.style.display = 'none';

        const loginForm = document.getElementById('login-form')
        loginForm.style.display = 'none';

        displayMovies()

};







