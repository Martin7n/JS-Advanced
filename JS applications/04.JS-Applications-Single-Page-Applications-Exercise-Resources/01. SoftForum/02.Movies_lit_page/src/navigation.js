import { html, render } from '../node_modules/lit-html/lit-html.js';
import { dynamicNav, checkLogUser } from "./auth.js"
import { logoutPage } from "./login-out.js"
import { displayMovies } from "./catalog.js"


export function navigationRender(){

const username = checkLogUser();

const navigationUlElement = document.querySelector('ul.navbar-nav.ml-auto')
let navigation;
    if (!!username) {
            navigation = html`
                <li class="nav-item user">
                    <a class="nav-link" id="welcome-msg">Welcome, ${username.username}</a>
                </li>
                <li class="nav-item user">
                    <a class="nav-link" id="logout-link" href="/logout" @click=${logoutPage}>Logout</a>
                </li>`;

    } else {
    
    navigation = html`
                <li class="nav-item guest">
                    <a class="nav-link" id="login-link" href="/login">Login</a>
                </li>
                <li class="nav-item guest">
                    <a class="nav-link" id="register-link" href="/register">Register</a>
                </li>`;
    }

    render(navigation, navigationUlElement )

   
}

