import { preventDefaultOnLinks } from "./utilities.js"
import { dynamicNav } from "./auth.js"
import { loginPage, logoutPage } from "./login-out.js"
import { menusRegister } from "./register.js"
import { navigationRender } from './navigation.js'
import { displayMovies } from './catalog.js'
import page from "//unpkg.com/page/page.mjs";



function initial(){

    
    const urlMovies = 'http://localhost:3030/data/movies'
 
    page('/', displayMovies); // Main route: selfex.
    page('/login', loginPage)
    page('/register', menusRegister )
    page('/logout', "/")
    
    page.start(); 

    
}

initial()
