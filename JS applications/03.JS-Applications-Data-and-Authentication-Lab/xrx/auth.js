

function auth(){

    const loginUrl = 'http://localhost:3030/users/login';
    const registerUrl = 'http://localhost:3030/users/register';



    const forms = document.querySelectorAll("form");
    forms.forEach(
        form => { form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(form.id)
    })}
    )


    const logInForm = document.getElementById("login-form");
    const regForm = document.getElementById('register-form');



    
    logInForm.addEventListener("submit", login);
    regForm.addEventListener("submit", newReg);

    function newReg(event){
        const formData = new FormData(event.target);
        const {email, password, repass} = Object.fromEntries(formData.entries())

        // some validations of the mail and pass/repass later..

        if (password.length <5 | password !==repass) {
            alert("Erorr626336")
            return new Error("Details error...")
        }

        const options = {
            method: "POST",
            headers: {
                'Content-type': 'applications-json'

            },
            body:JSON.stringify({ email, password })
        }

        fetch(registerUrl, options)
        .then(checkResponse)
        .then(userInfo => {
            console.log(userInfo.accessToken);
            localStorage.setItem(email, userInfo.email);
            localStorage.setItem('accessToken', userInfo.accessToken)
            localStorage.setItem('_id', userInfo._id)
            localtion = "/";
        })
        .catch(e => alert(e))

        console.log({email, password, repass})

    }

    function login(event){
        const formData = new FormData(event.target);
        const {email, password} = Object.fromEntries(formData.entries())

        


       
        // const dt = Object.fromEntries(formData.entries())
        // for (const key in dt) {
            
        //         const element = dt[key];
        //         console.log(element)       
        // }
        console.log({email, password})

        const options = {
            method: "POST",
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }


        fetch(loginUrl, options)
        .then(checkResponse)
        .then(userInfo => {
            console.log(userInfo)
            localStorage.setItem('email', userInfo.email);
            localStorage.setItem('accessToken', userInfo.accessToken);
            localStorage.setItem('_id', userInfo._id)

            console.log(`${localStorage['_id']} id saved`)
            // 
        })
        .catch(e => {alert(e)})

    }


    

    function checkResponse(response){
        if (!response.ok) throw new Error("Error");
        return response.json()
    }


}



let result = auth()
