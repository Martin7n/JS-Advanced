function addItem() {

    const inputVal = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');
    const newLi = document.createElement('li');
    newLi.textContent = inputVal.value;
    ulElement.append(newLi);
    document.getElementById("newItemText").value = ""

}