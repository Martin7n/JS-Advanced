function toggle() {
  
    const textEl = document.getElementById('extra')
    const buttonText = document.getElementsByClassName('button')[0]

    if ( textEl.style.display == 'none'){
    textEl.style.display = "block";
    buttonText.textContent = "Less"
    } else {
    textEl.style.display = 'none'
    buttonText.textContent = "More"
    }
}