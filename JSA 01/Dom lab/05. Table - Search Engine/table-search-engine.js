function solve() {
  

let search = document.getElementById("searchField").value;
const row = Array.from(document.getElementsByTagName('tr'))
row.forEach(element => {
   if (element.textContent.indexOf(search) >= 0 && row.indexOf(element) > 0){
   element.classList.add("select")
   document.getElementById("searchField").value = ""} 
   else 
   {element.classList.remove("select");
      
   }

});


}