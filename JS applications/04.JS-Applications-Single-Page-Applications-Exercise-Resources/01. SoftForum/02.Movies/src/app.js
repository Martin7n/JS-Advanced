import { preventDefaultOnLinks } from "./utilities.js"
import { dynamicNav } from "./auth.js"
import { loginPage, logoutPage } from "./login-out.js"
import { register } from "./register.js"
 


function initial(){
    const urlMovies = 'http://localhost:3030/data/movies'


    

    // const routes = {
    //     '/': homePage,
    //     '/login': loginPage,
    //     '/logout': logout,
    //     '/register': registerPage,
    //     '/create': createPage
    // };

    dynamicNav()
  

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
