let groceryList = []; // Array to store all items

// Function to add new item to the list
function addItem() {
    const itemInput = document.getElementById('new-item');
    const itemText = itemInput.value.trim();

    // Check if the input is not empty
    if (itemText) {
        groceryList.push({ name: itemText, purchased: false }); // Add new item with purchased set to false
        itemInput.value = ''; // Clear the input field
        renderLists(); // Render the updated lists
    }
}

// Function to toggle purchased status of an item
function toggleItem(index) {
    groceryList[index].purchased = !groceryList[index].purchased; // Toggle the purchased status
    renderLists(); // Re-render the lists
}

// Function to render the lists (All items, Unpurchased, Purchased)
function renderLists() {
    const groceryListElement = document.getElementById('grocery-list');
    const unpurchasedListElement = document.getElementById('unpurchased-list');
    const purchasedListElement = document.getElementById('purchased-list');

    // Clear all lists before re-rendering
    groceryListElement.innerHTML = '';
    unpurchasedListElement.innerHTML = '';
    purchasedListElement.innerHTML = '';

    // Loop through grocery list and display items
    groceryList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.onclick = () => toggleItem(index); // Toggle item on click
        if (item.purchased) {
            li.classList.add('purchased'); // Add strikethrough if item is purchased
            purchasedListElement.appendChild(li);
        } else {
            unpurchasedListElement.appendChild(li);
        }
        groceryListElement.appendChild(li); // Display item in all items list
    });
}

// Call renderLists to initialize the lists on page load
renderLists();
