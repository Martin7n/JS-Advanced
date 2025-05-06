import { html, render } from 'lit-html';
import page from "page";
import movies from '../api/movies.js'


const mainContainer = document.getElementById('container');

const template = (movie) => {
    return html`
        <section id="edit-movie" class="view-section">
        

            <form @submit=${(e) => editMovie(e, movie._id)}
            class="text-center border border-light p-5" action="#" method="">
                <h1>Edit Movie</h1>
                <div class="form-group">
                    <label for="title">Movie Title</label>
                    <input
                    id="title"
                    type="text"
                    class="form-control"
                    placeholder="Movie Title"
                    value=${movie.title}
                    name="title"
                    />
                </div>
                <div class="form-group">
                    <label for="description">Movie Description</label>
                    <textarea
                    class="form-control"
                    placeholder="Movie Description..."
                    name="description"
                    >${movie.description}</textarea>
                </div>
                <div class="form-group">
                    <label for="imageUrl">Image url</label>
                    <input
                    id="imageUrl"
                    type="text"
                    class="form-control"
                    placeholder="Image Url"
                    value=${movie.img}
                    name="img"
                    />
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
        </section>`}

export async function renderEditMovie(ctx){

    const movieId = ctx.params.id;
    const movie =  await movies.getMovie(movieId);
  
    render(template(movie), mainContainer)

}

async function editMovie(event, id){
    event.preventDefault();
    const form = event.target.closest('form');
    const formData = new FormData(form);
    const {title, description, img} = Object.fromEntries(formData.entries());

    await movies.updateMovie(id, title, description, img);
    page.redirect(`/catalog/${id}`)
   


}
