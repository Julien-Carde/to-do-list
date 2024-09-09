let addBtn = document.querySelector("button"); // Selecting the add button
let newTask = document.querySelector("input[type='text']"); // Selecting the input field


// Add an event listener to the button to trigger the addTask function when clicked
addBtn.addEventListener('click', addTask);

newTask.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default action (like form submission)
        addBtn.click(); // Programmatically trigger the button click
    }
});

function addTask() {
    let taskValue = newTask.value; // Get the input field value

    if (taskValue) { // Check if the input is not empty
        // Create a new task element
        let taskItem = document.createElement('li');
        taskItem.textContent = taskValue;

        let deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';

        // Add the delete icon to the button
        let deleteIcon = document.createElement('img');
        deleteIcon.src = 'https://www.svgrepo.com/show/21045/delete-button.svg';
        deleteIcon.alt = 'Delete';
        deleteIcon.style.width = '18px';
        deleteIcon.style.height = '18px';

        let checkBox = document.createElement('button');
        checkBox.className = 'checkBox';

        let checkIcon = document.createElement('img');
        checkIcon.className = 'checkIcon';
        
        checkIcon.src = 'data:image/png;base64,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'
        checkBox.appendChild(checkIcon);

        // Append the delete icon to the delete button
        deleteButton.appendChild(deleteIcon);

        // Append the delete button to the task item
        taskItem.appendChild(deleteButton);

        taskItem.appendChild(checkBox);


        // Add the new task to the tasks list
        document.getElementById('list-container').appendChild(taskItem);

        // Clear the input field after adding the task
        newTask.value = '';

        

        deleteButton.addEventListener('click', deleteTask);
        checkBox.addEventListener('click', checkTask);
    }
}

function deleteTask(event) {
    // Get the button that was clicked
    let deleteButton = event.target;

    // Find the parent <li> element (the task item)
    let taskItem = deleteButton.closest('li');

    // Remove the task item from the list
    taskItem.remove();
}

// Select all checkboxes with the class 'checkBox'
const checkBoxes = document.querySelectorAll('.checkBox');

// Function to handle the task checking
function checkTask(event) {
    const listItem = event.target.closest('li');
    listItem.classList.toggle('completed'); // Toggle 'completed' class for a strikethrough effect
}

// Add event listener to each checkbox
checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', checkTask);
});
