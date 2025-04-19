


const reglink = document.getElementById('register-link');
reglink.addEventListener("click", (e) => e.preventDefault());
reglink.addEventListener("click", register);


export function register(){

    const regFromElmnt = document.getElementById("form-sign-up");
    regFromElmnt.removeAttribute("hidden")


};