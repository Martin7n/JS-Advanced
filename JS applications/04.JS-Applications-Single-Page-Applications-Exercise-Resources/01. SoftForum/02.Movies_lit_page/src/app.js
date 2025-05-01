import { preventDefaultOnLinks } from "./utilities.js"
import { dynamicNav } from "./auth.js"
import { loginPage, logoutPage } from "./login-out.js"
import { register } from "./register.js"
import { navigationRender } from './navigation.js'
import { displayMovies } from './catalog.js'
import page from "//unpkg.com/page/page.mjs";



function initial(){

    
    const urlMovies = 'http://localhost:3030/data/movies'


    function fs(){
        console.log("redirected")
    }
    // displayMovies()
    // navigationRender()
    page('/', displayMovies, fs); // Main route: selfex.
    page('/login', loginPage)
    page('/logout', logoutPage )
    page.start(); 
   
    // @click=${onLogin}

    // const routes = {
    //     '/': homePage,
    //     '/login': loginPage,
    //     '/logout': logout,
    //     '/register': registerPage,
    //     '/create': createPage
    // };
    // displayMovies()
    // navigationRender()

  

        // const loginSection = document.getElementById("form-login");
        // const registerSection = document.getElementById("form-sign-up");
        // const editForm = document.getElementById('edit-movie');
        
        // // [loginSection, registerSection, editForm].forEach(element => {
        // //     if (element) {
        // //         element.hidden = 'true'; 
        // //     }
        // // });

    
}

initial()
