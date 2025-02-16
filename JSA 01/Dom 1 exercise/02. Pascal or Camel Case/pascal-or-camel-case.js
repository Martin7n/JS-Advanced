function solve() {


  const entry = document.getElementById('text').value;
  const typeChange = document.getElementById('naming-convention').value;
  const resEelement = document.getElementById('result')
  const result = []

  switch (typeChange) {
    case "Camel Case" :
      entry.split(" ").forEach(element => {
      if (entry.indexOf(element) !== 0){
        element = element.charAt(0).toUpperCase() +element.slice(1).toLowerCase()
      }  else {
        element = element.toLowerCase()

      }
      console.log(element)
      result.push(element)
    })
        
      break;
      case "Pascal Case" :
        entry.split(" ").forEach(element => {
          element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
          result.push(element)
        });
      break;
  
    default: 
    result.push("Error!")
      break;
  }
  
  resEelement.textContent = result.join("");

}