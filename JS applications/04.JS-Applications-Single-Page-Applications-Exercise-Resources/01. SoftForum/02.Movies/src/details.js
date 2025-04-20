
import {clearMovies } from "./utilities.js"
import { personalFavoriteCheckResponseFunction } from './utilities.js'



 const urlMovies = 'http://localhost:3030/data/movies/'


export async function getMovieDetails(event){

    clearMovies()
    const movieId = event.target.id;
    console.log(`movie id: ${event.target.id}`)

    const movie = await getMovieData(movieId)

    const movieCardDetails = document.getElementById("movie-example")

    
    const baseDiv = document.createElement('div');
    baseDiv.id = event.target.id;
    const titleDiv = document.createElement('div');
    const titleText = document.createElement('h1')
    const imgDiv = document.createElement('div');
    const desckriptionDiv = document.createElement('div');
    const h3Description = document.createElement('h3')
    const descriptionPgf = document.createElement('p')

    const btnDelete = document.createElement("a");
    const btnEdit = document.createElement("a");
    const btnLike = document.createElement("a");
    const spanLike = document.createElement('span')
    const imgTag = document.createElement('img')



    btnDelete.textContent = "Delete";
    btnEdit.textContent = "Edit";
    btnLike.textContent = "Like";
    spanLike.textContent = `Liked 1`
    h3Description.textContent = "Movie Description"
    descriptionPgf.textContent = `${movie.description}`
    
    titleText.className = "row bg-light text-dark"
    btnDelete.className = "btn btn-danger";
    btnEdit.className = "btn btn-warning";
    btnLike.className = "btn btn-primary";
    spanLike.className = "enrolled-span";

    btnDelete.classList.add(`${event.target.id}`)
    btnEdit.classList.add(`${event.target.id}`)
    btnLike.classList.add(`${event.target.id}`)

    btnDelete.addEventListener("click", delEvent)
    btnEdit.addEventListener("click", editEvent)
    btnLike.addEventListener("click", likeEvent)
    
    imgDiv.className = "col-md-8";
    imgTag.className  = "img-thumbnail";
    imgTag.alt = "Movie"
    imgTag.src = `${movie.img}`

    desckriptionDiv.className ="col-md-4 text-center";
    h3Description.className = "my-3";

    baseDiv.append(titleDiv)
    imgDiv.append(imgTag)
    baseDiv.append(imgDiv)

    desckriptionDiv.append(h3Description)
    desckriptionDiv.append(descriptionPgf)

    desckriptionDiv.append(btnDelete);
    desckriptionDiv.append(btnEdit);
    desckriptionDiv.append(btnLike);
    desckriptionDiv.append(spanLike);
    baseDiv.append(desckriptionDiv)

    movieCardDetails.append(baseDiv)
};
    // movieCardDetails.innerHTML =
    // //  <section id="movie-example" class="view-section">
    // `<div class="container">  
    //   <div class="row bg-light text-dark">
    //     <h1>Movie title:  ${movie.title}</h1>
          
    //     <div class="col-md-8">
    //       <img
    //         class="img-thumbnail"
    //         src=${movie.img}
    //         alt="Movie"
    //       />
    //     </div>
    //     <div class="col-md-4 text-center">
    //       <h3 class="my-3">Movie Description</h3>
    //       <p>
    //       ${movie.description}
    //       </p>
    //       <a class="btn btn-danger" href="#">Delete</a>
    //       <a class="btn btn-warning" href="#">Edit</a>
    //       <a class="btn btn-primary" href="#">Like</a>
    //       <span class="enrolled-span">Liked 1</span>
    //     </div>
    //   </div>`
    /* </div>  */




async function getMovieData(movieId){

    const response = fetch(urlMovies+movieId).then(personalFavoriteCheckResponseFunction).catch(e => alert(e))
    const data = await response;
    // const {_ownerId, title, description, img, _createdOn, _id} = Object.fromEntries(Object.entries(data));

    const movieDetailsObj = Object.fromEntries(Object.entries(data));
    console.log(movieDetailsObj.title)
    return movieDetailsObj
    // response format:
    //     "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
    //     "title": "Top Gun 2",
    //     "description": "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
    //     "img": "https://i.pinimg.com/originals/f2/a4/58/f2a458048757bc6914d559c9e4dc962a.jpg",
    //     "_createdOn": 1614935268135,
    //     "_id": "a9bae6d8-793e-46c4-a9db-deb9e3484909"
    // }


}



function delEvent(event){
    console.log(event.target.className)
}
function editEvent(event){
    console.log(event.target)
}
function likeEvent(event){
    console.log(event.target)
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

