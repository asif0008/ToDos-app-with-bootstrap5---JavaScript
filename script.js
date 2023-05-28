const form = document.querySelector('#form');
const itemList = document.querySelector('#items');
const errorMsg = document.querySelector('#msg');
const filter = document.querySelector('#search-filter');

// Form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', deleteItem);
//filter event 
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();
    // console.log('submit success');

    // Get the value of Input
    var newItem = document.querySelector('#item');

    if(newItem.value === '') {
        errorMsg.className = 'error-msg';
        errorMsg.innerHTML = 'Please add Todos to input field';

        console.log('please add input field');
    }else {

        // Creating new li and delete btn element
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center justify-content-between fs-4';

        const deleteBtn = document.createElement('i');
        deleteBtn.className = 'bi bi-x-lg bg-danger btn fs-5 py-1 px-2 text-white rounded delete';

        // Adding newItem value into li and deleteBtn to li 
        li.appendChild(document.createTextNode(newItem.value));
        li.appendChild(deleteBtn);

        
        // Adding li to items 
        itemList.appendChild(li);

        // Removing Validation msg
        // errorMsg.remove();

        // Clearing the Input field
        newItem.value = '';
    }

    // Timeout to clear validation msg
    setTimeout(() => {
        errorMsg.remove();
      }, "5000");
}

// Delete item js

function deleteItem(e) {
    if(e.target.classList.contains('delete')){
        const li = e.target.parentElement;
        itemList.removeChild(li);
        
        console.log('Element removed');
    }
}

// Filter items js
function filterItems(e) {
    // convert text to lowercase
    const text = e.target.value.toLowerCase();
    // Get list items from Unorder list
    const items = itemList.getElementsByTagName('li');
    // Convert collection into Array
    Array.from(items).forEach(function(item) {
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })
}
