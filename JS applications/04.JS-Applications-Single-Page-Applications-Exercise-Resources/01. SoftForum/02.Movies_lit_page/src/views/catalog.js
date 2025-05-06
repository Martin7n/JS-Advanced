import { html, render } from 'lit-html';
import page from "page";
import movies from '../api/movies.js'



const mainContainer = document.getElementById('container');

// const template = (data) => html`
//       <section id="home-page" class="view-section">
//         <div
//           class="jumbotron jumbotron-fluid text-light"
//           // style="background-color: #343a40"
//         >
//           <img
//             src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
//             class="img-fluid"
//             alt="Responsive image"
//             // style="width: 150%; height: 200px"
//           />
//           <h1 class="display-4">Movies</h1>
//           <p class="lead">
//             Unlimited movies, TV shows, and more. Watch anywhere. Cancel
//             anytime.
//           </p>
//         </div>

//         <h1 class="text-center">Movies</h1>

//         <section id="add-movie-button" class="user">
//           <a href="/addmovie" class="btn btn-warning">Add Movie</a>
//         </section>

//           <section id="movie">
//             <div class="mt-3">
//               <div class="row d-flex d-wrap">
//                 <ul id="movies-list" class="card-deck d-flex justify-content-center">
//                   ${data.map(movie => html`

//                   <li class="card mb-4">
//                     <img class="card-img-top"  src=${movie.img} alt="Card image cap" width="400"/>
//                     <div class="card-body">
//                       <h4 class="card-title">${movie.title}</h4>
                      
                      
//                     </div>
//                     <div class="card-footer">
//                     <button type="button" class="btn btn-info" @click=${() => movieDetails(movie._id)}>Details</button>
//                     </div>
//                   </li>`)}
//                 </ul>
//               </div>
//             </div>
//           </section>
//     </section>
// `


const template = (data) => html`
  <section id="home-page" class="view-section">
    <div class="jumbotron jumbotron-fluid text-light">
      <img
        src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
        class="img-fluid"
        alt="Responsive image"
      />
      <h1 class="display-4">Movies</h1>
      <p class="lead">
        Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
      </p>
    </div>

    <h1 class="text-center">Movies</h1>

    <section id="add-movie-button" class="user">
      <a href="/addmovie" class="btn btn-warning">Add Movie</a>
    </section>

    <section id="movie">
      <div class="mt-3">
        <div class="row d-flex d-wrap">
          <ul id="movies-list" class="card-deck d-flex justify-content-center">
            ${data.map(
              (movie) => html`
                <li class="card mb-4">
                  <img
                    class="card-img-top"
                    src=${movie.img}
                    alt="Card image cap"
                    width="400"
                  />
                  <div class="card-body text-center">
                    <h4 class="card-title">${movie.title}</h4>
                  </div>
                  <div class="card-footer text-center">
                    <button
                      type="button"
                      class="btn btn-info"
                      @click=${() => movieDetails(movie._id)}
                    >
                      Details
                    </button>
                  </div>
                </li>
              `
            )}
          </ul>
        </div>
      </div>
    </section>
  </section>
`;


export async function mainSectionCatalog(){
  const data = await movies.getallmovies(); 
  console.log(data);
     render(template(data), mainContainer )

}


async function movieDetails(mvid){

   page.redirect(`/catalog/${mvid}`);


  
}

