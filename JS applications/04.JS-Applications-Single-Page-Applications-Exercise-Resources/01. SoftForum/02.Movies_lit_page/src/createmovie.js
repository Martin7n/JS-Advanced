import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from "//unpkg.com/page/page.mjs";

const createURL = 'http://localhost:3030/data/movies'



export function addMovieView(){

    const createMovieSection = document.getElementById('add-movie')

    const createMovieForm = html`
        <form
          id="add-movie-form"
          class="text-center border border-light p-5"
          action="#"
          method=""
        >
          <h1>Add Movie</h1>
          <div class="form-group">
            <label for="title">Movie Title</label>
            <input
              id="title"
              type="text"
              class="form-control"
              placeholder="Title"
              name="title"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
              class="form-control"
              placeholder="Description"
              name="description"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
              id="imageUrl"
              type="text"
              class="form-control"
              placeholder="Image Url"
              name="img"
              value=""
            />
          </div>
          <button type="submit" class="btn btn-primary" @click=${movieCreator}>Submit</button>
        </form>
    `;
    
    render(createMovieForm, createMovieSection);

    const addForm = document.getElementById('add-movie')
    createMovieForm.addEventListener( "submit", e => {e.preventDefault(); console.log("prevented")});

}

async function  movieCreator(event) {

    const user = sessionStorage.getItem('userId')
    const accessToken = sessionStorage.getItem('accessToken')
   
    console.log(event.target.parentElement.title)


    const formData = new FormData(event.target.parentElement);
    const { title, description, img } = Object.fromEntries(formData);
    console.log(title, description, img)
    console.log(user)

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({ title, description, img, accessToken })
        
    }

    const response = fetch(createURL, options)
    .then(() =>
    {
        const createMovieSection = document.getElementById('add-movie');
        createMovieSection.innerHTML = "";
        page("/catalog")
    }
    )
    .catch(e => console.log(e));

    
}