import {personalFavoriteCheckResponseFunction} from "./utilities.js"

import { dynamicNav } from "./auth.js"

import {checkLogUser} from "./auth.js"

const urlMovies = 'http://localhost:3030/data/movies'



export  async function getAllMovies(urlMovies){

    const response = fetch(urlMovies).then(personalFavoriteCheckResponseFunction).catch(e => console.log(e))
    const movies = await response
    return movies
}

export async function displayMovies(){

  

    const moviesParent = document.getElementById('movies-list');
    const movies = await getAllMovies(urlMovies);

    console.log(movies)
    console.log(Object.values(movies))
     

    const dat = Object.values(movies)
    dat.forEach(el => {createMovie(el);
    // console.log(el.title);
    });
    }   

function createMovie(movie){
    const moviesParent = document.getElementById('movies-list')
    const movieLiElmnt = document.createElement('li');
    movieLiElmnt.className ="card mb-4";
    const moviePic = document.createElement("img")
    moviePic.className = "card-img-top"
    moviePic.src = movie.img
    movieLiElmnt.append(moviePic);
    
    const cardBodyDiv = document.createElement('div')
    cardBodyDiv.className = "card-body"
    const title = document.createElement('h4')
    title.className = "card-title";
    title.textContent = movie.title;
    const linkElement = document.createElement("a")
    linkElement.href = '';
    cardBodyDiv.append(title)
    cardBodyDiv.append(linkElement)

    movieLiElmnt.append(cardBodyDiv)
    

    const cardFooterEleement = document.createElement("div")
    cardFooterEleement.className = "card-footer";
    const infoBtn = document.createElement("button")
    infoBtn.className = "btn btn-info";
    infoBtn.id = movie._id
    infoBtn.textContent = "Details"
    infoBtn.addEventListener("click", (e) => {console.log("not ready yet")});
    cardFooterEleement.append(infoBtn)
    
    movieLiElmnt.append(cardFooterEleement)

    moviesParent.append(movieLiElmnt)

}



