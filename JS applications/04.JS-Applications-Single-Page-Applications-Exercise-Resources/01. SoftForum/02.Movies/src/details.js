
import {clearMovies } from "./utilities.js"
import { personalFavoriteCheckResponseFunction } from './utilities.js'



 const urlMovies = 'http://localhost:3030/data/movies/'


export async function getMovieDetails(event){

    clearMovies()
    const movieId = event.target.id;
    console.log(`movie id: ${event.target.id}`)

    const movie = await getMovieData(movieId)

    const movieCardDetails = document.getElementById("movie-example")
    movieCardDetails.innerHTML =
    //  <section id="movie-example" class="view-section">
    `<div class="container">  
      <div class="row bg-light text-dark">
        <h1>Movie title:  ${movie.title}</h1>
          
        <div class="col-md-8">
          <img
            class="img-thumbnail"
            src=${movie.img}
            alt="Movie"
          />
        </div>
        <div class="col-md-4 text-center">
          <h3 class="my-3">Movie Description</h3>
          <p>
          ${movie.description}
          </p>
          <a class="btn btn-danger" href="#">Delete</a>
          <a class="btn btn-warning" href="#">Edit</a>
          <a class="btn btn-primary" href="#">Like</a>
          <span class="enrolled-span">Liked 1</span>
        </div>
      </div>`
    /* </div>  */

};


async function getMovieData(movieId){

    const response = fetch(urlMovies+movieId).then(personalFavoriteCheckResponseFunction).catch(e => alert(e))
    const data = await response;
    // const {_ownerId, title, description, img, _createdOn, _id} = Object.fromEntries(Object.entries(data));

    const movieDetailsObj = Object.fromEntries(Object.entries(data));
    console.log(movieDetailsObj.title)
    return movieDetailsObj
    //     "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
    //     "title": "Top Gun 2",
    //     "description": "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
    //     "img": "https://i.pinimg.com/originals/f2/a4/58/f2a458048757bc6914d559c9e4dc962a.jpg",
    //     "_createdOn": 1614935268135,
    //     "_id": "a9bae6d8-793e-46c4-a9db-deb9e3484909"
    // }


}

