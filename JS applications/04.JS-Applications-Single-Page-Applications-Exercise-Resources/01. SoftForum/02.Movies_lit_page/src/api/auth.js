import page from "//unpkg.com/page/page.mjs";


const url = 'http://localhost:3030/users/';

const authActions = {


 async  login(email, password){

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        };
    

        const response =  await fetch('http://localhost:3030/users/login', options);
    
        if (response.ok != true) {
            const error =  await response.json();
            throw new Error(error.message);
        }
    
        const data =  await response.json();
        console.log(data)
        sessionStorage.setItem('userId', data._id);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('accessToken', data.accessToken);
        //username is not defined on server so username is added with email.
        sessionStorage.setItem('username', data.email);
        page.redirect('/')
    },

 async  logout(){

    const token = sessionStorage.getItem('accessToken');
    const options = {
        method: "get",
        headers: {
            'X-Authorization': token
        }
    }
    await fetch('http://localhost:3030/users/logout', options)
 
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('accessToken');

        page.redirect('/');
    },

 async  register(email, password){

        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        };


        const response =  await fetch('http://localhost:3030/users/register', options);
    
        if (response.ok != true) {
            const error =  await response.json();
            throw new Error(error.message);
        }
    
        const data =  await response.json();
        console.log(data)
        sessionStorage.setItem('userId', data._id);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('accessToken', data.accessToken);
        //username is not defined on server so username is added with email.
        sessionStorage.setItem('username', data.email);
        page.redirect('/')


    }

};


export default authActions;