const list = document.querySelector('.list');

/* delete item */

list.addEventListener('click', function(e) {
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

const addBtn = document.querySelector('.add-button');
const input = document.querySelector('.add-item');

input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        addBtn.click();
    }
});

/* add item */

addBtn.addEventListener('click', function addItem() {

    let listOfItems = document.querySelectorAll('.item');
    const value = input.value;

    if (listOfItems.length < 5 && value !== '') {

        const item = document.createElement('li');
        const text = document.createElement('div');
        const deleteBtn = document.createElement('span');

        text.textContent = value;
        deleteBtn.textContent = 'Done'

        item.classList.add('item');
        text.classList.add('text');
        deleteBtn.classList.add('delete');

        item.appendChild(text)
        item.appendChild(deleteBtn)
        list.appendChild(item);


    } else if (listOfItems.length < 5 && value === '') {

    } else if (listOfItems.length >= 5 && value !== '') {
        alert('You already have 5 tasks, please complete these first!');
    }

    input.value = '';

})