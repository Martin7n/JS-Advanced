function validate() {

    const element = document.getElementById("email");
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+/

    element.addEventListener("change", (e) =>
{ if (!pattern.test(e.target.value)){
    e.target.classList.add("error")} else {
        e.target.classList.remove("error");
    } }
)
    
}