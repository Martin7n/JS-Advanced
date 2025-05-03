import {personalFavoriteCheckResponseFunction} from "./utilities.js"
import { dynamicNav, checkLogUser } from "./auth.js"
import { getMovieDetails } from "./details.js"
import {html, render} from '../node_modules/lit-html/lit-html.js';
import { navigationRender } from './navigation.js'

const urlMovies = 'http://localhost:3030/data/movies'

const moviesParent = document.getElementById('movies-list');


const movieMov = html`<li class="card mb-4">
                  <img class="card-img-top"  src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg" alt="Card image cap" width="400"/>
                  <div class="card-body">
                    <h4 class="card-title">Movie Title4</h4>
                    <a href="#">
                    </a>
                  </div>
                  <div class="card-footer">
                  <button type="button" class="btn btn-info">Details</button>
                  </div>
                </li>`

      

export  async function getAllMovies(urlMovies){

    const response = fetch(urlMovies).then(personalFavoriteCheckResponseFunction).catch(e => console.log(e))
    const movies = await response
    return movies
}

export async function displayMovies(){
    
    const moviesParent = document.getElementById('movies-list');
    moviesParent.innerHTML = "";
    const movies = await getAllMovies('http://localhost:3030/data/movies');

    let moviesFound = []
    const username = checkLogUser();
    const loggedUserButtonDetails = (!!username) ? html`
                   
                        <button type="button" class="btn btn-info" @click=${getMovieDetails}>Details</button>
                    `: "";
    movies.map(mov => {
        console.log(mov.title)
        moviesFound.push(html`<li class="card mb-4">
                  <img class="card-img-top" src=${mov.img} alt="Card image cap" width="400"/>
                  <div class="card-body">
                    <h4 class="card-title">${mov.title}</h4>
                    <a href="#">
                    </a>
                  </div>
                  <div class="card-footer" id=${mov._id}>
                    ${loggedUserButtonDetails}
                  </div>
           
                </li>`)
    }   

    
    )
    //...so easy & short...nice!
    navigationRender()
    render(moviesFound, moviesParent)

    }   

    // displayMovies()

