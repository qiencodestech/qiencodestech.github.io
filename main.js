// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const listBox = document.getElementById('listContainer');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     if (input.value === '' || input.value === null) {
//         alert('You cannot add a blank item.');
//     } else {
//         const listItem = document.createElement('li');
//         listItem.className = "listItem";

//         const XBtn = document.createElement('span');
//         XBtn.className = "X-btn";
//         XBtn.innerHTML = "X";
//         listItem.appendChild(XBtn);

//         const itemTitle = document.createElement('span');
//         itemTitle.className = "itemTitle";
//         listItem.appendChild(itemTitle);

//         const listItemText = document.createTextNode(input.value);
//         itemTitle.appendChild(listItemText);


//         const listElement = document.getElementById('itemList');
//         listElement.appendChild(listItem);

//         // Clear the input after adding an item
//         input.value = '';
//         input.focus();
//     }
// });

const inputVal = document.getElementsByClassName('inputVal')[0];
const addBtn = document.getElementsByClassName('btn')[0];
const editableItem = document.getElementsByClassName('itemTitle');

addBtn.addEventListener('click', function () {
    if (inputVal.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem('localItem'))
        if (localItems === null) {
            taskList = []

        } else {
            taskList = localItems;
        }
        taskList.push(inputVal.value)
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }

    showItem()
});

function showItem() {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = []

    } else {
        taskList = localItems;
    }


    let html = '';
    let itemShow = document.querySelector('#itemList');
    taskList.forEach((data, index) => {


        html += `
    <li class="listItem">
    <span onClick="deleteItem(${index})" class="X-btn">X</span>
    <span class="itemTitle">${data}</span>
    </li>
    `;
    });
    itemShow.innerHTML = html;
}
showItem()

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask() {

    localStorage.clear()
    showItem()
};

inputVal.focus();