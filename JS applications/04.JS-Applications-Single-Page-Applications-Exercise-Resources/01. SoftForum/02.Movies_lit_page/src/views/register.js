import { html, render } from 'lit-html';
import page from "page";
import authActions from '../api/auth.js'


const mainContainer = document.getElementById("container");


const template = html`
            <section id="form-sign-up" class="view-section">
      
                    <form
                    id="register-form"
                    class="text-center border border-light p-5"
                    action=""
                    method=""
                    @submit=${(event) => registerSubmit(event)}
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

                    <div class="form-group">
                        <label for="repeatPassword">Repeat Password</label>
                        <input
                        id="repeatPassword"
                        type="password"
                        class="form-control"
                        placeholder="Repeat-Password"
                        name="repeatPassword"
                        value=""
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">Register</button>
                    </form>
            </section>`

export function renderRegister(){

    
    render(template, mainContainer)
};


 
async function registerSubmit(event){
    event.preventDefault();
    const form = event.target.closest('form');
    const formData = new FormData(form);  
    const { email, password, repeatPassword  } = Object.fromEntries(formData.entries());

    console.log(email, password);
    try {
        await authActions.register(email, password);
        page.redirect('/login'); 
    } catch (error) {
        alert('Registration failed. Please try again.');
        console.error(error);
    }

 } 