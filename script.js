const list = document.querySelector('.list');
let five = document.querySelector('.five');

/* delete item */

list.addEventListener('click', function(e) {
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        li.classList.add('line');
        setTimeout(function() { list.removeChild(li) }, 400);
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
        five.style.display = 'none';
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
        five.style.display = 'inherit';
        setTimeout(function() { five.style.display = 'none' }, 3000);
    }

    input.value = '';

})