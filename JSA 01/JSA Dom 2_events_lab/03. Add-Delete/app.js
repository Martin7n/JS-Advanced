function addItem() {

    const addBtn = document.getElementsByTagName('button');
    const inputField = document.getElementById('newItemText');
    const ulElement = document.getElementById('items')

    const newLi = document.createElement('li')
    newLi.textContent = inputField.value
    
    const delBtn = document.createElement("a")
    delBtn.textContent = "[Delete]"
    delBtn.href = "#"
    delBtn.addEventListener('click', (e) =>
    {newLi.remove()}
)
    newLi.appendChild(delBtn)
    ulElement.appendChild(newLi)
    
    inputField.value = ""

}

