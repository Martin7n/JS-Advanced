function attachGradientEvents() {
    

const gradBoxElement = document.getElementById('gradient-box');
const resultElement = document.getElementById('result');

gradBoxElement.addEventListener("mouseover", (event) =>
    {const moousePosition = event.offsetX;
    const maxWidth =  event.target.clientWidth;
    // console.log(event.offsetX)
    // console.log(event.target.clientWidth)
    resultElement.textContent =  `${Math.floor(moousePosition / maxWidth * 100)} %`
     
    })
}