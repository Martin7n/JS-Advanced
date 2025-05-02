import { preventDefaultOnLinks } from "./utilities.js"
import { dynamicNav } from "./auth.js"
import { loginPage, logoutPage } from "./login-out.js"
import { menusRegister } from "./register.js"
import { navigationRender } from './navigation.js'
import { displayMovies } from './catalog.js'
import page from "//unpkg.com/page/page.mjs";
import { addMovieView } from './createmovie.js'


function initial(){

    
    const urlMovies = 'http://localhost:3030/data/movies'
    //displayMovies
    page('/', navigationRender); // Main route: selfex.
    page("/catalog", displayMovies)
    page('/login', loginPage)
    page('/register', menusRegister )
    // page('/details:id', ); currently with eventlistener, so i will have to refactor
    page('/logout', "/")
    page('/add-movie', addMovieView)

    page(); 

    
}

initial()
