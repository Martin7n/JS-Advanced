// function solve() {
   
//    let searchEd = document.getElementById('searchText').value;
//    const options = Array.from(document.getElementsByTagName('li'))
//    const resultElement = document.getElementById('result')
//    let count = 0;
//    options.forEach( (element) =>   
//       {if ( element.textContent.includes(searchEd))
//       { console.log(element.textContent)
//          element.style.fontWeight = "bold";
//          element.style.textDecoration = "underline";
//          count++
//          } else {
//             element.style.fontWeight = "";
//             element.style.textDecoration = "";}
// })

// // document.getElementById('searchText').value  = ""
// resultElement.textContent = `${count} matches found`

// }






function solve() {
   
   let searchEd = document.getElementById('searchText').value;
   const options = Array.from(document.getElementsByTagName('li'))
   const resultElement = document.getElementById('result')
   let count = 0;

   const matches = options.map(
      element => 
      {
         element.style.fontWeight = "";
         element.style.textDecoration = "";
         if (element.textContent.includes(searchEd)) {
            element.style.fontWeight = "bold";
            element.style.textDecoration = "underline";
            count++
         }
         return element;
      } );
   
      resultElement.textContent = `${count} matches found`

}