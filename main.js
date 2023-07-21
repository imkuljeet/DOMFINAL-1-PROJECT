var form = document.getElementById('addForm');
var itemList=document.getElementById('items');

// FORM SUBMIT EVENT

form.addEventListener('submit', addItem);

// DELETE EVENT
itemList.addEventListener('click', removeItem);

// ADD ITEM

function addItem(e){
    e.preventDefault();
    
    // GET INPUT VALUE
    var newItem=document.getElementById('item').value;

    // CREATE NEW LI ELEMENT
    var li=document.createElement('li');

    // ADD CLASS
    li.className = 'list-group-item';
    console.log(li);

    // ADD TEXT NODE WITH INPUT VALUE
    li.appendChild(document.createTextNode(newItem));

    // CREATE DEL BUTTON ELEMENT
    var deleteBtn = document.createElement('button');

    // ADD CLASSES TO DELETE BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // APPEND TEXT NODE
    deleteBtn.appendChild(document.createTextNode('x'));

    //APPEND BUTTON TO LI
    li.appendChild(deleteBtn);

    // APPEND LI TO LIST
    itemList.appendChild(li);


}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
