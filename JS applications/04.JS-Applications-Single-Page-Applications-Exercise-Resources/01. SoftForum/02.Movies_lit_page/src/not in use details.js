import page from "//unpkg.com/page/page.mjs";
import {html, render} from '../node_modules/lit-html/lit-html.js';
import {clearMovies } from "./utilities.js"
import { personalFavoriteCheckResponseFunction } from './utilities.js'


 const urlMovies = 'http://localhost:3030/data/movies'


export async function getMovieDetails(event){
    console.log(event.target.parentElement.id)
    clearMovies()
    const movieId = event.target.parentElement.id;
    console.log(`movie id: ${movieId}`)

    const movie = await getMovieData(movieId)

    const movieCardDetails = document.getElementById("movie-example")



    const movieDetailsCard = html`<section id="${movie._id}" class="view-section">
         <div class="container"> 
           <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>
              
            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${movie.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${movie.description}
              </p>
              <a class="btn btn-danger" href="#" @click=${deleteMovie(movie._id)}>Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              <a class="btn btn-primary" href="#">Like</a>
              <span class="enrolled-span">Liked 1</span>
            </div>
          </div> 
        </div> 
      </section>`

      render(movieDetailsCard, movieCardDetails)

      

    
};
 

async function getMovieData(movieId){

    const response = fetch(urlMovies+movieId).then(personalFavoriteCheckResponseFunction).catch(e => alert(e))
    const data = await response;
    // const {_ownerId, title, description, img, _createdOn, _id} = Object.fromEntries(Object.entries(data));

    const movieDetailsObj = Object.fromEntries(Object.entries(data));
    console.log(movieDetailsObj.title)
    return movieDetailsObj



}



async function deleteMovie(movieId){


  const accessToken = sessionStorage.getItem('accessToken')
  const options = {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': accessToken
  },
  body: JSON.stringify(null)
  }
 
  const response = fetch(urlMovies+movieId, options)
  .then( () =>
    {
    const movieCardDetails = document.getElementById(movieId)
    page("/catalog")
   })
    .catch(e => alert(e)).catch(e => console.log(e))

  
}



// TODO:

// export function getMovieEditView(movie) {
//     const movieCardDetails = document.getElementById("movie-example");
//     movieCardDetails.innerHTML = ""; // Clear current view

//     const baseDiv = document.createElement('div');
//     const titleInput = document.createElement('input');
//     const imgInput = document.createElement('input');
//     const descTextarea = document.createElement('textarea');

//     const btnSave = document.createElement("button");
//     const btnCancel = document.createElement("button");

//     // Fill with existing movie data
//     titleInput.value = movie.title;
//     imgInput.value = movie.img;
//     descTextarea.value = movie.description;

 
//     titleInput.className = "form-control mb-2";
//     imgInput.className = "form-control mb-2";
//     descTextarea.className = "form-control mb-3";
//     btnSave.className = "btn btn-success me-2";
//     btnCancel.className = "btn btn-secondary";

//     btnSave.textContent = "Save";
//     btnCancel.textContent = "Cancel";

 
//     baseDiv.appendChild(titleInput);
//     baseDiv.appendChild(imgInput);
//     baseDiv.appendChild(descTextarea);
//     baseDiv.appendChild(btnSave);
//     baseDiv.appendChild(btnCancel);

//     movieCardDetails.appendChild(baseDiv);

//      btnSave.addEventListener("click", async () => {
//         const updatedMovie = {
//             id: movie.id,
//             title: titleInput.value,
//             img: imgInput.value,
//             description: descTextarea.value
//         };
//         await saveMovieChanges(updatedMovie); // You'll define this function
//         getMovieDetails({ target: { id: movie.id } }); // Reload details
//     });

//     btnCancel.addEventListener("click", () => {
//         getMovieDetails({ target: { id: movie.id } }); // Reload details view
//     });
// }

