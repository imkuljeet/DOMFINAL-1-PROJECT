var form = document.getElementById('addForm');
    var itemList = document.getElementById('items');
    var filter = document.getElementById('filter')

    // FORM SUBMIT EVENT
    form.addEventListener('submit', addItem);

    // DELETE EVENT
    itemList.addEventListener('click', removeItem);

    // FILTER EVENT
    filter.addEventListener('keyup', filterItems);

    // ADD ITEM
    function addItem(e) {
      e.preventDefault();

      // GET INPUT VALUES
      var newItem = document.getElementById('item').value;
      var newDescription = document.getElementById('description').value;

      // CREATE NEW LI ELEMENT
      var li = document.createElement('li');

      // ADD CLASS
      li.className = 'list-group-item';

      // ADD TEXT NODE WITH INPUT VALUES
      li.innerHTML = `<strong>${newItem}</strong> ${newDescription}`;

      // CREATE DEL BUTTON ELEMENT
      var deleteBtn = document.createElement('button');

      // ADD CLASSES TO DELETE BUTTON
      deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

      // APPEND TEXT NODE
      deleteBtn.appendChild(document.createTextNode('x'));

      // APPEND BUTTON TO LI
      li.appendChild(deleteBtn);

      // APPEND LI TO LIST
      itemList.appendChild(li);
    }

    function removeItem(e) {
      if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
          var li = e.target.parentElement;
          itemList.removeChild(li);
        }
      }
    }

    // FILTER ITEMS
    function filterItems(e) {
      // CONVERT TEXT TO LOWERCASE
      var text = e.target.value.toLowerCase();
      var items = itemList.getElementsByTagName('li');

      Array.from(items).forEach(function (item) {
        var itemText = item.textContent.toLowerCase();
        if (itemText.includes(text)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }