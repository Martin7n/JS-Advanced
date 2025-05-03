import {html, render} from '../../node_modules/lit-html/lit-html.js';
import page from "//unpkg.com/page/page.mjs";
import movies from '../api/movies.js'

const mainContainer = document.getElementById('container');


const template = html`
<form     @submit=${(e) => movieDetails(e)}
          id="add-movie-form"
          class="text-center border border-light p-5"
          action="javascript:void(0);"
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
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
`

export function newMovieRender(){
  


  render(template, mainContainer)

};


async function movieDetails(event){
    event.preventDefault();

    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const { title, description, img } = Object.fromEntries(formData.entries());
    
    await movies.createMovie(title, description, img);
    form.reset();

 
}