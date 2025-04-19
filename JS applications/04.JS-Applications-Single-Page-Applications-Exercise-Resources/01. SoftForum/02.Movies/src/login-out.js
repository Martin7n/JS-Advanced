import { checkLogUser } from './auth.js';




const loginlink = document.getElementById('login-link');
loginlink.addEventListener("click", loginPage);
loginlink.addEventListener( "click", (e) => e.preventDefault());


const logOutlink = document.getElementById('logout-link');
logOutlink.addEventListener("click", (e) => e.preventDefault());
logOutlink.addEventListener("click", logoutPage);

export function loginPage(){


    loginlink.addEventListener("click", (e) => 
        {const loginFormElmnt = document.getElementById("form-login");
         loginFormElmnt.removeAttribute("hidden")})

        console.log("TO DO: Log in")

};


export function logoutPage(){

    console.log("TO DO: Log out")


};