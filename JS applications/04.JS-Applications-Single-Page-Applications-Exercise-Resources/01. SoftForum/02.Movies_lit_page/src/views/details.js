import { html, render } from 'lit-html';
import page from "page";
import movies from '../api/movies.js'


const mainContainer = document.getElementById('container');


const template = (movie) => {
  return html`
    <section id="movie-example" class="view-section">
          <div class="container"> 
           <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>
              
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
              <a class="btn btn-danger" href="/delete/${movie._id}">Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              <a class="btn btn-primary" href="#" >Like</a>
              <span class="enrolled-span">Liked 0</span>
            </div>
          </div>
        </div> 
    </section>`;}


export  async function renderDetails(ctx){
  const movieId = ctx.params.id;
  const movie =  await movies.getMovie(movieId);
  // console.log(`movie returned ${movie}`)

  render(template(movie), mainContainer)

};

export function delMovie(ctx){

  const movieId = ctx.params.id;
  movies.rmMovie(movieId)
  // page.redirect("/")

  // const movie =  movies.rmMovie(movieId);

}

// async function liked(movieId){

//   const liked = await movies.getLikes(movieId)
//   return liked

// }

