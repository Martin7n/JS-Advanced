import { html, render } from 'lit-html';
import page from "page";
import authActions  from '../api/auth.js'

const container = document.getElementById('container')

const template = html`
        <section id="form-login" class="view-section">
      
            <form
            id="login-form"
            class="text-center border border-light p-5"
            action=""
            method=""
            >
            <div class="form-group">
                <label for="email">Email</label>
                <input
                id="email"
                type="email"
                class="form-control"
                placeholder="Email"
                name="email"
                value=""
                />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                id="password"
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                value=""
                />
            </div>

            <button type="submit" class="btn btn-primary" @click=${(event) => loginSubmit(event)}>Login</button>
            </form>
        </section>`;


 export function loginTemplate(){


    render(template, container)
 }   
 
 async function loginSubmit(event){
    event.preventDefault();
    const form = event.target.closest('form');
    const formData = new FormData(form);  
    const { email, password } = Object.fromEntries(formData.entries());

    console.log(email, password);
    await  authActions.login(email, password);

 } 