function deleteByEmail() {
    
    const mailFieldElement = document.querySelectorAll("tbody tr");
    const inputFieldElement = document.querySelector('input[name=email]')
    const statusElement = document.getElementById("result")  

    mailFieldElement.forEach( element =>
    {       if (element.textContent.match(inputFieldElement.value) && inputFieldElement.value.length > 0){
            element.remove()
            statusElement.textContent = "Deleted."
        } 
    }
    )

    if (statusElement.textContent != "Deleted."){statusElement.textContent = "Not found."}
    inputFieldElement.value = ""

}