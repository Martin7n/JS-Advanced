import page from "page";



const urlMovies = 'http://localhost:3030/data/movies/';

const movies = {

    getallmovies(){

        return fetch(urlMovies)
        .then(response => response.json())
        .then(data => Object.values(data))
        .catch(e => console.log(`error ${e}`))

    },

    getMovie(id){
  
        return fetch(urlMovies + id)
        .then(response => response.json())
        .catch(e => console.log(`error ${e}`));
    },

    rmMovie(id){

        const user = sessionStorage.getItem('accessToken');
        if (!user) {
            return alert("Unauthorized")
        }

        const options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': user
            },
        } 
        return fetch(urlMovies + id, options)
        .then(response => {
            response.json()
            console.log("deleted")})
        .catch(e => console.log(`error ${e}`));

    },


    createMovie(title, description, img){


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

    },

    updateMovie(id, title, description, img){
        const uuid = sessionStorage.getItem('userId')
        
        const accessToken = sessionStorage.getItem('accessToken')

        const user = sessionStorage.getItem('userId')
        //todo: user vs creator check or future permission upgrade

        if (!user) {
            return alert("Unauthorized")
        }


        const options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify({title, description, img, accessToken })
            
        }

        return fetch(urlMovies + id, options)
            .then((response) => {
                response.json()
                console.log("modified")
               
            })
            .catch(e => console.log(e));
    
    }


}

export default movies


