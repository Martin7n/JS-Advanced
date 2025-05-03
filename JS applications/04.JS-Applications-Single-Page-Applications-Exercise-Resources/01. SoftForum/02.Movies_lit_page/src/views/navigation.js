import {html, render} from '../../node_modules/lit-html/lit-html.js';
import page from "//unpkg.com/page/page.mjs";


const navigationContainer = document.querySelector('nav.navbar.navbar-expand-lg.navbar-dark.bg-dark');

const template = (isAuthenticated, username) => html`       
                <a class="navbar-brand text-light" href="/catalog">Movies</a>
                <ul class="navbar-nav ml-auto">
                ${isAuthenticated ?
                 html`<li class="nav-item user">
                    <a class="nav-link" id="welcome-msg">Welcome, ${username}</a>
                </li>
                <li class="nav-item user">
                    <a class="nav-link" id="logout-link" href="/logout">Logout</a>
                </li>`:
                html`<li class="nav-item guest">
                    <a class="nav-link" id="login-link" href="/login">Login</a>
                </li>
                <li class="nav-item guest">
                    <a class="nav-link" id="register-link" href="/register">Register</a>
                </li>`
                } 
                </ul>

`;


export function renderNav(ctx, next){
    // console.log(`NavCTXloaded`, ctx)
    const username = sessionStorage.getItem('username');
    const isAuthenticated = !!username;
    
    
    render(template(isAuthenticated, username), navigationContainer);

    next();

};

