import page from "//unpkg.com/page/page.mjs";


const urlMovies = 'http://localhost:3030/data/movies/';

const movies = {

    getallmovies(){

        return fetch(urlMovies)
        .then(response => response.json())
        .then(data => Object.values(data))
        .catch(e => console.log(`error ${e}`))

            // const response = fetch(urlMovies).then(personalFavoriteCheckResponseFunction).catch(e => console.log(e))
            // const movies = await response
            // return movies

    },

    getMovie(id){
  
        return fetch(urlMovies + id)
        .then(response => response.json())
        .catch(e => console.log(`error ${e}`));
    },

    // async getLikes(id){


        // const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
        // const likes = await res.json();
        // console.log(likes)

        // return fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
        // .then(response => response.json())
        // .catch(e => console.log(`error ${e}`));
       
    // },
    // likeMovie(id){

    //      fetch('http://localhost:3030/data/likes', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-Authorization': user.accessToken
    //         },
    //         body: JSON.stringify({
    //             movieId})
    //         });
        

    // }
    // ,

    createMovie(title, description, img){

        const user = sessionStorage.getItem('userId')
        const accessToken = sessionStorage.getItem('accessToken')

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify({ title, description, img, accessToken })
            
        }

        return fetch(urlMovies, options)
            .then(() => {
                console.log("Ok")
                page.redirect("/")
            })
            .catch(e => console.log(e));

    }


}

export default movies


