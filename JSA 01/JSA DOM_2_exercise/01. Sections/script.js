function create(words) {
   
   const someDiv = document.getElementById('content')
   words.forEach(element => {

      const newEl = document.createElement('div');
      const newPel = document.createElement("p");
      newPel.style.display = "none";
      newPel.textContent = element
      newEl.appendChild(newPel)
      newEl.addEventListener("click", (e) =>{
         newPel.style.display = "";
      })
      someDiv.append(newEl);
   });

}